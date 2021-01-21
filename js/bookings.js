const form = document.querySelector('#form');
const username = document.querySelector('#name');
const phone = document.querySelector('#phone');
const bookingDate = document.querySelector('#date');
const bookingTime = document.querySelector('#time');
const numOfGuests = document.querySelector('.form-select');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const small = document.querySelector('small');

//SHOW ERROR OUTLINE AND ERROR
let showError = (input, message) => {
  const myForm = input.parentElement;
  myForm.className = 'my-form-group error';

  const small = myForm.querySelector('small');
  small.innerText = message;
};

//SHOW SUCCESS OUTLINE
let showSuccess = (input) => {
  const myForm = input.parentElement;
  myForm.className = 'my-form-group success';
};

//CHECK EMAIL IS VALID
let checkEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, 'Email is not valid');
  }
};

//CHECK SELECT IS VALID
let checkNumOfGuests = (num) => {
  if (num.value >= 1 && num.value <= 10) {
    showSuccess(num);
  } else {
    showError(num, 'Please enter a valid number of guests');
  }
};

//CHECK INPUT LENGTH
let checkLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)}  must be less than ${max} characters`);
  } else {
    showSuccess(input);
  }
};

//GET FIELD NAME
let getFieldName = (input) => {
  const inputId = input.id;
  return inputId.charAt(0).toUpperCase() + inputId.slice(1);
};

//CHECK REQUIRED FIELDS
let checkRequired = (inputArr) => {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

//CHECK IF VALIDATION IS PASSED
let isValidationPassed = (input) => {
  let myClasses = input.parentElement.classList;
  if (myClasses.contains('error')) {
    return false;
  } else {
    return true;
  }
};

let checkAllValidations = () => {
  if (
    isValidationPassed(username) !== true ||
    isValidationPassed(phone) !== true ||
    isValidationPassed(bookingDate) !== true ||
    isValidationPassed(bookingTime) !== true ||
    isValidationPassed(numOfGuests) !== true ||
    isValidationPassed(email) !== true
  ) {
    return false;
  } else {
    return true;
  }
};

//EVENT LISTENERS
form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([username, phone, bookingDate, bookingTime, numOfGuests, email]);
  checkLength(username, 3, 15);
  checkLength(phone, 8, 15);
  checkNumOfGuests(numOfGuests);
  checkEmail(email);
});

//HIDE FORM AND SHOW MESSAGE
form.addEventListener('submit', function (e) {
  e.preventDefault();
  let validationsFlag = checkAllValidations();
  if (validationsFlag) {
    $('.booking-message').removeClass('hide');
    $('.booking-form').addClass('hide');
  }
});
