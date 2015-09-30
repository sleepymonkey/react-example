'use strict';

import React from 'react';
import LoginStore from '../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../services/AuthService'

export default class AuthenticatedApp extends React.Component {
  constructor() {
    super();
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (

      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand navbar-logo">
              <img src="assets/img/logo/repute-logo-nav.png" alt="YOU NEED TO CHANGE THIS ALT TAG..." />
            </a>
          </div>

          <div id="main-nav" className="navbar-collapse collapse">
                {this.headerItems}
          </div>
        </nav>
        <RouteHandler/>
      </div>

    );
  }


  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="login">Login</Link>
          </li>
          <li>
            <Link to="signup">Signup</Link>
          </li>
        </ul>
      )
    }
    else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="quote">Quote</Link>
          </li>
          <li>
            <a href="" onClick={this.logout}>Logout</a>
          </li>
        </ul>
      )
    }
  }
}

/*
  trying to figure out why the fukking menu collapse doesnt' work.  fukking killing me.

      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav">
              <span className="sr-only">Toggle Navigation</span>
              <i className="fa fa-bars"></i>
      </button>


      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React Flux app with JWT authentication</a>
          </div>
          {this.headerItems}
        </nav>
        <RouteHandler/>
      </div>
*/


