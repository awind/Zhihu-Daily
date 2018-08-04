import { REQUEST_NEWS, RECEIVE_NEWS } from '../actions/types'

const initState = {
    isFetchingNews: false,
    stories: [],
    topStories: [],
}

function news(state = initState, action) {
    switch(action.type) {
        case REQUEST_NEWS:
            return Object.assign({}, state, {
                isFetchingNews: true,
            })
        case RECEIVE_NEWS:
            return Object.assign({}, state, {
                isFetchingNews: false,
                stories: action.stories,
                topStories: action.topStories,
            })
        default:
            return state
    }
}

export default news