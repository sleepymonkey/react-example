import AppDispatcher from '../../dispatchers/AppDispatcher.js';
import {SIGNUP_USER, LOGOUT_USER} from '../../constants/Constants';
import RouterContainer from '../../services/RouterContainer'

export default {

  /**
   * this is called from auth service *AFTER* submitting first page of user info
   */
  signupUser: (jwt) => {
    console.log("inside signup action.  incoming jwt: ", jwt);
    RouterContainer.get().transitionTo('/cc');

    AppDispatcher.dispatch({
      actionType: SIGNUP_USER,
      jwt: jwt
    });
  },
  
  savePaymentInfo: () => {
    // need to make call to stripe with


    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
