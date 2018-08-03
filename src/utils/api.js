const YAHOO_PROXY_BASE = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url=%22'
const YAHOO_PROXY_SUFFIX = '%22&format=json'

const NEWS = 'https://news-at.zhihu.com/api/4/news/latest'
const NEWS_DETAIL = 'https://news-at.zhihu.com/api/4/news/{id}'
const NEWS_EXTRA = 'https://news-at.zhihu.com/api/4/story-extra/#{id}'
const NEWS_BEFORE = 'https://news-at.zhihu.com/api/4/news/before/{date}'
const NEWS_THEME = 'https://news-at.zhihu.com/api/4/themes'

export const NEWS_API = `${YAHOO_PROXY_BASE}${NEWS}${YAHOO_PROXY_SUFFIX}`
export const NEWS_DETAIL_API = `${YAHOO_PROXY_BASE}${NEWS_DETAIL}${YAHOO_PROXY_SUFFIX}`
export const NEWS_EXTRA_API = `${YAHOO_PROXY_BASE}${NEWS_EXTRA}${YAHOO_PROXY_SUFFIX}`
export const NEWS_BEFORE_API = `${YAHOO_PROXY_BASE}${NEWS_BEFORE}${YAHOO_PROXY_SUFFIX}`
export const NEWS_THEME_API = `${YAHOO_PROXY_BASE}${NEWS_THEME}${YAHOO_PROXY_SUFFIX}`


export const fetLatestNews = () => 
    fetch(NEWS_API)
        .then(res => res.json()).then(data => data.query.results.json)

export const getNewsDetail = (id) => 
    fetch(NEWS_DETAIL_API.replace('{id}', id))
        .then(res => res.json()).then(data => data.query.results.json)

export const getExtraNews = (id) => 
    fetch(NEWS_EXTRA_API.replace('{date}', id))
        .then(res => res.json()).then(data => data.query.results.json)

export const getNewsBefore = (date) =>
    fetch(NEWS_BEFORE_API.replace('{date}', date))
        .then(res => res.json()).then(data => data.query.results.json)

export const getNewsTheme = () => 
    fetch(NEWS_THEME_API)
        .then(res => res.json()).then(data => data.query.results.json)