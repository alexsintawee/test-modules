function checkUsername(username) {
  const minLength = 6;
  const regexWhitespace = /\s/;
  const regexName = new RegExp(`\\b${firstName}\\b|\\b${lastName}\\b`, 'i');
  const regexBirthdate = new RegExp(`${birthdate.replace(/-/g, '')}`, 'i');
  const regexEmail = new RegExp(`${email.replace('.', '\\.')}|${email.replace('.', '')}`, 'i');
  const isValid = username.length >= minLength
                  && !regexWhitespace.test(username)
                  && !regexName.test(username)
                  && !regexBirthdate.test(username)
                  && !regexEmail.test(username);
  return isValid;
}

function checkUsernameMatch() {
  const usernameInput = document.getElementById("username");
  const confirmUsernameInput = document.getElementById("confirm-username");
  const username = usernameInput.value.trim();
  const confirmUsername = confirmUsernameInput.value.trim();
  const usernameStatus = document.getElementById("username-status");
  
  if (username === "") {
    usernameStatus.innerHTML = "";
  } else if (username !== confirmUsername) {
    confirmUsernameInput.setCustomValidity("Usernames do not match");
    usernameStatus.innerHTML = "";
  } else if (!checkUsername(username)) {
    usernameInput.setCustomValidity("Username must be at least 6 characters long and not contain spaces");
    confirmUsernameInput.setCustomValidity("");
    usernameStatus.innerHTML = "Invalid username";
  } else {
    usernameInput.setCustomValidity("");
    confirmUsernameInput.setCustomValidity("");
    usernameStatus.innerHTML = "Valid username";
  }
}

// Add an event listener to the username input to trigger the validation
const usernameInput = document.getElementById("username");
usernameInput.addEventListener("input", checkUsernameMatch);

// Add an event listener to the confirm-username input to trigger the validation
const confirmUsernameInput = document.getElementById("confirm-username");
confirmUsernameInput.addEventListener("input", checkUsernameMatch);

// This is an example function to check if a username has been previously used.
// Replace this with your own code that checks if the username has been used before.
function isUsernamePreviouslyUsed(username) {
  // Return true or false depending on whether the username has been used before.
  return false;
}

// This is an example function to check if the 30-day cooldown period has expired for a username.
// Replace this with your own code that checks if the cooldown period has expired.
function isCooldownExpired(username) {
  // Return true or false depending on whether the cooldown period has expired.
  return true;
}

// This is the function that you can call when the user submits the registration form.
function checkUsernameCooldown(username) {
  if (isUsernamePreviouslyUsed(username)) {
    if (isCooldownExpired(username)) {
      // Allow the user to register with the previously used username.
      console.log("Username is available");
    } else {
      // Display an error message to the user and prevent registration.
      console.log("Username is not available, please try again later");
    }
  } else {
    // Allow the user to register with the new username.
    console.log("Username is available");
  }
}
