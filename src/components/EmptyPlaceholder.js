import React, { Component } from 'react'
import ExpandMore from '@material-ui/icons/ExpandMore'
import IconButton from '@material-ui/core/IconButton'
import '../css/EmptyPlaceholder.css'


class EmptyPlaceholder extends Component {

    render() {
        return (
            <div className="empty-root">
                <IconButton>
                    <ExpandMore style={{fontSize: '2em', width: '80%', height: '80%'}} />
                </IconButton> 
            </div>
        )
    }
}

export default EmptyPlaceholder