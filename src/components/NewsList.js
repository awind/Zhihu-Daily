import React, { Component } from 'react'
import NewsItem from './NewsItem'
import * as API from '../utils/api'
import '../css/NewsList.css'
import { Divider } from '@material-ui/core'
import { connect } from 'react-redux'
import { requestNews, receiveNews } from '../actions/NewsAction'

class NewsList extends Component {

    componentDidMount() {
        this.props.requestNews()
        API.fetLatestNews().then(data => {
            console.log(data)
            this.props.receiveNews(data.stories, data.top_stories)
        })
    }

    render() {
        const { stories } = this.props
        return (
            <div className="list-container">
                <ul className="list">
                    { stories && stories.map((item, index) => {
                        return (
                            <li key={index}>
                                <NewsItem news={item} />
                                <Divider />
                            </li> 
                        )})
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stories: state.news.stories,
    }
}

export default connect(mapStateToProps, {requestNews, receiveNews})(NewsList)