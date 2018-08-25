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
import { withStyles } from '@material-ui/core/styles'
import '../css/DetailHeader.css'

const styles = theme => ({
    badge: {
      top: 1,
      right: -20,
      fontSize: 16,
      // The border color match the background color
    },
  });

class DetailHeader extends Component {

    handleOnClickBack = () => {
        const { history } = this.props
        history.goBack()
    }

    handleOnClickShare = () => {

    }

    handleOnClickStar = () => {

    }

    handleOnClickComments = () => {
        const id = this.props.id
        const history = this.props.history
        history.push('/comments/' + id)
    }

    handleOnClickThumbUp = () => {

    }

    render() {
        const { classes } = this.props
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
                                <Badge badgeContent={this.props.commentCount} classes={{ badge: classes.badge}}>
                                    <CommentIcon />
                                </Badge>
                            </IconButton>

                            <IconButton aria-label="Thumb Up" color="inherit" onClick={this.handleOnClickThumbUp}>
                                <Badge badgeContent={this.props.popularity} classes={{ badge: classes.badge}}>
                                    <ThumbUpIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(DetailHeader))