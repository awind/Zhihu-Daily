import React, { Component } from 'react'
import NewsItem from './NewsItem'
import '../css/NewsList.css'
import { List, ListSubheader } from '@material-ui/core'
import { connect } from 'react-redux'
import { receiveNews } from '../actions'
import filter from '../utils/filter'

class NewsList extends Component {

    render() {
        const { stories } = this.props
        return (
            <div className="container">
                <List className="list" subheader={<ListSubheader>
                {this.props.editors && (
                    <table>
                        <tbody><tr>
                            <td>主编</td>
                            {this.props.editors.map((item, index) => {
                                var url = ""
                                const { name, avatar } = item
                                if (avatar !== undefined) {
                                    url = filter.replaceUrl(avatar)
                                }
                                return (
                                    <td align="center" key={index}>
                                        <img src={url} alt={name}></img>
                                    </td>
                                )
                            })}
                    </tr></tbody>
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