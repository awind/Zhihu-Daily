import { RECEIVE_NEWS, LOAD_MORE_NEWS, RECEIVE_THEME_INDEX, RECEIVE_THEMES, RECEIVE_THEME_NEWS, LOAD_MORE_THEME_NEWS } from '../actions/types'

const initState = {
    index: 0, // drawer selected index
    themes: [],
    stories: [],
    topStories: [],
    themeNews: {
        image: "",
        description: "",
        editors: [],
        themeStories: []
    },
}

function zhihuDaily(state = initState, action) {
    switch(action.type) {
        case RECEIVE_NEWS:
            return Object.assign({}, state, {
                stories: {
                    ...state.stories,
                    [action.date]: action.stories
                },
                topStories: [
                    ...state.topStories,
                    ...action.topStories
                ]
            })
        case LOAD_MORE_NEWS:
            return Object.assign({}, state, {
                stories: {
                    ...state.stories,
                    [action.date]: action.stories,
                }
            })
        case RECEIVE_THEMES:
            return Object.assign({}, state, {
                themes: action.themes
            })
        case RECEIVE_THEME_NEWS:
            return {
                ...state,
                themeNews: {
                    image: action.image,
                    description: action.description,
                    editors: action.editors,
                    themeStories: action.themeStories,
                }
            }
        case LOAD_MORE_THEME_NEWS:
            return Object.assign({}, state, {
                themeNews: {
                    ...state.themeNews,
                    themeStories: [
                        ...state.themeNews.themeStories,
                        ...action.themeStories,
                    ]
                }
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