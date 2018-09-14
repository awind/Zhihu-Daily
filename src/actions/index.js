import { RECEIVE_NEWS, RECEIVE_THEME_NEWS, LOAD_MORE_NEWS, RECEIVE_THEMES, RECEIVE_THEME_INDEX, LOAD_MORE_THEME_NEWS } from './types' 
import * as API from '../utils/api'
import { getCurrentDate, simpleDateFormat } from '../utils/date'

function receiveNews(date, stories, topStories) {
    return {
        type: RECEIVE_NEWS,
        date,
        stories,
        topStories,
    }
}

function loadMoreNews(date, stories) {
    return {
        type: LOAD_MORE_NEWS,
        date,
        stories
    }
}

function receiveThemeNews(themeStories, image, description, editors) {
    return {
        type: RECEIVE_THEME_NEWS,
        themeStories,
        image,
        description,
        editors,
    }
}

function loadMoreThemeNews(themeStories) {
    return {
        type: LOAD_MORE_THEME_NEWS,
        themeStories
    }
}

function receiveThemes(themes) {
    return {
        type: RECEIVE_THEMES,
        themes,
    }
}

function receiveThemeIndex(index) {
    return {
        type: RECEIVE_THEME_INDEX,
        index,
    }
}

function fetchNews(date) {
    const currDate = getCurrentDate()
    return (dispatch) => {
        if (date === currDate) {
            API.getLatestNews().then(data => {
                dispatch(receiveNews(date , data.stories, data.top_stories))
            })
        } else {
            const simpleDate = simpleDateFormat(date)
            API.getNewsBefore(simpleDate).then(data => {
                dispatch(loadMoreNews(date, data.stories))
            })
        }
    }
}

function fetchThemeNews(themeID, storyID) {
    return (dispatch) => {
        if (!storyID) {
            API.getThemeNews(themeID).then(data => {
                var editors = []
                if (data.editors.constructor === Array) {
                    editors = data.editors
                } else {
                    editors = [data.editors]
                }
                dispatch(receiveThemeNews(data.stories, data.image, data.description, editors))
            })
        } else {
            API.getThemeNewsBefore(themeID, storyID).then(data => {
                dispatch(loadMoreThemeNews(data.stories))
            })
        }
    }
}

export {
    receiveThemes,
    receiveThemeIndex,
    fetchNews,
    fetchThemeNews,
}