import React, { Component } from 'react'
import NewsItem from './NewsItem'
import * as API from '../utils/api'
import '../css/NewsList.css'
import { Divider, List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { requestNews, receiveNews } from '../actions/NewsAction'

class NewsList extends Component {

    render() {
        const { stories } = this.props
        return (
            <div className="list-container">
                <List className="list" subheader={<ListSubheader>{this.props.title}</ListSubheader>}>
                    { stories && stories.map((item, index) => {
                        return (
                            <li key={index}>
                                <NewsItem news={item} />
                                <Divider />
                            </li> 
                        )})
                    }
                </List>
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