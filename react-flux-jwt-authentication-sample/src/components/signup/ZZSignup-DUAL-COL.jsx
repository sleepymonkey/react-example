// var forms = require('newforms')
// var BootstrapForm = require('newforms-bootstrap')
import React from 'react';
import forms from 'newforms';
import BootstrapForm from 'newforms-bootstrap';
var {Container, Row, Field} = BootstrapForm;

var SignupForm = forms.Form.extend({
  firstname: forms.CharField({maxLength: 50}),
  lastname: forms.CharField({maxLength: 50}),
  email: forms.EmailField({maxLength: 256}),
  mobile: forms.CharField({maxLength: 16}),
  password: forms.CharField({maxLength: 10}),
  verifyPassword: forms.CharField({maxLength: 10}),

  // ...
})

var Signup = React.createClass({
  _onSubmit() {
    var form = this.refs.signupForm.getForm()
    if (!form.validate()) {
        return false;
    }
    else {
      alert("valid form");
    }
  },

  render() {
    return (
      <div className="col-md-10 jumbotron col-md-offset-1">
        <form onSubmit={this._onSubmit}>
          <forms.RenderForm form={SignupForm} ref="signupForm">
            <Container>
              <Row>
                <Field name="firstname" md="6"/>
                <Field name="email" md="6"/>
              </Row>
              <Row>
                <Field name="lastname" md="6"/>
                <Field name="mobile" md="6"/>
              </Row>
              <Row>
                <Field name="email" md="6"/>              
                <Field name="password" md="2"/>
              </Row>
              <Row>
                <Field name="email" md="6"/>              
                <Field type="password" name="password" md="2"/>
              </Row>              
            </Container>
          </forms.RenderForm>
          <button className="btn btn-default">Next</button>
        </form>
      </div>
    )
  }
})

export default Signup;