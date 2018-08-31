import React, { Component } from 'react'
import '../css/NewsItem.css'
import filter from '../utils/filter'
import { withRouter } from 'react-router'
import { Card } from '@material-ui/core'

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
                <div className="content">
                    <p className="item-title">{title}</p>
                    <div className="img-container">
                        { images && <img className="img-item" src={url} alt={title}></img> }
                    </div>
                </div>
            </Card>
        )
    }
}

export default withRouter(NewsItem)