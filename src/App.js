import React, { Component } from 'react'
import NewsList from './components/NewsList'
import './App.css'
import AppHeader from './components/AppHeader'
import * as API from './utils/api'
import { connect } from 'react-redux'
import { receiveThemes, requestThemes } from './actions'
import HotNews from './components/HotNews'
import { Route, Switch } from 'react-router-dom'
import NewsDetail from './components/NewsDetail'
import { withRouter } from 'react-router'
import CommentList from './components/CommentsList';

class App extends Component {

  componentDidMount() {
    this.props.requestThemes()
    API.getNewsTheme().then(data => {
      this.props.receiveThemes(data.others)
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={() => (
            <div>
              <AppHeader></AppHeader>
              <HotNews></HotNews>
              <NewsList></NewsList>
            </div>
          )}></Route>
          <Route exact path='/detail/:id' component={NewsDetail}></Route>
          <Route exact path='/comments/:id' component={CommentList}></Route>
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themes: state.themes,
  }
}

export default withRouter(connect(mapStateToProps,{requestThemes, receiveThemes})(App))
