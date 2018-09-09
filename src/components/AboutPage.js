import React, { Component } from 'react'
import { List, ListItem, ListItemText, Divider, ListSubheader } from '@material-ui/core';
import CommonHeader from './CommonHeader'
import '../css/AboutPage.css'
import {Link} from 'react-router-dom'

const thirdLibraryList = [
    {
        name: "React",
        url: "https://github.com/facebook/react",
    }, {
        name: "React Redux",
        url: "https://github.com/reduxjs/react-redux",
    }, {
        name: "React Router",
        url: "https://github.com/ReactTraining/react-router",
    }, {
        name: "Redux Thunk",
        url: "https://github.com/reduxjs/redux-thunk",
    }, {
        name: "material-ui",
        url: "https://github.com/mui-org/material-ui",
    }, {
        name: "react-render-html",
        url: "https://github.com/utatti/react-render-html",
    }, {
        name: "react-slick",
        url: "https://github.com/akiran/react-slick",
    }, {
        name: "Store.js",
        url: "https://github.com/marcuswestin/store.js",
    }, {
        name: "Moment",
        url: "https://github.com/moment/moment",
    }, {
        name: "react-infinite-scroll-component",
        url: "https://github.com/ankeetmaini/react-infinite-scroll-component",
    },
]

class AboutPage extends Component {

    handleOnClick = (index) => {
        const item = thirdLibraryList[index]
        window.location.assign(item.url);
    }

    render() {
        return (
            <div>
                <CommonHeader title="About"></CommonHeader>
                <div className="about">
                    <h1>Zhihu Daily</h1>
                    <p>This is a demo project use React to implement.This app is not created nor endorsed by Zhihu Inc. All the information and content accessible through Zhihu Daily Purify are subject to Zhihu's copyright and terms of use. This is a free app and does not charge for anything. All content are available for free from Zhihu.</p>
                    <h2>Features</h2>
                    <ol>
                        <li>Read Zhihu Daily in Web</li>
                        <li>No ads</li>
                        <li>Same user experience with mobile device</li>
                    </ol>
                </div>
                <List subheader={<li />}>
                    <ListSubheader>Github</ListSubheader>
                    <ListItem key="repo" button component="a" href="https://github.com/awind/Zhihu-Daily">
                        <ListItemText>Zhihu-Daily</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListSubheader>Thanks to</ListSubheader>
                    <ListItem key="thanks-to" button component="a" href="https://github.com/izzyleung/ZhihuDailyPurify/wiki/知乎日报-API-分析"> 
                        <ListItemText>知乎日报 API 分析</ListItemText>
                    </ListItem>
                    <Divider />
                    <ListSubheader>3rd Library List</ListSubheader>
                    { thirdLibraryList.map((item, index) => {
                        return (
                            <div>
                                <ListItem key={index} onClick={event => this.handleOnClick(index)}>
                                    <ListItemText primary={item.name}></ListItemText>
                                </ListItem> 
                                <Divider />
                            </div>
                        )})
                    }
                </List>
            </div>
        )
    }
}

export default AboutPage