import React, { Component } from 'react'
import NewsItem from './NewsItem'
import * as API from '../utils/api'
import '../css/NewsList.css'
import { Divider } from '../../node_modules/@material-ui/core'

class NewsList extends Component {

    constructor() {
        super()
        this.state = {
            stories: []
        }
    }

    componentDidMount() {
        API.fetLatestNews().then(data => {
            console.log(data)
            this.setState({
                stories: data.stories
            })
        })
    }

    render() {
        const stories = this.state.stories
        return (
            <div className="list-container">
                <ul className="list">
                    { stories && stories.map((item, index) => {
                        return (
                            <li key={index}>
                                <NewsItem title={item.title} image={item.images} />
                                <Divider />
                            </li> 
                        )})
                    }
                </ul>
            </div>
        )
    }
}

export default NewsList