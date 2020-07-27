import { types } from '../actions/Documents';

const initialState = {
    fetching: false,
    documentsFetching: false,
    inputDocuments: [],
    Documents: [],
    searchDocuments: [],
    document: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_DOCUMENTS_BY_TITLE: {
            const Documents =
                action.payload.res === 'Все предметы'
                    ? state.inputDocuments
                    : state.inputDocuments.filter(
                    document => document.title === action.payload.res
                    );

            return {
                ...state,
                fetching: false,
                error: null,
                Documents,
            };
        }

        case types.DOCUMENTS_CLOSE:
            return initialState;

        case types.DOCUMENTS_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
            };

        case types.DOCUMENTS_SUCCESS:
            return {
                ...state,
                fetching: false,
                error: null,
                inputDocuments: action.payload.res,
                Documents: action.payload.res,
            };

        case types.DOCUMENT_REQUEST:
            return {
                ...state,
                documentFetching: true,
                error: null,
            };

        case types.DOCUMENT_SUCCESS:
            return {
                ...state,
                documentFetching: false,
                error: null,
                document: action.payload.res,
            };

        case types.DOCUMENTS_FAILURE:
            return {
                ...state,
                fetching: false,
                inputDocuments: [],
                Documents: [],
                error: action.payload.error,
            };
        case types.DOCUMENT_FAILURE:
            return {
                ...state,
                documentFetching: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};
