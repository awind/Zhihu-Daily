import React, { Component } from 'react'
import HotNews from './HotNews'
import NewsList from './NewsList'
import { connect } from 'react-redux'
import { receiveNews } from '../actions/NewsAction'
import * as API from '../utils/api'

class ZhihuNews extends Component {

    componentDidMount() {
        API.fetLatestNews().then(data => {
            this.props.receiveNews(data.stories, data.top_stories)
        })
    }

    render() {
        return (
            <div>
              <HotNews></HotNews>
              <NewsList title="每日新闻"></NewsList>
            </div>
        )
    }
}

export default connect(null, { receiveNews })(ZhihuNews)