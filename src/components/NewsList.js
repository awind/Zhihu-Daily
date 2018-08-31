import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/NewsList.css'
import { List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { receiveNews, fetchNews } from '../actions'
import filter from '../utils/filter'
import InfiniteScroll from 'react-infinite-scroll-component'
import { getCurrentDate } from '../utils/date'

class NewsList extends Component {

    fetchNews = () => {
        this.props.getNews('20180830')
    }

    render() {
        const { stories } = this.props
        const currDate = getCurrentDate()

        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={stories.length}
                    next={this.fetchNews}
                    hasMore={true}
                >
                    <List className="list" subheader={<li />}>
                        {
                            Object.keys(stories).map(date => (
                                <li key={date}>
                                    <ul>
                                        <ListSubheader>{ currDate === date ? "今日新闻" : date}</ListSubheader>
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