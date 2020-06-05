import { types } from '../actions/teachers';

const initialState = {
  fetching: false,
  inputData: [],
  data: [],
  searchData: [],
  error: null,
  teacherFetching: false,
  teacher: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_TEACHERS_BY_TITLE: {
      const data =
        action.payload.res === 'Все предметы'
          ? state.inputData
          : state.inputData.filter(teacher => {
              const teacherCourses =
                action.payload.courses.length > 0
                  ? action.payload.courses.filter(
                      course => course.user.id === teacher.id
                    )
                  : [];
              return teacherCourses.some(
                course => course.title === action.payload.res
              );
            });

      return {
        ...state,
        fetching: false,
        error: null,
        data,
      };
    }

    case types.SEARCH_TEACHERS_BY_PART_OF_TITLE_OR_TAG: {
      const searchData = state.inputData.filter(teacher => {
        const teacherCourses =
          action.payload.courses.length > 0
            ? action.payload.courses.filter(
                course => course.user.id === teacher.id
              )
            : [];

        return (
          teacherCourses.some(course => {
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
              themes.some(theme =>
                theme.toLowerCase().includes(action.payload.res)
              )
            );
          }) || teacher.name.toLowerCase().includes(action.payload.res)
        );
      });

      return {
        ...state,
        fetching: false,
        error: null,
        searchData,
      };
    }

    case types.TEACHERS_CLOSE:
      return {
        ...initialState,
      };

    case types.TEACHERS_FAILURE:
      return {
        ...state,
        fetching: false,
        inputData: [],
        data: [],
        error: action.payload.error,
      };

    case types.TEACHERS_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: null,
        inputData: action.payload.res,
        data: action.payload.res,
      };

    case types.TEACHER_SUCCESS:
      return {
        ...state,
        teacherFetching: false,
        error: null,
        teacher: action.payload.res,
      };

    case types.TEACHER_REQUEST:
      return {
        ...state,
        teacherFetching: true,
        error: null,
      };

    case types.TEACHERS_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };

    default:
      return state;
  }
};
