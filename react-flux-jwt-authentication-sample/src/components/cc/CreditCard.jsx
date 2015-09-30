// import forms from 'newforms';
import React from 'react';
import ReactMixin from 'react-mixin';
//import BootstrapForm from 'newforms-bootstrap';
import CreditCardService from './CreditCardService';
//import StripeCheckout from 'react-stripe-checkout';
import {STRIPE_ACCESS_KEY} from '../../constants/Constants'


// this belongs in it's own component/file...  probably as a subclass of some parent form object.
//var CreditCardForm = forms.Form.extend({
//  ccNumber: forms.CharField({maxLength: 30}),
//  ccExpiration: forms.CharField({maxLength: 5}),
//  cvc: forms.CharField({maxLength: 5})
//  /*,
//  address1: forms.CharField({maxLength: 30}),
//  address2: forms.CharField({maxLength: 30}),
//  city: forms.CharField({maxLength: 30}),
//  state: forms.CharField({maxLength: 30}),
//  zip: forms.CharField({maxLength: 30})
//  */
//});


//var CreditCard = React.createClass({
export default class CreditCard extends React.Component {

  constructor() {
    super();
    this.state = {
      ccNumber: '',
      ccExpMo: '',
      ccExpYr: '',
      cvc: ''
    };
  }

  _onSubmit(e) {
    e.preventDefault();

    var form = React.findDOMNode(this.refs.paymentForm);  // paymentForm comes from forms.RenderForm ref attr
    //if (!form.validate()) {
    //  alert("inside failed form validate");
    //  return false;
    //}

    CreditCardService.processCreditCard(form);
  }

  // to delete!!  just a test for myself...
  _testData(e) {
    this.setState({
      ccNumber: '4242424242424242',
      ccExpMo: '12',
      ccExpYr: '2017',
      cvc: '123'
    })
  }

  render() {
    // and if i ever want to go through this horseshit again:
    // http://bootsnipp.com/BhaumikPatel/snippets/r1jz

    return (

    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-4 well well-sm">
          <legend>Enter Credit Card Information</legend>
          <form action="#" method="post" className="form" role="form"ref="paymentForm">
            <span className="payment-errors"></span>

            <input valueLink={this.linkState('ccNumber')} data-stripe="number" className="form-control" name="ccNumber" placeholder="Credit Card Number" type="text" required autoFocus/>

            <div className="row">
              <div className="col-xs-6 col-md-6">
                <input valueLink={this.linkState('ccExpMo')} data-stripe="exp-month" className="form-control" name="ccExpMo" maxlength="2" placeholder="Exp MM" type="text" required  />
              </div>
              <div className="col-xs-6 col-md-6">
                <input valueLink={this.linkState('ccExpYr')} data-stripe="exp-year" className="form-control" name="ccExpYr" maxlength="4" placeholder="Exp YYYY" type="text" required  />
              </div>
            </div>

            <input valueLink={this.linkState('cvc')} data-stripe="cvc" className="form-control" name="cvc" size="3" placeholder="CVC" type="text" required  />


            <br />
            <br />

            <div className="row">
              <div className="col-xs-6 text-left">
                <button className="btn btn-small btn-primary" type="button" onClick={this._onSubmit.bind(this)}>Submit Payment</button>
              </div>
              <div className="col-xs-6 text-right">
                <button className="btn btn-small btn-primary" type="button" onClick={this._testData.bind(this)}>Test Data</button>
              </div>
            </div>
            <br />

            <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this._onSubmit.bind(this)}>Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
    )

  }
}

ReactMixin(CreditCard.prototype, React.addons.LinkedStateMixin);

/*
<div className="col-md-4 jumbotron col-md-offset-4">
  <form action="javascript:void(0);" method="POST" id="payment-form" ref="paymentForm">
    <span className="payment-errors"></span>

    <div className="form-row">
      <label>
        <span>Card Number</span>
        <input type="text" size="20" data-stripe="number" value={this.state.ccNumber}/>
      </label>
    </div>

    <div className="form-row">
      <label>
        <span>CVC</span>
        <input type="text" size="4" data-stripe="cvc" value={this.state.cvc}/>
      </label>
    </div>

    <div className="form-row">
      <label>
        <span>Expiration (MM/YYYY)</span>
        <input type="text" size="2" data-stripe="exp-month" value={this.state.ccExpiration.split("/")[0]}/>
      </label>
      <span> / </span>
      <input type="text" size="4" data-stripe="exp-year"  value={this.state.ccExpiration.split("/")[1]}/>
    </div>

    <button type="submit" onClick={this._onSubmit.bind(this)}>Submit Payment</button>
    <button type="submit" onClick={this._testData.bind(this)}>Set Data</button>
  </form>
</div>
*/

/*
 <form onSubmit={this._onSubmit.bind(this)}>

 <form >
 <forms.RenderForm form={CreditCardForm} ref="ccForm">
 <BootstrapForm/>
 </forms.RenderForm>
 <StripeCheckout
 name="Three Comma Co."
 description="Big Data Stuff"
 image="http://nancyfriedman.typepad.com/.a/6a00d8341c4f9453ef01a3fd095a0b970b-pi"
 panelLabel="Give Money"
 amount={1000000}
 currency="USD"
 stripeKey={STRIPE_ACCESS_KEY}
 token={this.onToken}>
 <button>Next</button>
 </StripeCheckout>
 </form>

 <button className="myOwnButton">
 <span>Use your own child component, which gets wrapped in a span</span>
 </button>
 */