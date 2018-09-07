import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import '../css/AppHeader.css'
import { Drawer, Divider, Avatar, Menu, MenuItem, ListItemText, ListItemIcon, List } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AddIcon from '@material-ui/icons/Add'
import StarIcon from '@material-ui/icons/Star'
import DownloadIcon from '@material-ui/icons/GetApp'
import { connect } from 'react-redux'
import { receiveThemeIndex } from '../actions'
import { withRouter } from 'react-router'
import filter from '../utils/filter'

const ITEM_HEIGHT = 36;

const options = [
    'About',
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

    handleClickMenuItem = (option, event) => {
        if (option === 'About') {
            const history = this.props.history
            history.push('/about')
        }
    }

    handleClickStar = () => {
        const history = this.props.history
        history.push('/stars')
    }

    handleClickDownloadContent = () => {

    }

    handleDrawerItemClick = (index) => {
        this.props.receiveThemeIndex(index)
        const history = this.props.history
        if(index === 0) {
            history.push('/')
        } else {
            const themes = this.props.themes
            const themeID = themes[index - 1].id
            history.push('/' + themeID)
        }
    }

    render() {
        const { anchorEl } = this.state
        const themes = this.props.themes
        const selectedIndex = this.props.index
        var title = "首页"
        if (themes.length > 0 && selectedIndex !== 0) {
            title = themes[selectedIndex - 1].name
        }
        const userImageURL = filter.replaceUrl("https://pic4.zhimg.com/da8e974dc_xl.jpg")
        return (
            <div className="root">
                <AppBar style={{ backgroundColor: '#0C88EA' }} className="appbar">
                    <Toolbar>
                        <IconButton color="inherit" onClick={this.toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography className="flex" variant="title" color="inherit">
                            {title}
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
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={event => this.handleClickMenuItem(option, event)}>
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
                            <div className="profile-header">
                                <Avatar src={userImageURL} className="avatar"></Avatar>
                                <p className="username">请登录</p>
                            </div>
                            <div className="bookmark">
                                <MenuItem className="icon-title" onClick={this.handleClickStar}>
                                    <ListItemIcon>
                                        <StarIcon style={{ color: '#FFFFFF' }} />
                                    </ListItemIcon>

                                    <p className="star-text">我的收藏</p>
                                </MenuItem>

                                <MenuItem className="icon-title" onClick={this.handleClickDownloadContent}>
                                    <ListItemIcon>
                                        <DownloadIcon style={{ color: '#FFFFFF' }} />
                                    </ListItemIcon>

                                    <p className="star-text">离线下载</p>
                                </MenuItem>
                            </div>
                        </div>
                    </div>
                    <Divider />
                    <div>
                        <List component="nav">
                            <MenuItem key="0" button selected={selectedIndex === 0} onClick={() => this.handleDrawerItemClick(0)}>
                                <ListItemText>首页</ListItemText>
                            </MenuItem>
                            { themes && themes.map((item, index) => {
                                return (
                                    <MenuItem button selected={selectedIndex === (index + 1)} key={index + 1} onClick={() => this.handleDrawerItemClick(index + 1)}>
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
        index: state.index,
    }
}

export default withRouter(connect(mapStateToProps, { receiveThemeIndex })(AppHeader))
