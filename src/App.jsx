import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import EnterName from './components/EnterName/EnterName'
import TodayWeather from './components/Today/Today'
import Home from './components/Home/Home'
import Today from './components/Today/Today'

import * as routes from './router/routes'
import './App.css'
class App extends Component {
  state = {
    username: '',
    weather: {}
  }
  componentDidMount() {
    this.getWeather().then(data => {
      this.setState({
        weather: data.data
      })
    })
  }

  getWeather = async () => {
    try {
      const weather = await fetch('/api/weather')
      const weatherJson = await weather.json()
      return weatherJson
    } catch (err) {
      return err
    }
  }

  doUpdateUser = username => this.setState({ username })

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path={routes.ROOT}
            render={() => <EnterName doUpdateUser={this.doUpdateUser} />}
          />
          {this.state.username ? (
            [
              <Route
                exact
                path={routes.HOME}
                render={() => (
                  <Home
                    username={this.state.username}
                    weather={this.state.weather}
                  />
                )}
              />,
              <Route
                exact
                path={routes.TODAY}
                render={() => <TodayWeather weather={this.state.weather} />}
              />
            ]
          ) : (
            <Redirect to={routes.ROOT} />
          )}
          <Today weather={this.state.weather} />
        </Switch>
      </div>
    )
  }
}

export default App
