import React from 'react';
import ReactMixin from 'react-mixin';
import forms from 'newforms';
import BootstrapForm from 'newforms-bootstrap';
import SignupService from '../../services/AuthService'

var SignupForm = forms.Form.extend({
  firstname: forms.CharField({maxLength: 50}),
  lastname: forms.CharField({maxLength: 50}),
  email: forms.EmailField({maxLength: 256}),
  mobile: forms.CharField({maxLength: 16}),
  password: forms.CharField({maxLength: 10}),
  verifyPassword: forms.CharField({maxLength: 10}),
  onFormChange: function () {
    alert('inside onFormChange');
    this.forceUpdate();
  }.bind(this)
});


export default class Signup extends React.Component {

  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      mobile: '',
      password1: '',
      password2: ''
    };
  }


  _onSubmit(e) {
    e.preventDefault();

    var data = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      mobile: this.state.mobile,
      password: this.state.password,
      password2: this.state.password2
    };

    //if (!form.validate()) {
    //  alert("inside failed form validate");
    //  return false;
    //}

    SignupService.signup(data);
  }

  // to delete!!!  just for testing!
  _testData(e) {
    e.preventDefault();

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 10; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    var numbers = "";
    var possible = "123456789";
    for(var i = 0; i < 10; i++) {
      numbers += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    this.setState({
      firstname: 'reggie',
      lastname: 'smith',
      email: text.substring(0, 5) + '@' + text.substring(5) + '.com',
      mobile: numbers,
      password: '123',
      password2: '123'
    });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-4 well well-sm">
            <legend> Sign up!</legend>
            <form action="#" method="post" className="form" role="form">
              <div className="row">
                <div className="col-xs-6 col-md-6">
                  <input valueLink={this.linkState('firstname')} className="form-control" name="firstname" placeholder="First Name" type="text" required autoFocus />
                </div>
                <div className="col-xs-6 col-md-6">
                  <input valueLink={this.linkState('lastname')} className="form-control" name="lastname" placeholder="Last Name" type="text" required />
                </div>
              </div>
              <input valueLink={this.linkState('email')} className="form-control" name="email" placeholder="Your Email" type="email" required/>
              <input valueLink={this.linkState('mobile')} className="form-control" name="mobile" placeholder="Your Mobile Number" type="text" required/>
              <input valueLink={this.linkState('password')} className="form-control" name="password" placeholder="Password" type="password" required/>
              <input valueLink={this.linkState('password2')} className="form-control" name="password2" placeholder="Re-enter Password" type="password" required/>

              <br />
              <br />

              <div className="row">
                <div className="col-xs-6 text-left">
                  <button className="btn btn-small btn-primary" type="button" onClick={this._onSubmit.bind(this)}>Sign up</button>
                </div>
                <div className="col-xs-6 text-right">
                  <button className="btn btn-small btn-primary" type="button" onClick={this._testData.bind(this)}>Test Data</button>
                </div>
              </div>
              <br />

              <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this._onSubmit.bind(this)}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
} //)

ReactMixin(Signup.prototype, React.addons.LinkedStateMixin);
