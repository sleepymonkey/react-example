import AppDispatcher from '../dispatchers/AppDispatcher.js';
import {LOGIN_USER, FORGOT_PWD, CHANGE_PWD, LOGOUT_USER} from '../constants/Constants.js';
import RouterContainer from '../services/RouterContainer'

export default {

  /**
   * this is called from auth service *AFTER* authenticating with server and receiving jwt.
   */
  loginUser: (jwt) => {
    var savedJwt = localStorage.getItem('jwt');

    if (savedJwt !== jwt) {
      var nextPath = RouterContainer.get().getCurrentQuery().nextPath || '/';

      RouterContainer.get().transitionTo(nextPath);
      localStorage.setItem('jwt', jwt);
    }

    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });
  },

  forgotPassword: (userid) => {
    console.log("userid returned from forgot pwd: ", userid);

    RouterContainer.get().transitionTo('/change-pwd');
    AppDispatcher.dispatch({
      actionType: FORGOT_PWD,
      userid: userid
    });
  },

  changePassword: () => {
    RouterContainer.get().transitionTo('/login');
    AppDispatcher.dispatch({
      actionType: CHANGE_PWD
    });
  },

  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
