import {LOGIN_USER, LOGOUT_USER} from '../constants/Constants';
import BaseStore from '../../stores/BaseStore';



// TODO:  at this point, this store is completely unused.  consider chunking...
class CreditCardStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this))
  }

  _registerToActions(action) {
    console.log("inside credit card store, action type: ", action.actionType);
    switch(action.actionType) {
      default:
        break;
    }
  }

}

export default new CreditCardStore();
