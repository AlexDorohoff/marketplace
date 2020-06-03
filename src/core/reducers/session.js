import { types } from '../actions/session';

const initialState = {
  fetching: false,
  authenticated: false,
  error: null,
  user: null,
  showDialog: false
};

export default (state = initialState, action) => {
  switch (action.type) {

    case types.AUTH_SELF_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.AUTH_SELF_FAILURE:
      return {
        ...state,
        fetching: false,
        authenticated: false,
        error: action.payload.error,
      };

    case types.AUTH_SELF_SUCCESS:
      return {
        ...state,
        fetching: false,
        authenticated: true,
        error: null,
        user: { ...action.payload.data },
      };

    case types.AUTH_LOGOUT:
      return {
        ...state,
        fetching: false,
        authenticated: false,
        user: null,
      };
      case types.AUTH_SHOW_DIALOG:
      return {
        ...state,
        showDialog: action.payload
      };

    default:
      return state;
  }
};
