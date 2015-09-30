import React from 'react';
import Router, {Route} from 'react-router';
import AuthenticatedApp from './components/AuthenticatedApp'
import Login from './components/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import ChangePassword from './components/auth/ChangePassword';
import Signup from './components/signup/Signup';
import CreditCard from './components/cc/CreditCard';
import Home from './components/Home';
import Quote from './components/Quote';
import RouterContainer from './services/RouterContainer';
import LoginActions from './actions/LoginActions';
import PropertyDetail from './components/data/PropertyDetail';

// if you ever want to go down the ugly route of changing everything, can check this out:
// pretty extensive overview of all things web dev
// http://sahatyalkabov.com/create-a-character-voting-app-using-react-nodejs-mongodb-and-socketio/

var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="login" handler={Login}/>
    <Route name="forgot-pwd" handler={ForgotPassword}/>
    <Route name="change-pwd" handler={ChangePassword}/>
    <Route name="signup" handler={Signup}/>
    <Route name="home" path="/" handler={Home}/>
    <Route name="quote" handler={Quote}/>
    <Route name="cc" handler={CreditCard}/>
    <Route name="detail" handler={PropertyDetail}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);



//LoginActions.logoutUser();


// TODO:  need to figure out if we can make the call to LoginStore here instead
let jwt = localStorage.getItem('jwt');
if (jwt && jwt !== 'null') {  // took a while to figure out...
     console.log("after the if check in app.jsx: ", jwt.toString());
     LoginActions.loginUser(jwt);
}


router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

