import React, { Component } from 'react'
import CommentsHeader from './CommentsHeader';
import CommentItem from './CommentItem';
import { connect } from 'react-redux'
import '../css/CommentsList.css'
import { Divider } from '@material-ui/core';

class CommentsList extends Component {

    render() {
        const longCount = this.props.longComments.length
        const shortCount = this.props.shortComments.length

        return (
            <div className="comments-list">
                <CommentsHeader count={longCount + shortCount}></CommentsHeader>
                { longCount > 0 && this.props.longComments.map((item, index) => {
                    return <div>
                        <CommentItem key={index} item={item}></CommentItem>
                        <Divider />
                    </div>
                })}
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

export default connect(mapStateToProps)(CommentsList)