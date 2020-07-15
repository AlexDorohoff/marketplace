import request from './request';

/** Get categories */
const getCategories = () => request({ method: 'get', url: '/category' });

/** Get category by id */
const getCategory = data => request({ method: 'get', url: `/category/${data}` });

const getItemsByCategory = data => request({method:"get", url: `/category/search/${data}`});

export default {
    getCategories,
    getCategory,
    getItemsByCategory
};
