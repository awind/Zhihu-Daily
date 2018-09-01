import { RECEIVE_NEWS, RECEIVE_THEME_NEWS, RECEIVE_THEMES, RECEIVE_THEME_INDEX } from './types' 
import * as API from '../utils/api'
import { today } from '../utils/date'

function receiveNews(date, stories, topStories) {
    return {
        type: RECEIVE_NEWS,
        date,
        stories,
        topStories,
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
    const currDate = today()
    return (dispatch) => {
        if (date === currDate) {
            API.getLatestNews().then(data => {
                dispatch(receiveNews(date , data.stories, data.top_stories))
            })
        } else {
            API.getNewsBefore(date).then(data => {
                dispatch(receiveNews(date, data.stories, []))
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
                dispatch(receiveThemeNews(data.stories, "", "", []))
            })
        }
    }
}

export {
    receiveNews,
    receiveThemes,
    receiveThemeNews,
    receiveThemeIndex,
    fetchNews,
    fetchThemeNews,
}