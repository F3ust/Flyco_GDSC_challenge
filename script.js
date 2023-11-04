function isValidEmail(email) {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    document.getElementById('err').style.visibility = "visible";
    document.email.email.focus();
    console.log('iie');
  } else if (emailRegex.test(email)){
    document.getElementById('err').style.visibility = 'hidden';
    document.email.email.focus();
  }
}
