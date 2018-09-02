import React, { Component } from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { IconButton, Avatar } from '@material-ui/core'
import filter from '../utils/filter'
import '../css/CommentItem.css'

class CommentItem extends Component {

    render() {
        const { author, avatar, content, likes } = this.props.item 
        return (
            <div className="comment-container">
                <Avatar className="avatar" src={filter.replaceUrl(avatar)} alt={author} />
                <div className="content-container">
                    <div className="author-container">
                        <p className="author">{author}</p>
                        <IconButton className="thumb">
                            <ThumbUpIcon style={{ fontSize: 14 }} color="inherit" aria-label="Thumb Up" />
                        </IconButton>
                        <p style={{ fontSize: 14, marginLeft: 0, paddingLeft: 0 }}>{likes}</p>
                    </div>
                    <p className="comment-content">{content}</p>
                </div>
            </div>
        )
    }
}

export default CommentItem