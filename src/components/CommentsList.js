import React, { Component } from 'react'
import CommentsHeader from './CommentsHeader';
import CommentItem from './CommentItem';
import { connect } from 'react-redux'
import '../css/CommentsList.css'
import { Divider, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class CommentsList extends Component {

    constructor() {
        super()
        this.state = {
            isShortCommentOpen: false,
        }
    }

    handleOnClickShortComments = () => {
        const isOpen = this.state.isShortCommentOpen
        this.setState({
            isShortCommentOpen: !isOpen,
        })
    }

    render() {
        const longCount = this.props.longComments.length
        const shortCount = this.props.shortComments.length
        const longTitle = longCount + "条长评"
        const shortTitle = shortCount + "条长评"

        return (
            <div className="comments-list">
                <CommentsHeader count={longCount + shortCount}></CommentsHeader>
                <List component="nav" style={{marginBottom: '0', paddingBottom: '0'}}>
                    <ListItem button>
                        <ListItemText primary={longTitle} />
                    </ListItem>
                    <List component="div" disablePadding>
                            { longCount > 0 && this.props.longComments.map((item, index) => {
                                return (<div>
                                    <CommentItem key={index} item={item}></CommentItem>
                                    <Divider />
                                    </div>)
                            })}
                    </List>
                </List>

                <List component="nav" style={{margin: '0', padding: '0'}}>
                    <ListItem button onClick={this.handleOnClickShortComments}>
                        <ListItemText primary={shortTitle} />
                        {this.state.isShortCommentOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.isShortCommentOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            { longCount > 0 && this.props.shortComments.map((item, index) => {
                                return (<div>
                                    <CommentItem key={index} item={item}></CommentItem>
                                    <Divider />
                                    </div>)
                                })}
                        </List>
                </Collapse>
                </List>
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