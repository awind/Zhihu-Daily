import React, { Component } from 'react'
import NewsItem from './NewsItem'
import * as API from '../utils/api'
import '../css/NewsList.css'

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
        // API.getNewsBefore('20180803').then(data => {
        //     console.log(data)
        //     this.setState({
        //         stories: data.stories
        //     })
        // })
    }

    render() {
        const stories = this.state.stories
        return (
            <div>
                <ul className="list">
                    { stories && stories.map((item, index) => {
                        return (
                            <li key={index}>
                                <NewsItem title={item.title} image={item.images} />
                            </li>      
                        )})
                    }
                </ul>
            </div>
        )
    }
}

export default NewsList