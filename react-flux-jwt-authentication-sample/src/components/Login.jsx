import React from 'react/addons';
import ReactMixin from 'react-mixin';
import Auth from '../services/AuthService'

export default class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      user: 'test@brs.com',
      password: 'test-password'
    };
  }

  login(e) {
    e.preventDefault();
    Auth.login(this.state.user, this.state.password);
  }

  // to display/hide span error msgs (mostly for later when i refactor form fields)
  // <span style={{visibility:'hidden'}}>This is some help text...</span>
  // <span style={{visibility:'display'}}>This is some help text...</span>

  // note the forgot pwd link takes the ghetto shortcut.  that's probably wrong...
  render() {
    return (

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-4 col-md-offset-4 well well-sm">
            <legend> Login</legend>
            <form action="#" method="post" className="form" role="form">
              <input valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Your Email or Mobile" type="email" required autoFocus />
              <input valueLink={this.linkState('password')} className="form-control" id="password" placeholder="Password" type="password" required/>
              <span style={{visibility:'hidden'}}>This is some help text...</span>

              <br />
              <br />
              <div className="row">
                <div className="col-xs-6 text-left">
                    <button className="btn btn-small btn-primary" type="button" onClick={this.login.bind(this)}>Log In</button>
                </div>
                <div className="col-xs-6 text-right" style={{marginTop: 15}}>
                    <a href="/#/forgot-pwd">Forgot Password</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

ReactMixin(Login.prototype, React.addons.LinkedStateMixin);


/*

 <div className="col-xs-6 text-left">
 <div className="previous">
 <button className="btn btn-small btn-primary" type="button" onClick={this.login.bind(this)}>Log In</button>
 </div>
 </div>
 <div className="col-xs-6 text-right">
 <div className="next">
 <button className="btn btn-small btn-primary" type="button" onClick={this.login.bind(this)}>Forgot pwd</button>
 </div>
 </div>


 className="btn btn-lg btn-primary btn-block"


 <div className="col-md-4 jumbotron col-md-offset-4">
 <h2></h2>
 <form role="form" className="form-horizontal">
 <div className="form-group">
 <label htmlFor="username">Username</label>
 <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
 </div>
 <div className="form-group">
 <label htmlFor="password">Password</label>
 <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
 </div>
 <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
 </form>
 </div>
 */