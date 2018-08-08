import React, { Component } from 'react'
import * as API from '../utils/api'
import CommentsHeader from './CommentsHeader';
import { throws } from 'assert';
import CommentItem from './CommentItem';
import '../css/CommentsList.css'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            longComments: [],
            shortComments: [],
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        API.getLongComments(id).then((data) => {
            
            if (data !== null) {
                console.log(data)
                this.setState({
                    longComments: data.comments,
                })
            }
        })
        API.getShortComments(id).then((data) => {
            if (data !== null) {
                console.log(data.comments)
                this.setState({
                    shortComments: data.comments,
                })
            }
        })
    }

    render() {
        const longCount = this.state.longComments.length
        const shortCount = this.state.shortComments.length
        return (
            <div className="comments-list">
                <CommentsHeader count={longCount + shortCount}></CommentsHeader>
                { this.state.longComments && this.state.longComments.map((item, index) => {
                    return <CommentItem item={item}></CommentItem>
                })}
            </div>
        )
    }
}

export default CommentList