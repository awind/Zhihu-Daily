import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import '../css/AppHeader.css'
import { Drawer, Divider, Avatar, Menu, ListItem, ListItemText } from '../../node_modules/@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AddIcon from '@material-ui/icons/Add'
import MenuItem from '@material-ui/core/MenuItem'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'

const ITEM_HEIGHT = 36;

const options = [
    '夜间模式',
    '设置选项',
  ]

class AppHeader extends Component {

    state = {
        open: false,
        anchorEl: null,
    }

    toggleDrawer = (open) => () => {
        this.setState({
          open: open,
        })
    }

    handleClickMore = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const { anchorEl } = this.state
        const { themes } = this.props.themes
        console.log(themes)
        return (
            <div className="root">
                <AppBar style={{ backgroundColor: '#0C88EA' }} className="appbar">
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography className="flex" variant="title" color="inherit">
                            首页
                        </Typography>
                        <IconButton color="inherit">
                            <MoreVertIcon
                                aria-label="More"
                                aria-haspopup="true"
                                onClick={this.handleClickMore}
                             />
                        </IconButton>
                        <Menu
                          id="menu"
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={this.handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: 200,
                            },
                          }}
                        >
                            {options.map(option => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                                {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Drawer 
                  open={this.state.open}
                  onClose={this.toggleDrawer(false)}>
                    <div className="drawer">
                        <div className="drawer-header">
                            <Avatar className="avatar">ZH</Avatar>
                            <p className="username">请登录</p>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <List component="nav">
                            <MenuItem button selected>
                                <ListItemText>首页</ListItemText>
                            </MenuItem>
                            { themes && themes.map((item, index) => {
                                console.log(item.name)
                                return (
                                    <MenuItem button>
                                        <ListItemText>{item.name}</ListItemText>
                                        <ListItemIcon>
                                            <AddIcon style={{ color: '#0C88EA' }} />
                                        </ListItemIcon>
                                    </MenuItem>
                                )
                            })}
                        </List>
                    </div>
                </Drawer>
                
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        themes: state.themes,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
