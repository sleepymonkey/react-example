import {PROPERTY_DATA_RETRIEVED, PROPERTY_DETAIL_DATA_RETRIEVED} from '../../constants/Constants'
import AppDispatcher from '../../dispatchers/AppDispatcher';
import RouterContainer from '../../services/RouterContainer'


export default {

  /**
   * this is called from property data service *AFTER* data response has been retrieved
   */
  propertyDataRetrieved: (jsonData) => {
    AppDispatcher.dispatch({
      actionType: PROPERTY_DATA_RETRIEVED,
      jsonData: jsonData
    });
  },

  propertyDetailDataRetrieved: (jsonData) => {
    RouterContainer.get().transitionTo('/detail');

    AppDispatcher.dispatch({
      actionType: PROPERTY_DETAIL_DATA_RETRIEVED,
      jsonData: jsonData
    });
  }

}
