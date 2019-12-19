import withRoot from './modules/withRoot';
// --- Post bootstrap -----
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './homepage'
import Coupon from './coupon'
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';


const sections = [
    { title: 'Automotive', url: '#' },
    { title: 'Books & Magazines', url: '#' },
    { title: 'Computing', url: '#' },
    { title: 'Dining & Takeaway', url: '#' },
    { title: 'Education', url: '#' },
    { title: 'Electrical & Electronics', url: '#' },
    { title: 'Entertainment', url: '#' },
    { title: 'Fashion', url: '#' },
    { title: 'Financial', url: '#' },
    { title: 'Gaming', url: '#' },
    { title: 'Groceries', url: '#' },
    { title: 'Health & Beauty', url: '#' },
    { title: 'Home & Garden', url: '#' },
    { title: 'Internet', url: '#' },
    { title: 'Mobile', url: '#' },
    { title: 'Pets', url: '#' },
    { title: 'Sports & Outdoors', url: '#' },
    { title: 'Toys & Kids', url: '#' },
    { title: 'Travel', url: '#' },
    { title: 'Other', url: '#' }
  ]

function App(){
  return (
    <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <AppAppBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/coupons/:cat">
            <Coupon />
          </Route>
        </Switch>
        <AppFooter />
    </Router>
  )
}

export default withRoot(App)