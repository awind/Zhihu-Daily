import React, { Component } from 'react'
import CommonHeader from './CommonHeader';
import CommentItem from './CommentItem';
import * as API from '../utils/api'
import '../css/CommentsList.css'
import { Divider, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class CommentsList extends Component {

    constructor() {
        super()
        this.state = {
            isShortCommentOpen: false,
            longComments: [],
            shortComments: [],
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        API.getLongComments(id).then((data) => {
            if (data !== null) {
                // return type is not array when there is only one comment
                if (data.comments.constructor === Array) {
                    this.setState({longComments: data.comments})
                } else {
                    this.setState({longComments: [data.comments]})
                }
            }
        })
        API.getShortComments(id).then((data) => {
            if (data !== null) {
                if (data.comments.constructor === Array) {
                    this.setState({shortComments: data.comments})
                } else {
                    this.setState({shortComments: [data.comments]})
                }
            }
        })
    }

    handleOnClickShortComments = () => {
        const isOpen = this.state.isShortCommentOpen
        this.setState({
            isShortCommentOpen: !isOpen,
        })
    }

    render() {
        const longCount = this.state.longComments.length
        const shortCount = this.state.shortComments.length
        const count = longCount + shortCount
        const longTitle = longCount + "条长评"
        const shortTitle = shortCount + "条短评"

        return (
            <div className="comments-list">
                <CommonHeader title={count + "条点评"}></CommonHeader>
                <List component="nav" style={{marginBottom: '0', paddingBottom: '0'}}>
                    <ListItem button>
                        <ListItemText primary={longTitle} />
                    </ListItem>
                    <List component="div" disablePadding>
                            { longCount > 0 && this.state.longComments.map((item, index) => {
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
                        {this.state.isShortCommentOpen && this.state.shortComments.length > 0 ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={this.state.isShortCommentOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            { shortCount > 0 && this.state.shortComments.map((item, index) => {
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

export default CommentsList