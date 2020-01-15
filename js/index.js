// Your code goes here
// vars
const button = document.querySelectorAll('.btn');
const link = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-heading');
const allImg = document.querySelectorAll('img');
// const stopLink = document.querySelector('.nav-link');
const destination = document.querySelectorAll('.destination');

const stopLink = document.querySelector('.nav-link');
// event listeners
button.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.fontSize = '2rem';
    element.style.fontWeight = 'bold';
  })
  element.addEventListener('mouseleave', () => {
    element.style.fontSize = '1.8em';
    element.style.fontWeight = 'normal';
  })
})

link.forEach(element => {
  element.addEventListener('mouseenter', () => {
    element.style.color = '#C0C0C0';
  })
  element.addEventListener('mouseleave', () => {
    element.style.color = '#212529';
  })
})

logo.addEventListener('mouseenter', () => {
  logo.style.transform = 'rotate(10turn)';
  logo.style.transition = '3000ms';
})

logo.addEventListener('mouseleave', () => {
  logo.style.transform = 'none';
  logo.style.transition = 'none';
})

logo.addEventListener('mouseenter', () => {
  logo.style.color = '#FBB74C';
  logo.style.transition = '3000ms';
})

logo.addEventListener('mouseleave', () => {
  logo.style.color = '#212529';
  // logo.style.transition = '5000ms';
})

allImg.forEach(event => {
  event.style.border = '1px solid transparent';
  event.style.borderRadius = '10px';
  event.addEventListener('mouseenter', () => {
    event.style.transform = 'scale(1.1)';
    event.style.transition = '400ms';
  })
  event.addEventListener('mouseleave', () => {
    event.style.transform = 'scale(1)';
  })
})

// stopLink.forEach((event) => {
//   event.addEventListener('click', () => {
//     event.preventDefault();
//   })
// })

// contentPick.addEventListener('click', () => {
//   // contentPick.style.transform = 'scale(1.2)';
//   contentPick.style.backgroundColor = 'red';
// })
// contentPick.addEventListener('mouseenter', () => {
//   contentPick.style.backgroundColor = 'red';
// })
// contentPick.style.backgroundColor = 'red';

stopLink.addEventListener('click', (event) => {
  event.preventDefault();
})

destination.forEach(event => {
  event.addEventListener('mouseenter', () => {
    event.style.transform = 'scale(1.1)';
  })
  event.addEventListener('mouseleave', () => {
    event.style.transform = 'scale(1)';
  })
})