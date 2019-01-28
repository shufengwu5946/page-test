import { combineReducers } from "redux";

const show = (state = [], action) => {
    switch (action.type) {
        case 'LEFT':
            return action.lists.slice((action.page - 1) * 3, action.page * 3);
        case 'RIGHT':
            return action.lists.slice((action.page + 1) * 3, (action.page + 2) * 3);
        case 'LOAD_SHOW':
            return action.lists.slice(action.page * 3, (action.page + 1) * 3);
        default:
            return state;
    }
}

const page = (state = 0, action) => {
    switch (action.type) {
        case 'LEFT':
            return action.page - 1;
        case 'RIGHT':
            return action.page + 1;
        default:
            return state;
    }
}

const leftStatus = (state = false, action) => {
    switch (action.type) {
        case 'RIGHT':
            return true;
        case 'LEFT':
            if (action.page > 1) {
                return true;
            }
            return false;
        case 'LOAD_SHOW':
            if (action.page > 0) {
                return true;
            }
            return false;
        default:
            return state;
    }
}

const rightStatus = (state = false, action) => {
    switch (action.type) {
        case 'LEFT':
            return true;
        case 'RIGHT':
            if (action.lists.length - action.page * 3 > 6) {
                return true;
            }
            return false;
        case 'LOAD_SHOW':
            if (action.lists.length - action.page * 3 > 3) {
                return true;
            }
            return false;
        default:
            return state;
    }
}

const lists = (state = [], action) => {
    switch (action.type) {
        case 'LOAD_LISTS':
            return action.lists;
        default:
            return state;
    }
}

const reducer = combineReducers({
    lists,
    show,
    page,
    leftStatus,
    rightStatus,
})

export default reducer;