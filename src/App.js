import React, { Component } from 'react'
import NewsList from './components/NewsList'
import './App.css'
import AppHeader from './components/AppHeader'
import * as API from './utils/api'

class App extends Component {

  componentDidMount() {
    API.getNewsTheme().then(data => {
      console.log(data.others)
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader></AppHeader>
        <NewsList></NewsList>
      </div>
    );
  }
}

export default App;
