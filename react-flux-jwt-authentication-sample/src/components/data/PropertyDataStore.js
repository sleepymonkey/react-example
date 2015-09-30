import {PROPERTY_DATA_RETRIEVED, PROPERTY_DETAIL_DATA_RETRIEVED, LOGOUT_USER} from '../../constants/Constants';
import BaseStore from '../../stores/BaseStore';


class PropertyDataStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._jsonData = null;
    this._curPropDetail = null;
  }


  _registerToActions(action) {
    console.log("inside property data store _registerToActions");

    switch(action.actionType) {
      case PROPERTY_DATA_RETRIEVED:
        this._jsonData = action.jsonData;
        this.emitChange();
        break;

      case PROPERTY_DETAIL_DATA_RETRIEVED:
        this._curPropDetail = action.jsonData;
        this.emitChange();
        break;

      case LOGOUT_USER:
        console.log("removing property data from data store");
        this._jsonData = null;
        this.emitChange();
        break;

      default:
        break;
    }
  }


  get jsonData() {
    return this._jsonData;
  }

  get currentPropertyDetail() {
    return this._curPropDetail;
  }

}

export default new PropertyDataStore();
