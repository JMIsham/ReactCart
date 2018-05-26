import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
// import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import Home from './components/home';
import Login from './components/containers/login-container';
import OrderFood from './components/containers/order-food-container';
export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path = "login">
          <Route>
            <IndexRoute component={Login}/>
          </Route>
      </Route>
        <Route path = "order">
          <Route>
            <IndexRoute component={OrderFood}/>
          </Route>
      </Route>
    </Route>
  </Router>
);
