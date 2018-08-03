import React, { Component } from 'react'
import '../css/NewsItem.css'
import filter from '../utils/filter'

class NewsItem extends Component {

    render() {
        const title = this.props.title
        const image = filter.replaceUrl(this.props.image)
        return (
            <div className="item-container">
                <p className="item-title">{title}</p>
                <img src={image} alt={title}></img>
            </div>
        )
    }
}

export default NewsItem