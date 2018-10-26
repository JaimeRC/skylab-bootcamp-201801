import React, { Component } from 'react';
import Search from './components/Search/index'
import Create from './components/Create/index'
import Home from './components/Home/index'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }


  render() {
    return (
      
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />

            <Route  path="/Create" component={Create} />

            <Route  path="/Search" component={Search} />
          </div>
        </BrowserRouter>
    )
  }
}

export default App;