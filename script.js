// Toggle Light/Dark Mode
document.getElementById('toggleModeBtn').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});

// Counter Buttons
let counterValue = 0;
const counterDisplay = document.getElementById('counter');

document.getElementById('increaseBtn').addEventListener('click', () => {
  counterValue++;
  counterDisplay.textContent = counterValue;
});

document.getElementById('decreaseBtn').addEventListener('click', () => {
  counterValue--;
  counterDisplay.textContent = counterValue;
});

// FAQ Toggle Answers
document.querySelectorAll('.faq-question').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  let isValid = true;

  // Name validation
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
    // clear error after 4 seconds timeout
    setTimeout(()=>{
        document.getElementById('nameError').textContent = '';
    },4000)
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address';
    // clear error after 4 seconds timeout
    setTimeout(()=>{
        document.getElementById('emailError').textContent = '';
    },4000)
    isValid = false;
  }

  // Password validation
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
     // clear error after 4 seconds timeout
    setTimeout(()=>{
        document.getElementById('passwordError').textContent = '';
    },4000)
    isValid = false;
  }

  if (isValid) {
    document.getElementById('formMessage').textContent = 'Form submitted successfully!';
    document.getElementById('signupForm').reset();
  } else {
    document.getElementById('formMessage').textContent = 'Please correct the errors above.';
  }
});
