import React, { Component } from 'react'
import CommonHeader from './CommonHeader'
import NewsItem from './NewsItem'

class UserLocalStars extends Component {

    render() {
        return (
            <div>
                <CommonHeader title="我的收藏"></CommonHeader>
                { this.props.news && this.props.news.map((item, index) => {
                    return (
                        <li key={index}>
                            <NewsItem news={item} />
                        </li> 
                    )
                })}
            </div>
        )
    }
}

export default UserLocalStars