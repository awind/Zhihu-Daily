import { RECEIVE_NEWS, RECEIVE_THEMES, RECEIVE_THEME_INDEX } from './types' 

function receiveNews(stories, topStories) {
    return {
        type: RECEIVE_NEWS,
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

export {
    receiveNews,
    receiveThemes,
    receiveThemeIndex,
}