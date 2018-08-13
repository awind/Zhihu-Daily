import { RECEIVE_LONG_COMMENTS, RECEIVE_SHORT_COMMENTS, REQUEST_COMMENTS } from './types' 

export function requestComments() {
    return {
        type: REQUEST_COMMENTS,
    }
}

export function receiveLongComments(longComments) {
    return {
        type: RECEIVE_LONG_COMMENTS,
        longComments,
    }
}

export function receiveShortComments(shortComments) {
    return {
        type: RECEIVE_SHORT_COMMENTS,
        shortComments,
    }
}