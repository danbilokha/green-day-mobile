import {combineReducers, createStore} from 'redux'

const defaultRemoteState = {
    REMOTE_FEED: null,
    SORTED_REMOTE_DATA: [],
    UIDS: null
};

const defaultUserState = {
    USER: null,
};

const user = (state = defaultUserState, action) => {
    switch (action.type) {
        case 'LOGINED_USER':
            return {
                ...state,
                USER: action.payload
            };
        default:
            return state;
    }
};

const remote = (state = defaultRemoteState, action) => {
    switch (action.type) {
        case 'REMOTE_DATA':
            return {
                ...state,
                REMOTE_FEED: action.payload
            };
        case 'SORTED_REMOTE_DATA':
            return {
                ...state,
                SORTED_REMOTE_DATA: action.payload,
            };
        case 'UIDS':
            return {
                ...state,
                UIDS: action.payload
            };
        default:
            return state;
    }
};

let store = createStore(combineReducers({
    remote,
    user
}));

export {store};
