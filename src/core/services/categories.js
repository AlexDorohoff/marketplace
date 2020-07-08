import request from './request';

/** Get categories */
const getCategories = () => request({ method: 'get', url: '/category' });

/** Get category by id */
const getCategory = data => request({ method: 'get', url: `/category/${data}` });

export default {
    getCategories,
    getCategory
};
