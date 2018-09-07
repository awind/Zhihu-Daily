import React, { Component } from 'react'
import { List, ListItem, ListItemText, Divider, ListSubheader } from '@material-ui/core';
import CommonHeader from './CommonHeader';

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
                <List style={{marginTop: 48}}>
                    <ListSubheader>3rd Library List</ListSubheader>
                    { thirdLibraryList.map((item, index) => {
                        return (
                            <ListItem key={index} onClick={event => this.handleOnClick(index)}>
                                <ListItemText primary={item.name}></ListItemText>
                            </ListItem> 
                        )})
                    }
                </List>
            </div>
        )
    }
}

export default AboutPage