import 'es6-promise';  // not sure if i actually need this...
import 'whatwg-fetch';
import LoginStore from '../stores/LoginStore';


/**
 * does this solve my fucking problem???  please?
 * http://rjzaworski.com/2015/06/testing-api-requests-from-window-fetch
 *
 * good article on promises:
 * http://www.html5rocks.com/en/tutorials/es6/promises
 *
 * remember that then() is called with a value if previous call returned a value.  otherwise, then() waits on
 * the previous promise to complete.
 */

class HttpRequest {

  constructor() {
    console.log("inside HttpRequest constructor\n\n");
  }


  postJsonNoAuth(url, data) {
    //url = 'http://localhost:8080/api/greeting';  // generates 403 http response

    return fetch(url, {
      method: 'post',
      headers: this._jsonHeaders(),
      body: JSON.stringify(data)
    })
      .then(this._checkStatus)
      .then(this._parseJSON);
  }

  postJson(url, data) {
    return fetch(url, {
      method: 'post',
      headers: this._authJsonHeaders(),
      body: JSON.stringify(data)
    })
      .then(this._checkStatus)
      .then(this._parseJSON);
  }

  getJson(url, data) {
    return fetch(url, {
      method: 'get',
      headers: this._authJsonHeaders(),
      body: JSON.stringify(data)
    })
      .then(this._checkStatus)
      .then(this._parseJSON);
  }


  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  /**
   * for the day when i come back and scratch my head over this nonsense:
   * the response.json() returns a Promise object, which has a then() method.  the Promise object returned from
   * response.json() has been fulfilled (the json string has been extracted from the response and stored within
   * the Promise 'container').  then() is called with the value of the fulfilled promise (which is the json). since
   * each then() in the chain can work on only a single value (returns a single value for the next then() in the chain),
   * we need to pull out the auth token before we 'lose' the response object (we lose it b/c of the single return value)
   * we return a fulfilled (or resolved) promise back to our caller (some service class using this request object). it's
   * their responsibility to pull the json out and/or the token from the returned promise.  jesus fukking christ.
   */
  _parseJSON(response) {
    var authToken = response.headers.get('X-AUTH-TOKEN');

    return response.json().then(function(json) {
      return Promise.resolve({
        token: authToken,
        json: json
      })
    });
  }

  _jsonHeaders() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
  }

  _authJsonHeaders() {
    var headers = this._jsonHeaders();

    if(LoginStore.jwt) {
      headers['X-AUTH-TOKEN'] = LoginStore.jwt;
    }

    return headers;
  }

}

export default HttpRequest;