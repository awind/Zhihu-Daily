import React, { Component } from 'react'
import NewsList from './NewsList'
import * as API from '../utils/api'
import { receiveNews } from '../actions'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../css/ThemeNews.css'
import filter from '../utils/filter' 

class ThemeNews extends Component {

    constructor() {
        super()
        this.state = {
            image: "",
            description: "",
            editors: [],
        }
    }

    componentDidMount() {
        const { themeID } = this.props.match.params
        API.getThemeNews(themeID).then(data => {
            var editors = []
            if (data.editors.constructor === Array) {
                editors = data.editors
            } else {
                editors = [data.editors]
            }
            this.setState({
                image: data.image, 
                description: data.description,
                editors: editors,
            })
            this.props.receiveNews(data.stories, [])
        })
    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }
    }

    render() {
        const { image, description } = this.state
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
                { image && <NewsList editors={this.state.editors}></NewsList>}
            </div>
        )
    }
}

export default withRouter(connect(null, {receiveNews})(ThemeNews))