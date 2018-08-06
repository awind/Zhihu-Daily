import React, { Component } from 'react'
import * as API from '../utils/api'
import renderHTML from 'react-render-html'
import DetailHeader from './DetailHeader'

class NewsDetail extends Component {

    constructor() {
        super()
        this.state = {
            detail: '',
        }
    }

    componentDidMount() {
        API.getNewsDetail(this.props.match.params.id)
            .then(data => {
                this.setState({detail: data})
        })
    }

    render() {
        const { body, css } = this.state.detail
        const html = '<link rel="stylesheet" type="text/css" href=' + css + ' />' + body
        return (
            <div>
                <DetailHeader></DetailHeader>
                { body && renderHTML(html) }
            </div>
        )
    }
}

export default NewsDetail