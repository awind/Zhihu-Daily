import React, { Component } from 'react'
import * as API from '../utils/api'
import renderHTML from 'react-render-html'
import DetailHeader from './DetailHeader'
import filter from '../utils/filter'
import '../css/NewsDetail.css'

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
                console.log(data)
                this.setState({detail: data})
        })
    }

    render() {
        const { id, body, css, image, title, image_source } = this.state.detail
        var url = image
        if (image !== undefined) {
            url = filter.replaceUrl(image)
        }
        // match all the image url link and replace with proxy
        const regex = /\b(https?:[^)''"]+\.(?:jpg|jpeg|gif|png))/g;
        var result = body
        if (body !== undefined && body.match(regex)) {
            result = body.replace(regex, function(m) {
                return filter.replaceUrl(m)
            })
        }
        const html = '<link rel="stylesheet" type="text/css" href=' + css + ' />' + result
        return (
            <div className="detail-container">
                <DetailHeader id={id}></DetailHeader>
                { body && renderHTML(html) }
                { image && <div className="header">
                    <img className="detail-image" src={url} alt={title}/>
                    <div className="overlay-layer"></div>
                    <p className="detail-text">{title}</p>
                    <p className="img-description">{image_source}</p>
                </div>}
            </div>
        )
    }
}

export default NewsDetail