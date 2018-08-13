import { REQUEST_COMMENTS, RECEIVE_LONG_COMMENTS, RECEIVE_SHORT_COMMENTS } from '../actions/types'

const initState = {
    isFetchingComments: false,
    longComments: [],
    shortComments: [],
}

function comments(state = initState, action) {
    switch(action.type) {
        case REQUEST_COMMENTS:
            return {
                ...state,
                isFetchingComments: true,
            }
        case RECEIVE_LONG_COMMENTS:
            return {
                ...state,
                isFetchingComments: false,
                longComments: action.longComments,
            }
        case RECEIVE_SHORT_COMMENTS:
            return {
                ...state,
                isFetchingComments: false,
                shortComments: action.shortComments,
            }
        default:
            return state
    }
}

export default comments