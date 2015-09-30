// something like the following:
// var SOME_VAR = node.ENV === 'STAGING' ? 'staging-val' : 'dev-val';

var BASE_URL='http://localhost:8080';
var STRIPE_ACCESS_KEY = 'pk_test_8KhsfVzU4XT5XUtTSRQzlc63';

export default {
  /* urls */
  BASE_URL: BASE_URL,
  STRIPE_ACCESS_KEY: STRIPE_ACCESS_KEY,
  LOGIN_URL: BASE_URL + '/auth/dologin',
  SIGNUP_URL: BASE_URL + '/auth/new-user',
  FORGOT_PWD_URL: BASE_URL + '/auth/forgot-pwd',
  CHANGE_PWD_URL: BASE_URL + '/auth/update-tmp-pwd',
  SET_PAYMENT_URL: BASE_URL + '/profile/set-pmt',
  STD_PROPERTY_DATA_URL: BASE_URL + '/data/std',

  /* dispatch states */
  LOGIN_USER: 'LOGIN_USER',
  FORGOT_PWD: 'FORGOT_PWD',
  CHANGE_PWD: 'CHANGE_PWD',
  SIGNUP_USER: 'SIGNUP_USER',
  SUBSCRIPTION_COMPLETE: 'SUBSCRIPTION_COMPLETE',
  LOGOUT_USER: 'LOGOUT_USER',
  PROPERTY_DATA_RETRIEVED: 'PROPERTY_DATA_RETRIEVED',
  PROPERTY_DETAIL_DATA_RETRIEVED: 'PROPERTY_DETAIL_DATA_RETRIEVED'
}
