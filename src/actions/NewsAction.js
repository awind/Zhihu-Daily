import { RECEIVE_NEWS, REQUEST_NEWS } from './types' 

export function requestNews() {
    return {
        type: REQUEST_NEWS,
    }
}

export function receiveNews(stories, topStories) {
    return {
        type: RECEIVE_NEWS,
        stories,
        topStories,
    }
}