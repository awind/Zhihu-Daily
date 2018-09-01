import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/NewsList.css'
import { List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchThemeNews } from '../actions'
import InfiniteScroll from 'react-infinite-scroll-component'
import filter from '../utils/filter'

class ThemeNewsList extends Component {

    fetchNews = () => {
        const { themeStories } = this.props.themeNews
        const themeID = this.props.themeID
        // last element in list
        const lastID = themeStories.slice(-1)[0].id

        if (lastID) {
            this.props.getThemeNews(themeID, lastID)
        }
    }

    render() {
        const { themeStories } = this.props.themeNews
        // const storyList = themeStories.sort((a, b) => {
        //     return a.id < b.id
        // })
        const themeStoryCount = themeStories.length
        return (
            <div className="container">
                <InfiniteScroll
                    dataLength={themeStoryCount}
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
                        </ListSubheader>
                    }>
                        { themeStories && themeStories.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <NewsItem news={item} />
                                                </li> 
                                            )})
                                        }
                    </List>
                </InfiniteScroll>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        themeNews: state.themeNews,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getThemeNews: (id, date) => dispatch(fetchThemeNews(id, date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeNewsList)