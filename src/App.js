import React, { Component } from 'react'
import NewsList from './components/NewsList'
import './App.css'
import AppHeader from './components/AppHeader'
import * as API from './utils/api'
import { connect } from 'react-redux'
import { receiveThemes, requestThemes } from './actions'
import HotNews from './components/HotNews';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(requestThemes())
    API.getNewsTheme().then(data => {
      dispatch(receiveThemes(data.others))
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader className="header"></AppHeader>
        <HotNews className="slider"></HotNews>
        <NewsList className="list"></NewsList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themes: state.themes,
  }
}

export default connect(mapStateToProps,)(App)
