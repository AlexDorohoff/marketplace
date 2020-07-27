import request from './request';

/** Get categories */
const getDocuments = () => request({ method: 'get', url: '/images' });

/** Get category by id */
const getDocument = data => request({ method: 'get', url: `/image/${data}` });

export default {
    getDocuments,
    getDocument,
};
