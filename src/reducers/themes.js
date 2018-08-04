import { REQUEST_THEMES, RECEIVE_THEMES } from '../actions/types'

const initState = {
    isFetchingThemes: false,
    themes: [],
    stories: [],
    topStories: [],
}

function themes(state = initState, action) {
    switch(action.type) {
        case REQUEST_THEMES:
            return Object.assign({}, state, {
                isFetchingThemes: true
            })
        case RECEIVE_THEMES:
            return Object.assign({}, state, {
                isFetchingThemes: false,
                themes: action.themes
            })
        default:
            return state
    }
}

export default themes