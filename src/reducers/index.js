import { combineReducers } from 'redux'
import { REQUEST_THEMES, RECEIVE_THEMES } from '../actions/types'

const initState = {
    isFetching: false,
    themes: [],
}

function themes(state = initState, action) {
    switch(action.type) {
        case REQUEST_THEMES:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_THEMES:
            return Object.assign({}, state, {
                isFetching: false,
                themes: action.themes
            })
        default:
            return state
    }
}

export default combineReducers({
    themes,
})
