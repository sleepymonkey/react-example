import {LOGIN_USER, FORGOT_PWD, LOGOUT_USER} from '../constants/Constants';
import {SIGNUP_USER} from '../constants/Constants'
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
    this._user = null;
    this._jwt = null;
    this._forgot_pwd_userid = null;
  }

  _registerToActions(action) {
    console.log("inside login store _registerToActions");

    switch(action.actionType) {
      case LOGIN_USER:
      case SIGNUP_USER:
        this._jwt = action.jwt;
        console.log("jwt before jwt_decode: ", action.jwt);
        let json = jwt_decode(this._jwt);
        console.log("decoded jwt to json: ", json);
        if (json) {
          this._user = {
            userid: json.userid,
            email: json.sub,
            fname: json.fname,
            lname: json.lname,
            pc: json.pc
          }
        }
        this.emitChange();
        break;

      case FORGOT_PWD:
        this._forgot_pwd_userid = action.userid;
        this.emitChange();
        break;

      case LOGOUT_USER:
        this._user = null;
        this.emitChange();
        break;

      default:
        break;
    }
  }

  get user() {
    return this._user;
  }

  get jwt() {
    console.log("inside get jwt call from login store: ", this._jwt);
    return this._jwt;
  }

  /**
   * get the userid associated with the forgot password request.
   */
  get fp_userid() {
    console.log("inside login store, case forgot pwd.  userid: ", this._forgot_pwd_userid);
    return this._forgot_pwd_userid;
  }

  isLoggedIn() {
    //return !!this._user;
    var ret = Boolean(this._user) && Boolean(this._user.userid);
    console.log("user object in login store: ", this._user);
    console.log("isLoggedIn.  returning: ", ret);

    return ret;
  }

  /**
   * is the user logged in AND has a valid payment instrument (pc = payment complete)
   */
  registrationComplete() {
    return Boolean(this._user) && Boolean(this._user.pc);
  }
}

export default new LoginStore();
