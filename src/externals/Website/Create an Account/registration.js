const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

// Check if the values are stored in localStorage
if (localStorage.getItem('gymSessions') !== null) {
  // If the value exists, set the input value to the stored value
  document.getElementById('gym-sessions').value = localStorage.getItem('gymSessions');
} else {
  // If the value does not exist, set the input value to zero
  document.getElementById('gym-sessions').value = 0;
}

if (localStorage.getItem('drinking') !== null) {
  document.getElementById('drinking').value = localStorage.getItem('drinking');
} else {
  document.getElementById('drinking').value = 0;
}

if (localStorage.getItem('smoking') !== null) {
  document.getElementById('smoking').value = localStorage.getItem('smoking');
} else {
  document.getElementById('smoking').value = 0;
}

// Add event listeners to update the localStorage when the input value changes
document.getElementById('gym-sessions').addEventListener('input', function() {
  localStorage.setItem('gymSessions', this.value);
});

document.getElementById('drinking').addEventListener('input', function() {
  localStorage.setItem('drinking', this.value);
});

document.getElementById('smoking').addEventListener('input', function() {
  localStorage.setItem('smoking', this.value);
});

  
  // perform form submission logic here
});

// Get the dropdown button and the dropdown menu
var dropdownButton = document.querySelector('.dropdown-toggle');
var dropdownMenu = document.querySelector('.dropdown-menu');

// When the dropdown button is clicked, show or hide the dropdown menu
dropdownButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle('show');
});

// When a dropdown item is clicked, update the selected text and hide the dropdown menu
var dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var value = item.getAttribute('data-value');
    var text = item.textContent;
    var selectedText = document.querySelector('.selected-text');
    selectedText.textContent = text;
    dropdownMenu.classList.remove('show');
  });
});

// When the area code input is focused, hide the selected text and show the dropdown menu
var areaCodeInput = document.querySelector('#area-code-input');
areaCodeInput.addEventListener('focus', function() {
  var selectedText = document.querySelector('.selected-text');
  selectedText.style.display = 'none';
  dropdownMenu.classList.add('show');
});

// Ctrl + V (Windows) or Command + V (Mac) detection for username input field
const username = document.getElementById("username");
const confirmUsername = document.getElementById("confirm-username");

// Prevent copying, pasting, and cutting in username field
username.addEventListener('copy', function(e) {
    e.preventDefault();
});
username.addEventListener('paste', function(e) {
    e.preventDefault();
});
username.addEventListener('cut', function(e) {
    e.preventDefault();
});
username.addEventListener('autocomplete', 'off'); 

// Prevent copying, pasting, and cutting in confirm-username field
confirmUsername.addEventListener('copy', function(e) {
    e.preventDefault();
});
confirmUsername.addEventListener('paste', function(e) {
    e.preventDefault();
});
confirmUsername.addEventListener('cut', function(e) {
    e.preventDefault();
});
confirmUsername.setAttribute('autocomplete', 'off'); 

