import React, { Component } from 'react'
import '../css/NewsItem.css'
import filter from '../utils/filter'
import { withRouter } from 'react-router'
import { Card } from '@material-ui/core';

class NewsItem extends Component {

    handleClickItem = () => {
        const { history } = this.props
        history.push('/detail/' + this.props.news.id)
    }

    render() {
        const { title, images } = this.props.news
        var url = ""
        if(images !== undefined) {
            url = filter.replaceUrl(images)
        }
        return (
            <Card className="card" onClick={this.handleClickItem}>
                <p className="item-title">{title}</p>
                { images && <img src={url} alt={title}></img> }
            </Card>
        )
    }
}

export default withRouter(NewsItem)