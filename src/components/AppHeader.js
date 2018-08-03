import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import '../css/AppHeader.css'
import { Drawer } from '../../node_modules/@material-ui/core';

const drawerWidth = 240

class AppHeader extends Component {

    state = {
        open: false,
        anchor: 'left',
    }

    handleDrawerOpen = () => {
        this.setState({open: true})
    }

    handleDrawerClose = () => {
        this.setState({open: false})
    }

    handleChangeAnchor = event => {
        this.setState({
            anchor: event.target.value,
        })
    }

    render() {
        const { anchor, open } = this.state

        const drawer = (
            <Drawer 
                variant="persistent"
                anchor={anchor}
                open={open}
                >
            
            </Drawer>
        )

        let before = null
        let after = null

        if (anchor === 'left') {
            before = drawer
        }

        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className="menuButton" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography className="flex" variant="title" color="inherit">
                            首页
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>


            </div>
        )
    }

}

export default AppHeader
