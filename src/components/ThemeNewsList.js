import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/NewsList.css'
import { List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchNews } from '../actions'
import InfiniteScroll from 'react-infinite-scroll-component'
import { today, yesterday } from '../utils/date'
import filter from '../utils/filter'
import moment from 'moment'

class ThemeNewsList extends Component {

    fetchNews = () => {
        const stories = this.props.stories
        const keys = Object.keys(stories).sort()
        if (keys.length > 0) {
            const prevDate = moment(keys[0], 'YYYYMMDD').subtract(1, 'day').format('YYYYMMDD')
            console.log(prevDate)
            this.props.getNews(prevDate)
        }
    }

    render() {
        const { stories } = this.props
        const currDate = today()

        return (
            <div className="container">
                <InfiniteScroll
                // todo  dataLength needs to update
                    dataLength={stories.length}
                    next={this.fetchNews}
                    hasMore={true}
                >
                    <List className="list" subheader={
                        <ListSubheader>
                        {this.props.editors && (
                            <table>
                                <tbody><tr>
                                    <td>主编</td>
                                    {this.props.editors.map((item, index) => {
                                        var url = ""
                                        const { name, avatar } = item
                                        if (avatar !== undefined) {
                                            url = filter.replaceUrl(avatar)
                                        }
                                        return (
                                            <td align="center" key={index}>
                                                <img src={url} alt={name}></img>
                                            </td>
                                        )
                                    })}
                            </tr></tbody>
                            </table>
                        )}
                        {
                            !this.props.editors && (
                                <p>{this.props.title}</p>
                            )
                        }
                        
                        </ListSubheader>
                    }>
                        {
                            Object.keys(stories).sort().reverse().map(date => (
                                <li key={date}>
                                    <ul>
                                        <ListSubheader>{ currDate === date ? "今日新闻" : moment(date).format('MMM Do dddd')}</ListSubheader>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThemeNewsList)