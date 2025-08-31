const textarea = document.getElementById('message');
const counter = document.getElementById('charCounter');
const warning = document.getElementById('warning');
const progressFill = document.getElementById('progressFill');
const maxChars = 200;

textarea.addEventListener('input', () => {
  let currentLength = textarea.value.length;

  if (currentLength >= maxChars) {
    textarea.value = textarea.value.substring(0, maxChars);
    currentLength = maxChars;
    warning.style.display = 'block';
  } else {
    warning.style.display = 'none';
  }

  counter.textContent = `${currentLength}/${maxChars} characters`;

  // Update progress bar width
  const percentage = (currentLength / maxChars) * 100;
  progressFill.style.width = percentage + '%';

  // Change progress bar color dynamically
  if (percentage < 50) {
    progressFill.style.backgroundColor = '#4caf50'; // Green
  } else if (percentage < 80) {
    progressFill.style.backgroundColor = '#ffeb3b'; // Yellow
  } else {
    progressFill.style.backgroundColor = '#ff4d4d'; // Red
  }
});