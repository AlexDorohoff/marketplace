import DocumentsServices from '../services/documents';

export const types = {
    DOCUMENTS_REQUEST: 'DOCUMENTS_REQUEST',
    DOCUMENT_REQUEST: 'DOCUMENT_REQUEST',
    DOCUMENTS_FAILURE: 'DOCUMENTS_FAILURE',
    DOCUMENT_FAILURE: 'DOCUMENT_FAILURE',
    DOCUMENTS_SUCCESS: 'DOCUMENTS_SUCCESS',
    DOCUMENT_SUCCESS: 'DOCUMENT_SUCCESS',
    DOCUMENTS_CLOSE: 'DOCUMENTS_CLOSE',
    GET_DOCUMENTS_BY_TITLE: 'GET_DOCUMENTS_BY_TITLE',
    GET_DOCUMENTS_BY_ID: 'GET_DOCUMENTS_BY_ID',
    SEARCH_DOCUMENTS_BY_PART_OF_TITLE_OR_TAG:
        'SEARCH_DOCUMENTS_BY_PART_OF_TITLE_OR_TAG',
};

export const getDocuments = (param = true) => dispatch => {
    if (param) {
        dispatch({ type: types.DOCUMENTS_REQUEST });
        DocumentsServices.getDOCUMENTS()
            .then(res => {
                dispatch({ type: types.DOCUMENTS_SUCCESS, payload: { res } });
            })
            .catch(error => {
                dispatch({ type: types.DOCUMENTS_FAILURE, payload: { error } });
            });
    } else {
        dispatch({ type: types.DOCUMENTS_CLOSE });
    }
};

export const getDocument = id => dispatch => {
    dispatch({ type: types.DOCUMENT_REQUEST });
    DocumentsServices.getDocument(id)
        .then(res => {
            dispatch({ type: types.DOCUMENT_SUCCESS, payload: { res } });
        })
        .catch(error => {
            dispatch({ type: types.DOCUMENT_FAILURE, payload: { error } });
        });
};

export const getDocumentsByTitle = (
    title = 'Все документы',
    param = true
) => dispatch => {
    if (param) {
        const res = title;
        dispatch({ type: types.GET_DOCUMENTS_BY_TITLE, payload: { res } });
    } else {
        dispatch({ type: types.DOCUMENTS_CLOSE });
    }
};

export const searchDocumentsByPartOfTitleOrTag = (
    text = '',
    param = true
) => dispatch => {
    if (param) {
        if (text !== '') {
            const res = text.trim().toLowerCase();
            dispatch({
                type: types.SEARCH_DOCUMENTS_BY_PART_OF_TITLE_OR_TAG,
                payload: { res },
            });
        }
    } else {
        dispatch({ type: types.DOCUMENTS_CLOSE });
    }
};
