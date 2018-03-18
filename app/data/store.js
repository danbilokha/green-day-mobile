import { combineReducers, createStore } from 'redux'

export const NOTIFICATION_RECEIVED = 'NOTIFICATION_RECEIVED';
export const NOTIFICATIONS_READ = 'NOTIFICATIONS_READ';

const defaultRemoteState = {
    REMOTE_FEED: null,
    SORTED_REMOTE_DATA: [],
    UIDS: null
};

const defaultUserState = {
    USER: null,
};

const defaultNotificationsState = {
    data: [],
    countToShow: 0,
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

const notifications = (state = defaultNotificationsState, { type, payload }) => {
    switch (type) {
        case NOTIFICATION_RECEIVED:
            return {
                ...state,
                data: [...state.data, {...payload}],
                countToShow: state.countToShow + 1,
            };
        case NOTIFICATIONS_READ:
            return {
                ...state,
                countToShow: 0,
            };
        default:
            return state;
    }
};

const store = createStore(combineReducers({
    remote,
    user,
    notifications
}));

export const receiveNotification = (notification, date) => {
    store.dispatch({ type: NOTIFICATION_RECEIVED, payload: { notification, date } });
};

export const readNotifications = () => {
    store.dispatch({ type: NOTIFICATIONS_READ, });
};

export { store };
