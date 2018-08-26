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
            long_comments: 0,
            short_comments: 0,
            popularity: 0,
            comments: 0,
        }
    }

    fetchComments = (id) => {
        API.getExtraNews(id).then((data) => {
            console.log(data)
            this.setState({
                long_comments: data.long_comments,
                short_comments: data.short_comments,
                popularity: data.popularity,
                comments: data.comments,
            })
        })
    }

    componentDidMount() {
        const { id } = this.props.match.params
        API.getNewsDetail(id)
            .then(data => {
                console.log(data)
                this.setState({detail: data})
        })
        this.fetchComments(id)
    }

    render() {
        const { popularity, comments } = this.state

        const { id, body, css, image, title, image_source, share_url } = this.state.detail
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
                <DetailHeader id={id} commentCount={comments} popularity={popularity} shareUrl={share_url}></DetailHeader>
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