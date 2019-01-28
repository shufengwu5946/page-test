
export const loadLists = (lists) => {
    return {
        type: 'LOAD_LISTS',
        lists,
    }
}

export const loadShow = (lists, page) => {
    return {
        type: 'LOAD_SHOW',
        lists,
        page,
    }
}

export const left = (lists, page) => {
    return {
        type: 'LEFT',
        lists, 
        page,
    }
}

export const right = (lists, page) => {
    return {
        type: 'RIGHT',
        lists, 
        page,
    }
}





