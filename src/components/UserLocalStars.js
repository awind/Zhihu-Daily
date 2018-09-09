import React, { Component } from 'react'
import CommonHeader from './CommonHeader'
import NewsItem from './NewsItem'
import store from 'store'
import '../css/UserLocalStars.css'

class UserLocalStars extends Component {

    render() {
        const news = store.get('news') || []
        const themeNews = store.get('themeNews') || []
        const newsList = news.concat(themeNews)
        return (
            <div>
                <CommonHeader title="我的收藏"></CommonHeader>
                <li className="star-list">
                    <ul className="u-list">
                        { newsList && newsList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NewsItem news={item} />
                                </li> 
                            )}
                        )
                        }
                    </ul>
                </li>
            </div>
        )
    }
}

export default UserLocalStars