import React from 'react/addons';
import ReactMixin from 'react-mixin';
import AuthService from '../../services/AuthService'

export default class ForgotPassword extends React.Component {

  constructor() {
    super()
    this.state = {
      contact: ''
    };
  }

  submitForgotPwd(e) {
    e.preventDefault();
    AuthService.forgotPassword(this.state.contact);
  }


  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-4 well well-sm">
            <legend><i className="glyphicon glyphicon-globe"></i> Forgot Password</legend>
            <form action="#" method="post" className="form" role="form">
              <input valueLink={this.linkState('contact')} className="form-control" id="username" placeholder="Your Email or Mobile" type="email" required autoFocus/>

              <br />
              <br />
              <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.submitForgotPwd.bind(this)}>Send Temporary Password</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactMixin(ForgotPassword.prototype, React.addons.LinkedStateMixin);
