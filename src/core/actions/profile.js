import ProfileServices from '../services/profile';

export const types = {
  PROFILE_REQUEST: 'PROFILE_REQUEST',
  PROFILE_FAILURE: 'PROFILE_FAILURE',
  PROFILE_SUCCESS: 'PROFILE_SUCCESS',
  REQUESTS_REQUEST: 'REQUESTS_REQUEST',
  REQUESTS_FAILURE: 'REQUESTS_FAILURE',
  REQUESTS_SUCCESS: 'REQUESTS_SUCCESS',
  PROFILE_INITIAL: 'PROFILE_INITIAL',
};

export const getProfile = (bool = true) => dispatch => {
  if (bool) {
    dispatch({ type: types.PROFILE_REQUEST });
    ProfileServices.getProfile()
      .then(response => {
        dispatch({ type: types.PROFILE_SUCCESS, payload: { data: response } });
      })
      .catch(error => {
        dispatch({ type: types.PROFILE_FAILURE, payload: { error } });
      });
  } else {
    dispatch({ type: types.PROFILE_INITIAL });
  }
};

export const getRequests = () => dispatch => {
  dispatch({ type: types.REQUESTS_REQUEST });
  ProfileServices.getRequests()
    .then(response => {
      dispatch({ type: types.REQUESTS_SUCCESS, payload: { data: response } });
    })
    .catch(error => {
      dispatch({ type: types.REQUESTS_FAILURE, payload: { error } });
    });
};

