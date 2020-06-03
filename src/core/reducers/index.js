import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import session from './session';
import locale from './locale';
import notification from './notification';
import teachers from './teachers';
import courses from './courses';
import profile from './profile';
import search from './search';


const reducers = {
  session,
  locale,
  notification,
  teachers,
  courses,
  profile,
  search
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
