import { types } from '../actions/courses';

const initialState = {
  fetching: false,
  courseFetching: false,
  inputCourses: [],
  courses: [],
  searchCourses: [],
  course: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COURSES_BY_TITLE: {
      const courses =
        action.payload.res === 'Все предметы'
          ? state.inputCourses
          : state.inputCourses.filter(
              course => course.title === action.payload.res
            );

      return {
        ...state,
        fetching: false,
        error: null,
        courses,
      };
    }

    case types.SEARCH_COURSES_BY_PART_OF_TITLE_OR_TAG: {
      const searchCourses = state.inputCourses.filter(course => {
        let contents;
        try {
          contents = JSON.parse(course.contents);
        } catch (e) {
          contents = course.contents;
        }
        const themes =
          contents && contents.programm
            ? contents.programm.map(item => item.theme)
            : [];

        return (
          course.title.toLowerCase().includes(action.payload.res) ||
          course.tags.some(tag =>
            tag.name.toLowerCase().includes(action.payload.res)
          ) ||
          course.user.name.toLowerCase().includes(action.payload.res) ||
          themes.some(theme => theme.toLowerCase().includes(action.payload.res))
        );
      });

      return {
        ...state,
        fetching: false,
        error: null,
        searchCourses,
      };
    }

    case types.COURSES_CLOSE:
      return initialState;

    case types.COURSES_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    case types.COURSES_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        inputCourses: action.payload.res,
        courses: action.payload.res,
      };

    case types.COURSE_REQUEST:
      return {
        ...state,
        courseFetching: true,
        error: null,
      };

    case types.COURSE_SUCCESS:
      return {
        ...state,
        courseFetching: false,
        error: null,
        course: action.payload.res,
      };

    case types.COURSES_FAILURE:
      return {
        ...state,
        fetching: false,
        inputCourses: [],
        courses: [],
        error: action.payload.error,
      };
    case types.COURSE_FAILURE:
      return {
        ...state,
        courseFetching: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
