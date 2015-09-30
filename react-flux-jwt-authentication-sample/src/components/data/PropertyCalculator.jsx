import React from 'react/addons';
import ReactMixin from 'react-mixin';
import LoginStore from '../../stores/LoginStore';
import AuthService from '../../services/AuthService';


/*
  totally bunk.  eventually this will become the calculator component.  copied from another class...
 */
export default class PropertyCalculator extends React.Component {

  constructor() {
    super();
    this.state = {
      userid: '',
      tmpPwd: '',
      newPwd: '',
      verifyPwd: ''
    };
  }

  submitPasswordChange(e) {
    e.preventDefault();

    var userid = LoginStore.fp_userid;  // hack.  don't know how to wire up the whole event thing for userid coming from forgot pwd
    AuthService.changePassword(userid, this.state.tmpPwd, this.state.newPwd, this.state.verifyPwd);
  }

  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-4 well well-sm">
            <legend><i className="glyphicon glyphicon-globe"></i> Change Password</legend>
            <form action="#" method="post" className="form" role="form">
              <input valueLink={this.linkState('tmpPwd')} className="form-control" id="tmp-pwd" placeholder="Temporary Password" type="text" required autoFocus/>
              <input valueLink={this.linkState('newPwd')} className="form-control" id="password" placeholder="New Password" type="password" required/>
              <input valueLink={this.linkState('verifyPwd')} className="form-control" id="password" placeholder="Re-enter Password" type="password" required/>
              <br />
              <br />
              <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.submitPasswordChange.bind(this)}>Change Password</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactMixin(PropertyCalculator.prototype, React.addons.LinkedStateMixin);
