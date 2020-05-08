import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Join from './pages/Join';

class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Join} />
            <Route path='/:gamecode' component={App} />
          </Switch>
      </BrowserRouter>
    )
  }

}

export default Router;