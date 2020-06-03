import CoursesServices from '../services/courses';

export const types = {
  COURSES_REQUEST: 'COURSES_REQUEST',
  COURSE_REQUEST: 'COURSE_REQUEST',
  COURSES_FAILURE: 'COURSES_FAILURE',
  COURSE_FAILURE: 'COURSE_FAILURE',
  COURSES_SUCCESS: 'COURSES_SUCCESS',
  COURSE_SUCCESS: 'COURSE_SUCCESS',
  COURSES_CLOSE: 'COURSES_CLOSE',
  GET_COURSES_BY_TITLE: 'GET_COURSES_BY_TITLE',
  SEARCH_COURSES_BY_PART_OF_TITLE_OR_TAG:
    'SEARCH_COURSES_BY_PART_OF_TITLE_OR_TAG',
};

export const getCourses = (param = true) => dispatch => {
  if (param) {
    dispatch({ type: types.COURSES_REQUEST });
    CoursesServices.getCourses()
      .then(res => {
        dispatch({ type: types.COURSES_SUCCESS, payload: { res } });
      })
      .catch(error => {
        dispatch({ type: types.COURSES_FAILURE, payload: { error } });
      });
  } else {
    dispatch({ type: types.COURSES_CLOSE });
  }
};

export const getCourse = id => dispatch => {
  dispatch({ type: types.COURSE_REQUEST });
  CoursesServices.getCourse(id)
    .then(res => {
      dispatch({ type: types.COURSE_SUCCESS, payload: { res } });
    })
    .catch(error => {
      dispatch({ type: types.COURSE_FAILURE, payload: { error } });
    });
};

export const getCoursesByTitle = (
  title = 'Все предметы',
  param = true
) => dispatch => {
  if (param) {
    const res = title;
    dispatch({ type: types.GET_COURSES_BY_TITLE, payload: { res } });
  } else {
    dispatch({ type: types.COURSES_CLOSE });
  }
};

export const searchCoursesByPartOfTitleOrTag = (
  text = '',
  param = true
) => dispatch => {
  if (param) {
    if (text !== '') {
      const res = text.trim().toLowerCase();
      dispatch({
        type: types.SEARCH_COURSES_BY_PART_OF_TITLE_OR_TAG,
        payload: { res },
      });
    }
  } else {
    dispatch({ type: types.COURSES_CLOSE });
  }
};
