// Your code goes here
// vars
const button = document.querySelectorAll('.btn');
const link = document.querySelectorAll('.nav-link');
const logo = document.querySelector('.logo-heading');

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
    // element.style.textDecoration = 'underline';
  })
  element.addEventListener('mouseleave', () => {
    element.style.color = '#212529';
    // element.style.textDecoration = 'none';
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