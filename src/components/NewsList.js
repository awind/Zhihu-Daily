import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/NewsList.css'
import { Divider, List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { receiveNews } from '../actions'
import filter from '../utils/filter'

class NewsList extends Component {

    render() {
        const { stories } = this.props
        console.log(this.props.editors)
        return (
            <div className="list-container">
                <List className="list" subheader={<ListSubheader>
                {this.props.editors && (
                    <table className="list-header">
                        <th>主编: </th>
                        {this.props.editors.map((item, index) => {
                            var url = ""
                            const { name, avatar } = item
                            if (avatar !== undefined) {
                                url = filter.replaceUrl(avatar)
                            }
                            return (
                                <th key={index}>
                                    <img className="avatar" src={url} alt={name}></img>
                                </th>
                            )
                    })}
                    </table>
                )}
                {
                    !this.props.editors && (
                        <p>{this.props.title}</p>
                    )
                }
                
                </ListSubheader>}>
                    { stories && stories.map((item, index) => {
                        return (
                            <li key={index}>
                                <NewsItem news={item} />
                                <Divider />
                            </li> 
                        )})
                    }
                </List>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        stories: state.stories,
    }
}

export default connect(mapStateToProps, {receiveNews})(NewsList)