import React, { Component } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import * as API from './utils/api'
import { connect } from 'react-redux'
import { receiveThemes } from './actions'
import { Route, Switch } from 'react-router-dom'
import NewsDetail from './components/NewsDetail'
import { withRouter } from 'react-router'
import CommentsList from './components/CommentsList';
import ThemeNews from './components/ThemeNews';
import ZhihuNews from './components/ZhihuNews';
import moment from 'moment';
import localization from 'moment/locale/zh-cn'

class App extends Component {

  componentDidMount() {
    moment().locale('zh-cn', localization)
    API.getThemesList().then(data => {
      this.props.receiveThemes(data.others)
    })
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() => (
            <div>
              <AppHeader></AppHeader>
              <ZhihuNews></ZhihuNews>
            </div>
          )}></Route>
          <Route exact path='/:themeID' render={() => (
            <div>
              <AppHeader></AppHeader>
              <ThemeNews></ThemeNews>
            </div>
          )}></Route>
          <Route exact path='/detail/:id' component={NewsDetail}></Route>
          <Route exact path='/comments/:id' component={CommentsList}></Route>
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

export default withRouter(connect(mapStateToProps,{receiveThemes})(App))
