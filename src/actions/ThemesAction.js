import { REQUEST_THEMES, RECEIVE_THEMES } from './types' 

export function requestThemes() {
    return {
        type: REQUEST_THEMES,
    }
}

export function receiveThemes(themes) {
    return {
        type: RECEIVE_THEMES,
        themes,
    }
}