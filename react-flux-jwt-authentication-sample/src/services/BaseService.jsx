import HttpRequest from './HttpRequest';


export default class BaseService {

  constructor() {
    // is this even necessary...?
  }


  postJsonNoAuth(url, jsonPostData, success) {
    var request = new HttpRequest();

    request.postJsonNoAuth(url, jsonPostData)
      .then(response => {
        success(response);
      })
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
        // a no-auth req is login or signup (at this point).  probably should just return to /login but need to think through it more
      });
  }

  postJson(url, jsonPostData, success) {
    var request = new HttpRequest();

    request.postJson(url, jsonPostData)
      .then(response => {
        success(response);
      })
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
        // WE NEED TO DEAL WITH THE COMMON THINGS HERE, LIKE REDIRECTING TO LOGIN PAGE FOR 403/401 AND OR TO CC CARD PAGE IF USER'S CC IS DEEMED INVALID (NEED TO DEFINE SOME SORT OF RETURN VALUE/CODE FOR THAT...)
      });
  }

  getJson(url, jsonPostData, success) {  // TODO;  NOT SURE THAT GET JSON PARAMS APPLY HERE...
    var request = new HttpRequest();

    request.getJson(url, jsonPostData)
      .then(response => {
        success(response);
      })
      .catch(function(err) {
        alert("There's an error logging in");
        console.log("Error logging in", err);
        // WE NEED TO DEAL WITH THE COMMON THINGS HERE, LIKE REDIRECTING TO LOGIN PAGE FOR 403/401 AND OR TO CC CARD PAGE IF
      });
  }
}