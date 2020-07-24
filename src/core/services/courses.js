import request from './request';

/** Get all courses */
const getCourses = () => request({method: 'get', url: '/courses'});

/** Get course by id */
const getCourse = data => request({method: 'get', url: `/courses/${data}`});

/** Create course */
const createCourse = data => {
    return request({
        contentType: 'multipart/form-data',
        method: 'post',
        url: '/courses',
        data,
    });
};

/** Update course */
const updateCourse = (id, data) =>
    request({
        // contentType: 'multipart/form-data',
        // contentType: 'application/json',
        method: 'put',
        url: `/courses/${id}`,
        data,
    });

/** Update course image */
const updateCourseImage = (id, data) =>
    request({
        contentType: 'multipart/form-data',
        method: 'post',
        url: `/courses/${id}/image`,
        data,
    });

/** Send course request */
const sendCourseRequest = data =>
    request({method: 'post', url: '/requests', data});

const updateCourseRequest = (id, data) => request({
    // contentType: 'multipart/form-data',
    // contentType: 'application/json',
    method: 'put',
    url: `/requests/${id}`,
    data,
});

const deleteCourseRequest = (id) => request({
    method: 'delete',
    url: `/requests/${id}`,
})

export default {
    getCourses,
    getCourse,
    createCourse,
    updateCourse,
    updateCourseImage,
    updateCourseRequest,
    sendCourseRequest,
    deleteCourseRequest,
};
