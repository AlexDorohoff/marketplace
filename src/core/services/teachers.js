import request from './request';

/** Get teachers */
const getTeachers = () => request({ method: 'get', url: '/teachers' });

/** Get teacher by id */
const getTeacher = data => request({ method: 'get', url: `/teachers/${data}` });

/** Update request */
const updateTeacherRequest = (id, data) =>   request({
  // contentType: 'multipart/form-data',
  // contentType: 'application/json',
  method: 'put',
  url: `/requests/${id}`,
  data,
});

export default {
  getTeachers,
  getTeacher,
  updateTeacherRequest,
};
