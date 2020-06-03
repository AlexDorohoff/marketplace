// import { push } from 'connected-react-router';
import TeachersServices from '../services/teachers';

export const types = {
  TEACHERS_REQUEST: 'TEACHERS_REQUEST',
  TEACHER_REQUEST: 'TEACHER_REQUEST',
  TEACHERS_FAILURE: 'TEACHERS_FAILURE',
  TEACHERS_SUCCESS: 'TEACHERS_SUCCESS',
  TEACHERS_CLOSE: 'TEACHERS_CLOSE',
  TEACHER_SUCCESS: 'TEACHER_SUCCESS',
  GET_TEACHERS_BY_TITLE: 'GET_TEACHERS_BY_TITLE',
  SEARCH_TEACHERS_BY_PART_OF_TITLE_OR_TAG: 'SEARCH_TEACHERS_BY_PART_OF_TITLE_OR_TAG',
};

export const getTeachers = (param = true) => (dispatch) => {

  if (param) {
    dispatch({ type: types.TEACHERS_REQUEST });
    TeachersServices.getTeachers()
      .then((res) => {
        dispatch({ type: types.TEACHERS_SUCCESS, payload: { res } });
      })
      .catch((error) => {
        dispatch({ type: types.TEACHERS_FAILURE, payload: { error } });
      });
  } else {
    dispatch({ type: types.TEACHERS_CLOSE });
  }
};

export const getTeacher = (id = 1, param = true) => (dispatch) => {
  if (param) {
    dispatch({ type: types.TEACHER_REQUEST });
    TeachersServices.getTeacher(id)
      .then((res) => {
        dispatch({ type: types.TEACHER_SUCCESS, payload: { res } });
      })
      .catch((error) => {
        dispatch({ type: types.TEACHERS_FAILURE, payload: { error } });
      });
  } else {
    dispatch({ type: types.TEACHERS_CLOSE });
  }
};

export const getTeachersByTitle = (title = 'Все предметы', courses = [], param = true) => (dispatch) => {
  if (param) {
    const res = title;
    dispatch({ type: types.GET_TEACHERS_BY_TITLE, payload: { res, courses } });
  } else {
    dispatch({ type: types.TEACHERS_CLOSE });
  }
};

export const searchTeachersByPartOfTitleOrTag = (text = '', courses = [], param = true) => (dispatch) => {
  if (param) {
    if (text !== '') {
      const res = text.trim().toLowerCase();
      dispatch({ type: types.SEARCH_TEACHERS_BY_PART_OF_TITLE_OR_TAG, payload: { res, courses } });
    }
  } else {
    dispatch({ type: types.TEACHERS_CLOSE });
  }
};