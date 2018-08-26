import { RECEIVE_NEWS } from '../actions/types'
import { RECEIVE_THEMES } from '../actions/types'

const initState = {
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
        default:
            return state
    }
}

export default zhihuDaily
