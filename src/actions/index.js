import { RECEIVE_NEWS, RECEIVE_THEMES, RECEIVE_THEME_INDEX } from './types' 
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
                console.log(data)
                dispatch(receiveNews(date , data.stories, data.top_stories))
            })
        } else {
            API.getNewsBefore(date).then(data => {
                dispatch(receiveNews(date, data.stories, []))
            })
        }


    }
}

function fetchThemeNews(date) {
    return (dispatch) => {

    }
}

export {
    receiveNews,
    receiveThemes,
    receiveThemeIndex,
    fetchNews,
    fetchThemeNews,
}