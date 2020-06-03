import { push } from 'connected-react-router';
import ProfileServices from '../services/profile';
import AuthServices from '../services/auth';

export const types = {
  AUTH_SELF_REQUEST: 'AUTH_SELF_REQUEST',
  AUTH_SELF_FAILURE: 'AUTH_SELF_FAILURE',
  AUTH_SELF_SUCCESS: 'AUTH_SELF_SUCCESS',
  AUTH_LOGOUT: 'AUTH_LOGOUT',
  AUTH_SHOW_DIALOG: 'AUTH_SHOW_DIALOG',
};

export const getSelf = (source = '') => dispatch => {
  const token = localStorage.getItem('token');
  if (token) {
    dispatch({ type: types.AUTH_SELF_REQUEST });
    ProfileServices.getProfile()
      .then(response => {
        dispatch({
          type: types.AUTH_SELF_SUCCESS,
          payload: { data: response.user },
        });
        // if (response.user.type === 'teacher') {
        //   dispatch(push('/my/teacher1'));
        // } else if (response.user.type === 'student') {
        //   dispatch(push('/my/student1'));
        // }
        dispatch({ type: 'AUTH_SHOW_DIALOG', payload: false });
      })
      .catch(error => {
        console.log('Auth error', error);
        if (error.status === 500) {
          //  trying to refresh token
          const rToken = localStorage.getItem('refresh_token');
          if (rToken) {
            AuthServices.refreshToken({ refresh_token: rToken })
              .then(response => {
                localStorage.setItem('token', response.access_token);
                localStorage.setItem('refresh_token', response.refresh_token);
                dispatch(getSelf('refreshToken'));
              })
              .catch(err => {
                localStorage.removeItem('refresh_token');
                dispatch({
                  type: types.AUTH_SELF_FAILURE,
                  payload: { err },
                });
                dispatch({ type: 'AUTH_SHOW_DIALOG', payload: true });
              });
          }
        } else {
          localStorage.removeItem('token');
          dispatch({
            type: types.AUTH_SELF_FAILURE,
            payload: { error },
          });
        }
      });
  } else {
    dispatch({ type: 'AUTH_SHOW_DIALOG', payload: true });
  }
};

export const loginSuccess = ({
  token,
  refreshToken,
  source = '',
}) => dispatch => {
  localStorage.setItem('token', token);
  localStorage.setItem('refresh_token', refreshToken);
  dispatch({ type: 'AUTH_SHOW_DIALOG', payload: false });
  dispatch(getSelf(source));
};

export const logout = () => dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('refresh_token');
  dispatch({ type: types.AUTH_LOGOUT });
  dispatch(push('/'));
};

export const updateSelf = (cb = null) => dispatch => {
  ProfileServices.getProfile()
    .then(response => {
      dispatch({
        type: types.AUTH_SELF_SUCCESS,
        payload: { data: response },
      });
      if (cb) cb();
    })
    .catch(error => {
      localStorage.removeItem('token');
      dispatch({
        type: types.AUTH_SELF_FAILURE,
        payload: { error },
      });
    });
};
