import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/ArrowBack'
import ShareIcon from '@material-ui/icons/Share'
import StarIcon from '@material-ui/icons/Star'
import CommentIcon from '@material-ui/icons/Comment'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import Badge from '@material-ui/core/Badge'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import store from 'store'
import '../css/DetailHeader.css'
import Snackbar from '@material-ui/core/Snackbar'

class DetailHeader extends Component {

    constructor() {
        super()
        this.state = {
            open: false,
            vertical: 'bottom',
            horizontal: 'center',
        };
    }

    handleOnClickBack = () => {
        const { history } = this.props
        history.goBack()
    }
    
    handleClick = state => () => {
        console.log('handleClick')
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOnClickShare = () => {

    }

    handleOnClickStar = () => {
        const id = this.props.id
        const stories = this.props.stories
        const { themeStories } = this.props.themeNews

        //top stories
        if (Object.keys(stories).length > 0) {
            this.storeNews(stories, id);
        } else {
            this.storeThemeNews(themeStories, id);
        }
    }

    handleOnClickComments = () => {
        const id = this.props.id
        const history = this.props.history
        history.push('/comments/' + id)
    }

    handleOnClickThumbUp = () => {

    }

    storeThemeNews(themeStories, id) {
        themeStories.forEach(element => {
            if (element.id === id) {
                const newsList = store.get('themeNews') || [];
                var isExist = false;
                newsList.forEach(element => {
                    if (element.id === id) {
                        isExist = true;
                    }
                });
                if (isExist) {
                }
                else {
                    console.log('store star');
                    this.setState({ open: true })
                    store.set('themeNews', newsList.concat(element));
                }
                return;
            }
        });
    }

    storeNews(stories, id) {
        for (var key in stories) {
            const items = stories[key];
            items.forEach(element => {
                if (element.id === id) {
                    const newsList = store.get('news') || [];
                    var isExist = false;
                    newsList.forEach(element => {
                        if (element.id === id) {
                            isExist = true;
                        }
                    });
                    if (isExist) {
                    }
                    else {
                        console.log('store star');
                        this.setState({ open: true })
                        store.set('news', newsList.concat(element));
                    }
                    return;
                }
            });
        }
    }

    render() {
        const { vertical, horizontal, open } = this.state
        return (
            <div className="root">
                <AppBar style={{ backgroundColor: '#0C88EA' }}>
                    <Toolbar className="appbar">
                        <IconButton color="inherit">
                            <BackIcon onClick={this.handleOnClickBack} />
                        </IconButton>

                        <div className="icons">
                            <IconButton color="inherit" aria-label="Share" onClick={this.handleOnClickShare}>
                                <ShareIcon />
                            </IconButton>

                            <IconButton color="inherit" aria-label="Star" onClick={this.handleOnClickStar}>
                                <StarIcon />
                            </IconButton>

                            <IconButton color="inherit" aria-label="Comments" onClick={this.handleOnClickComments}>
                                <Badge badgeContent={this.props.commentCount}>
                                    <CommentIcon />
                                </Badge>
                            </IconButton>

                            <IconButton aria-label="Thumb Up" color="inherit" onClick={this.handleOnClickThumbUp}>
                                <Badge badgeContent={this.props.popularity}>
                                    <ThumbUpIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">保存成功！</span>}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stories: state.stories,
        themeNews: state.themeNews,
    }
}

export default withRouter(connect(mapStateToProps, null)(DetailHeader))