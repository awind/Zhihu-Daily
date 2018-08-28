import { RECEIVE_NEWS, RECEIVE_THEME_INDEX } from '../actions/types'
import { RECEIVE_THEMES } from '../actions/types'

const initState = {
    index: 0,
    themes: [],
    stories: [],
    topStories: [],
}

function zhihuDaily(state = initState, action) {
    switch(action.type) {
        case RECEIVE_NEWS:
            return Object.assign({}, state, {
                stories: action.stories,
                topStories: action.topStories,
            })
        case RECEIVE_THEMES:
            return Object.assign({}, state, {
                themes: action.themes
            })
        case RECEIVE_THEME_INDEX:
            return Object.assign({}, state, {
                index: action.index,
            })
        default:
            return state
    }
}

export default zhihuDaily
