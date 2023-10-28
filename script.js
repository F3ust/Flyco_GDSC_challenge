function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    document.getElementById('err').style.display='block';
    document.email.email.focus();
    console.log('iie');
  } else {
    document.getElementById('err').style.display='none';
    document.email.email.focus();
  }
}
