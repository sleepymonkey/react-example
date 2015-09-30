import AppDispatcher from '../../dispatchers/AppDispatcher.js';
import {SUBSCRIPTION_COMPLETE} from '../../constants/Constants'
import RouterContainer from '../../services/RouterContainer'

export default {

  /**
   * this is called from cc service *AFTER* submitting creating user subscription in cc service
   */
  ccComplete: () => {
    RouterContainer.get().transitionTo('/login');

    AppDispatcher.dispatch({
      actionType: SUBSCRIPTION_COMPLETE
    });
  }

}
