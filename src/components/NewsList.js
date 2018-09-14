import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/NewsList.css'
import { List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchNews } from '../actions'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getCurrentDate, dateBefore, formatDate } from '../utils/date'

class NewsList extends Component {

    fetchNews = () => {
        const stories = this.props.stories
        const keys = Object.keys(stories).sort()
        if (keys.length > 0) {
            const beforeDate = dateBefore(keys[0], 1)
            this.props.getNews(beforeDate)
        }
    }

    render() {
        const { stories } = this.props
        const currDate = getCurrentDate()
        var storyCount = 0
        for (var key in stories) {
            const item = stories[key]
            storyCount += item.length
        }
        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={storyCount}
                    next={this.fetchNews}
                    hasMore={true} >
                    <List className="list" subheader={<li />}>
                        {
                            Object.keys(stories).sort().reverse().map(date => (
                                <li key={date}>
                                    <ul className="u-list">
                                        <ListSubheader>{ currDate === date ? "今日新闻" : formatDate(date)}</ListSubheader>
                                        { stories[date] && stories[date].map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <NewsItem news={item} />
                                                </li> 
                                            )})
                                        }
                                    </ul>
                                </li>
                            ))
                        }
                    </List>
                </InfiniteScroll>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stories: state.stories,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNews: (date) => dispatch(fetchNews(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)