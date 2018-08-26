import React, { Component } from 'react'
import NewsList from './NewsList'
import * as API from '../utils/api'
import { receiveNews } from '../actions/NewsAction'
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
            editor: "",
        }
    }

    componentDidMount() {
        const { themeID } = this.props.match.params
        API.getThemeNews(themeID).then(data => {
            console.log(data.editors.name)
            this.setState({
                    image: data.image, 
                    description: data.description,
                    editor: data.editors.name,
            })
            this.props.receiveNews(data.stories, [])
        })
    }

    render() {
        const { image, description } = this.state
        console.log(description)
        var url = ""
        if (image !== undefined) {
            url = filter.replaceUrl(image)
        }
        return (
            <div>
                <div className="image-header">
                    <img src={url} alt={description}></img>
                    <p className="title">{description}</p>
                </div>
                { image && <NewsList title={"主编: " + this.state.editor}></NewsList>}
            </div>
        )
    }
}

export default withRouter(connect(null, {receiveNews})(ThemeNews))