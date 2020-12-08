const burgerIcon = document.querySelector('.toggle-burger-icon');
const nav = document.querySelector('.nav-links');
const mainSection = document.querySelector('.main-section');
const main = document.querySelector('.section-push');

const starters = document.querySelector('#starter-icon');
const starterRow = document.querySelector('.starter-row');

const beef = document.querySelector('#beef-icon');
const beef_row = document.querySelector('.beef-row');

const chicken = document.querySelector('#chicken-icon');
const chicken_row = document.querySelector('.chicken-row');

const fish = document.querySelector('#fish-icon');
const fish_row = document.querySelector('.fish-row');

burgerIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
  // mainSection.classList.toggle('mutate');
  main.classList.toggle('mutate');
});

starters.addEventListener('click', () => {
  starterRow.classList.toggle('active');
  smoothScroll('.starters', 1000);
});

beef.addEventListener('click', () => {
  beef_row.classList.toggle('active');
  smoothScroll('.beef', 1000);
});

chicken.addEventListener('click', () => {
  chicken_row.classList.toggle('active');
  smoothScroll('.chicken', 1000);
});

fish.addEventListener('click', () => {
  fish_row.classList.toggle('active');
  smoothScroll('.fish', 1000);
});

function smoothScroll(target, duration) {
  const myTarget = document.querySelector(target);
  const targetPosition = myTarget.getBoundingClientRect().top;
  // const startPosition = window.pageYOffset;
  const startPosition = 0;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  console.log(targetPosition);
  console.log(startPosition);

  requestAnimationFrame(animation);
}
