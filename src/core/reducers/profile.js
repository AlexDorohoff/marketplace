import { types } from '../actions/profile';

const initialState = {
  fetching: false,
  requestsFetching: false,
  error: null,
  profile: null,
  requests: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_INITIAL:
      return {
        ...initialState
      };

    case types.PROFILE_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.PROFILE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      };

    case types.PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        profile: { ...action.payload.data },
      };

    case types.REQUESTS_REQUEST:
      return {
        ...state,
        requestsFetching: true,
        error: null,
      };

    case types.REQUESTS_FAILURE:
      return {
        ...state,
        requestsFetching: false,
        error: action.payload.error,
      };

    case types.REQUESTS_SUCCESS:
      return {
        ...state,
        requestsFetching: false,
        error: null,
        requests: [...action.payload.data],
      };

    default:
      return state;
  }
};
