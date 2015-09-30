import BaseService from './BaseService';
import {LOGIN_URL, SIGNUP_URL, FORGOT_PWD_URL, CHANGE_PWD_URL} from '../constants/Constants';
import LoginActions from '../actions/LoginActions';
import SignupActions from '../components/signup/SignupActions';


class AuthService extends BaseService {

  login(username, password) {
    var postData = {
      username, password
    };

    this.postJsonNoAuth(LOGIN_URL, postData, function(response) {
      var jwt = response.token;
      LoginActions.loginUser(jwt);
    });
  }

  forgotPassword(contact) {
    var postData = {
      channel: contact
    };

    this.postJsonNoAuth(FORGOT_PWD_URL, postData, function(response) {
      console.log("response obj from auth service forgot pwd: ", response);
      var userid = response.json.userId;
      LoginActions.forgotPassword(userid);
    });
  }

  changePassword(userid, tmpPwd, newPwd, verifyPwd) {
    var postData = {
      userid: userid,
      tmp_pwd: tmpPwd,
      new_pwd: newPwd,
      verify_pwd: verifyPwd
    };

    this.postJsonNoAuth(CHANGE_PWD_URL, postData, function(response) {
      LoginActions.changePassword();
    });
  }

  signup(data) {
    this.postJsonNoAuth(SIGNUP_URL, data, function(response) {
      var jwt = response.token;
      SignupActions.signupUser(jwt);
    });
  }

  logout() {
    LoginActions.logoutUser();
  }

}

export default new AuthService()
