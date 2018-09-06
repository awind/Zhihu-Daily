import React, { Component } from 'react'
import CommonHeader from './CommonHeader'
import NewsItem from './NewsItem'
import store from 'store'
import '../css/UserLocalStars.css'
import Snackbar from '@material-ui/core/Snackbar'

class UserLocalStars extends Component {

    // componentDidMount() {
    //     store.clearAll()
    // }

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
                            if(item !== undefined) {
                                return (
                                    <li key={index}>
                                        <NewsItem news={item} />
                                    </li> 
                                )}
                            }
                        )
                        }
                    </ul>
                </li>
            </div>
        )
    }
}

export default UserLocalStars