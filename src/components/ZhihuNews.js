import React, { Component } from 'react'
import HotNews from './HotNews'
import NewsList from './NewsList'
import { connect } from 'react-redux'
import { fetchNews } from '../actions'
import { today } from '../utils/date'

class ZhihuNews extends Component {

    componentDidMount() {
        console.log('componentDidMount')
        const date = today()
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