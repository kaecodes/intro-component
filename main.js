const firstName = document.getElementById('fname'); 
const lastName = document.getElementById('lname'); 
const email = document.getElementById('email'); 
const password = document.getElementById('password'); 
const claimBtn = document.getElementById('free-trial'); 

document.forms['myForm'].onsubmit = function(e) {
  let submit = true; 
  emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

  if (firstName.value == '') {
    document.getElementById('fname-error').innerHTML = 'First Name cannot be empty'; 
    document.getElementById('fname-error').style.display = 'block'; 
    document.getElementById('fname-error-icon').style.display = 'block'; 
    document.getElementById('fname').style.borderColor = 'var(--red)'; 
    document.getElementsByName('fname')[0].placeholder = ''; 
    e.preventDefault(); 
    submit = false; 
  }

  if (lastName.value == '') {
    document.getElementById('lname-error').innerHTML = 'Last Name cannot be empty'; 
    document.getElementById('lname-error').style.display = 'block'; 
    document.getElementById('lname-error-icon').style.display = 'block'; 
    document.getElementById('lname').style.borderColor = 'var(--red)'; 
    document.getElementsByName('lname')[0].placeholder = ''; 
    e.preventDefault(); 
    submit = false; 
  }

  if (email.value == '') {
    document.getElementById('email-error').innerHTML = 'Email cannot be empty'; 
    document.getElementById('email-error').style.display = 'block'; 
    document.getElementById('email-error-icon').style.display = 'block'; 
    document.getElementById('email').style.borderColor = 'var(--red)'; 
    document.getElementsByName('email')[0].placeholder = ''; 
  } else if (!email.value.match(emailFormat)) {
    document.getElementById('email-error').innerHTML = 'Looks like this is not an email'; 
    document.getElementById('email-error').style.display = 'block'; 
    document.getElementById('email-error-icon').style.display = 'block'; 
    document.getElementById('email').style.borderColor = 'var(--red)'; 
    email.classList.add('error'); 
    e.preventDefault(); 
    submit = false; 
  }

  if (password.value == '') {
    document.getElementById('password-error').innerHTML = 'Password cannot be empty'; 
    document.getElementById('password-error').style.display = 'block'; 
    document.getElementById('password-error-icon').style.display = 'block'; 
    document.getElementById('password').style.borderColor = 'var(--red)'; 
    document.getElementsByName('password')[0].placeholder = ''; 
    e.preventDefault(); 
    submit = false; 
  }

  return submit; 
}

function removeError() {
  document.getElementById(this.id + '-error').innerHTML = ''; 
  document.getElementById(this.id + '-error-icon').style.display = 'none'; 
}

document.getElementById('fname').onkeyup = removeError; 
document.getElementById('lname').onkeyup = removeError; 
document.getElementById('email').onkeyup = removeError; 
document.getElementById('password').onkeyup = removeError; 