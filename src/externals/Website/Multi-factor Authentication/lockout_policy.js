const maxAttempts = 2; // Maximum number of failed login attempts allowed
const lockoutDuration = 60 * 1000; // Duration of the lockout period in milliseconds (1 minute)

let failedAttempts = 0;
let lockoutTimer = null;

function handleFailedLogin() {
  failedAttempts++;
  if (failedAttempts >= maxAttempts) {
    // Lock the user account
    lockoutTimer = setTimeout(() => {
      failedAttempts = 0;
      lockoutTimer = null;
    }, lockoutDuration);
  }
}

function handleSuccessfulLogin() {
  // Reset the failed login attempts counter and lockout timer
  failedAttempts = 0;
  if (lockoutTimer) {
    clearTimeout(lockoutTimer);
    lockoutTimer = null;
  }
}

// Bind the handleFailedLogin() and handleSuccessfulLogin() functions to the login form
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  // Attempt to sign in the user
  if (signInSuccess) {
    handleSuccessfulLogin();
  } else {
    handleFailedLogin();
  }
});
