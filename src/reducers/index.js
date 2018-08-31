import { RECEIVE_NEWS, RECEIVE_THEME_INDEX } from '../actions/types'
import { RECEIVE_THEMES } from '../actions/types'

const initState = {
    index: 0, // drawer selected index
    themes: [],
    stories: [],
    topStories: [],
}

function zhihuDaily(state = initState, action) {
    const date = action.date
    switch(action.type) {
        case RECEIVE_NEWS:
            return Object.assign({}, state, {
                stories: {
                    ...state.stories,
                    [action.date]: action.stories
                },
                topStories: action.topStories
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