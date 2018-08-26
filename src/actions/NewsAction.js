import { RECEIVE_NEWS } from './types' 

export function receiveNews(stories, topStories) {
    return {
        type: RECEIVE_NEWS,
        stories,
        topStories,
    }
}