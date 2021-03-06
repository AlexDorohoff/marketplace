import request from './request';

/** Get teachers */
const getTeachers = () => request({ method: 'get', url: '/teachers' });

/** Get teacher by id */
const getTeacher = data => request({ method: 'get', url: `/teachers/${data}` });

/** Update request */


export default {
  getTeachers,
  getTeacher,
};
