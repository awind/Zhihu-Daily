import React, { Component } from 'react'
import * as API from '../utils/api'
import renderHTML from 'react-render-html'
import DetailHeader from './DetailHeader'
import filter from '../utils/filter'
import { connect } from 'react-redux'
import { requestComments, receiveLongComments, receiveShortComments } from '../actions/CommentsAction'
import '../css/NewsDetail.css'

class NewsDetail extends Component {

    constructor() {
        super()
        this.state = {
            detail: '',
            // longComments: [],
            // shortComments: [],
        }
    }

    fetchComments = (id) => {
        this.props.requestComments()
        API.getLongComments(id).then((data) => {
            if (data !== null) {
                // return type is not array when there is only one comment
                if (data.comments.constructor === Array) {
                    // this.setState({
                    //     longComments: data.comments,
                    // })
                    this.props.receiveLongComments(data.comments)
                } else {
                    // this.setState({
                    //     longComments: [data.comments]
                    // })
                    this.props.receiveLongComments([data.comments])
                }
            }
        })
        API.getShortComments(id).then((data) => {
            if (data !== null) {
                console.log(data)
                if (data.comments.constructor === Array) {
                    // this.setState({
                    //     shortComments: data.comments,
                    // })
                    this.props.receiveShortComments(data.comments)
                } else {
                    // this.setState({
                    //     shortComments: [data.comments]
                    // })
                    this.props.receiveShortComments([data.comments])
                }
            }
        })
    }

    componentDidMount() {
        const { id } = this.props.match.params
        API.getNewsDetail(id)
            .then(data => {
                // console.log(data)
                this.setState({detail: data})
        })
        this.fetchComments(id)
    }

    render() {
        const longCount = this.props.longComments.length
        const shortCount = this.props.shortComments.length

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
                <DetailHeader id={id} commentCount={longCount + shortCount}></DetailHeader>
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

function mapStateToProps(state) {
    return {
        longComments: state.comments.longComments,
        shortComments: state.comments.shortComments,
    }
}

export default connect(mapStateToProps, {requestComments, receiveLongComments, receiveShortComments})(NewsDetail)