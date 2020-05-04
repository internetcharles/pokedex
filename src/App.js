import React, { Component } from 'react'
import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom'
import SearchPage from './SearchPage.js'
import './App.css'

export default class App extends Component {
  render() {
      return (
          <div className='container'>
              <div className ='searchBox'>
                <Router>
                  <Switch>
                      <Route
                      path="/"
                      render={(routerProps) => <SearchPage {...routerProps} />}
                      />
                  </Switch>
                </Router>
              </div>
          </div>
      )
  }
}