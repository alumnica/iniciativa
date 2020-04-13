function statusChangeCallback(response) {
  // Called with the results from FB.getLoginStatus().
  console.log("statusChangeCallback");
  console.log(response); // The current login status of the person.
  if (response.status === "connected") {
    // Logged into your webpage and Facebook.
    testAPI();
  } 
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId: "791906151218334",
    cookie: true,
    xfbml: true,
    version: "v6.0"
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  FB.AppEvents.logPageView();
};

(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
      'Thanks for logging in, ' + response.name + '!';
  });
}
