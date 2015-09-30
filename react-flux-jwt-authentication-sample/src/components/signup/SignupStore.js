import {LOGIN_USER, LOGOUT_USER} from '../constants/Constants';
import BaseStore from './BaseStore';
import jwt_decode from 'jwt-decode';


// TODO:  at this point, this store is completely unused.  consider chunking...
class SignupStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
  }

  _registerToActions(action) {
    console.log("inside signup store, action type: ", action.actionType);

    switch(action.actionType) {
      default:
        break;
    }
  }
}

export default new SignupStore();
