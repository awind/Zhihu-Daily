import React, { Component } from 'react'
import '../css/NewsItem.css'
import filter from '../utils/filter'
import { withRouter } from 'react-router'

class NewsItem extends Component {

    handleClickItem = () => {
        const { history } = this.props
        history.push('/detail/' + this.props.news.id)
    }

    render() {
        const { title, images } = this.props.news
        const url = filter.replaceUrl(images)
        return (
            <div className="item-container" onClick={this.handleClickItem}>
                <p className="item-title">{title}</p>
                <img src={url} alt={title}></img>
            </div>
        )
    }
}

export default withRouter(NewsItem)