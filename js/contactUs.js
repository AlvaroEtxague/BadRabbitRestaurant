const form = document.querySelector('#message-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const textArea = document.querySelector('#text-area');
const submit = document.querySelector('button');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');
const textError = document.querySelector('#text-error');

let nameIsValid = () => {
  if (name.value === '' || name.value === null) {
    return false;
  } else {
    return true;
  }
};

let emailIsValid = () => {
  if (email.value === '' || email.value === null) {
    return false;
  } else {
    return true;
  }
};

let phoneIsValid = () => {
  if (phone.value === '' || phone.value === null) {
    return false;
  } else {
    return true;
  }
};

let textAreaIsValid = () => {
  if (textArea.value === '' || textArea.value === null) {
    return false;
  } else {
    return true;
  }
};

let showError = () => {
  if (!nameIsValid()) {
    $('#name-error').text('Please enter a valid name');
    $('#name-error').removeClass('hide');
  } else {
    $('#name-error').addClass('hide');
  }
  if (!emailIsValid()) {
    $('#email-error').text('Please enter a valid email address');
    $('#email-error').removeClass('hide');
  } else {
    $('#email-error').addClass('hide');
  }
  if (!phoneIsValid()) {
    $('#phone-error').text('Please enter a valid phone');
    $('#phone-error').removeClass('hide');
  } else {
    $('#phone-error').addClass('hide');
  }
  if (!textAreaIsValid()) {
    $('#text-error').text('Please enter a valid message');
    $('#text-error').removeClass('hide');
  } else {
    $('#text-error').addClass('hide');
  }
};

//HIDE FORM AND SHOW MESSAGE
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (!nameIsValid() || !emailIsValid() || !phoneIsValid() || !textAreaIsValid()) {
    showError();
  } else {
    $('#message-thanks').removeClass('hide');
    $('#message-form').addClass('hide');
    $('.leave-message').addClass('hide');
  }
});
