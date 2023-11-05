function isValidEmail(email) {
  var emailRegex =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!email.value.match(emailRegex)) {
    document.getElementById('err').style.visibility = "visible";
    document.email.email.focus();
    console.log('iie');
    return false;
  } else {
    document.getElementById('err').style.visibility = 'hidden';
    document.email.email.focus();
    console.log('hai');
    return true;
  }
}
