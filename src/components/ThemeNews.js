import React, { Component } from 'react'
import ThemeNewsList from './ThemeNewsList'
import { fetchThemeNews } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../css/ThemeNews.css'
import filter from '../utils/filter' 

class ThemeNews extends Component {

    componentDidMount() {
        const { themeID } = this.props.match.params
        this.props.fetchThemeNews(themeID, "")
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

    render() {
        const { themeID } = this.props.match.params
        const { image, description, editors } = this.props.themeNews
        var url = ""
        if (image !== undefined) {
            url = filter.replaceUrl(image)
        }
        return (
            <div>
                <div className="image-header">
                    <img className="cover" src={url} alt={description}></img>
                    <p className="title">{description}</p>
                </div>
                <ThemeNewsList themeID={themeID} editors={editors}></ThemeNewsList>
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
        fetchThemeNews: (id, date) => dispatch(fetchThemeNews(id, date))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ThemeNews))