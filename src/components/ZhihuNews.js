import React, { Component } from 'react'
import HotNews from './HotNews'
import NewsList from './NewsList'
import { connect } from 'react-redux'
import { fetchNews } from '../actions'
import { getCurrentDate } from '../utils/date'

class ZhihuNews extends Component {

    componentDidMount() {
        const date = getCurrentDate()
        this.props.getNews(date)
    }

    render() {
        return (
            <div>
              <HotNews></HotNews>
              <NewsList></NewsList>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNews: (date) => dispatch(fetchNews(date))
    }
}

export default connect(null, mapDispatchToProps)(ZhihuNews)