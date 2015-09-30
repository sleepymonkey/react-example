import {SET_PAYMENT_URL, STRIPE_ACCESS_KEY} from '../../constants/Constants';
import CreditCardActions from './CreditCardActions';
import HttpRequest from '../../services/HttpRequest';


class CreditCardService {

  processCreditCard(form) {
    console.log("inside cc service, data obj: ", form);

    Stripe.setPublishableKey(STRIPE_ACCESS_KEY);
    Stripe.card.createToken(form, this.stripeResponseHandler.bind(this));
  }

  stripeResponseHandler(status, response) {
    if (response.error) {
      // Show the errors on the form
      //$form.find('.payment-errors').text(response.error.message);
      //$form.find('button').prop('disabled', false);
      alert("ERROR! " + response.error.message);
    } else {
      // response contains id and card, which contains additional card details
      var token = response.id;
      console.log("inside successful stripe token gen: ", token);
      this.createUserSubscription(token);
    }
  }

  createUserSubscription(token) {
    var request = new HttpRequest();
    request.postJson(SET_PAYMENT_URL, {pmt_token: token})
      .then(response => {
        CreditCardActions.ccComplete();
      })
      .catch(function(err) {
        alert("There's an error creating user subscription");
        console.log("Error creating user subscription", err);
      });
  }

}

export default new CreditCardService()

/*
  // if i ever want to pass form elements (instead of entire form object)
  Stripe.card.createToken({
    number: data.ccNumber,
    cvc: data.cvc,
    exp_month: exp[0],
    exp_year: exp[1]
 }, this.stripeResponseHandler);

 */