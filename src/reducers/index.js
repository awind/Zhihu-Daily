import { combineReducers } from 'redux'
import themes from './themes'
import news from './news'
import comments from './comments'

export default combineReducers({
    themes,
    news,
    comments,
})
