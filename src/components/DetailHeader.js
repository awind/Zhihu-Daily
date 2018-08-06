import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import BackIcon from '@material-ui/icons/ArrowBack'
import { withRouter } from 'react-router'

class DetailHeader extends Component {

    handleOnClickBack = () => {
        const { history } = this.props
        history.goBack()
    }

    render() {
        return (
            <div>
                <AppBar style={{ backgroundColor: '#0C88EA' }} className="appbar">
                    <Toolbar>
                        <IconButton color="inherit">
                            <BackIcon onClick={this.handleOnClickBack} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withRouter(DetailHeader)