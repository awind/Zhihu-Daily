import { RECEIVE_THEMES } from './types' 

export function receiveThemes(themes) {
    return {
        type: RECEIVE_THEMES,
        themes,
    }
}