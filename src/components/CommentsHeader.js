import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import BackIcon from '@material-ui/icons/ArrowBack'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import { withRouter } from 'react-router'

class CommentsHeader extends Component {

    handleOnClickBack = () => {
        const { history } = this.props
        history.goBack()
    }

    render() {
        return (
            <div className="root">
                <AppBar style={{ backgroundColor: '#0C88EA' }}>
                    <Toolbar className="appbar">
                        <IconButton color="inherit">
                            <BackIcon onClick={this.handleOnClickBack} />
                        </IconButton>

                        <Typography className="flex" variant="title" color="inherit">
                            {this.props.count}条点评
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(CommentsHeader)