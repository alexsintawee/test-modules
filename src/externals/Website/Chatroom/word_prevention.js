const bannedWords = ["fuck"];

function filterMessage(message) {
  for (const word of bannedWords) {
    const regex = new RegExp(word, 'gi');
    message = message.replace(regex, '****');
  }
  return message;
}

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatOutput = document.getElementById('chat-output');
const errorMessage = document.querySelector('.error-message'); // Select the error message element

chatForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const message = chatInput.value;
  const filteredMessage = filterMessage(message);

  if (filteredMessage.includes('****')) {
    errorMessage.textContent = 'Message contains a banned word. Please remove it.';
    errorMessage.style.display = 'block'; // Show the error message
    chatInput.value = '';
  } else {
    errorMessage.textContent = ''; // Clear the error message
    errorMessage.style.display = 'none'; // Hide the error message
    chatOutput.innerHTML += `<div>${filteredMessage}</div>`;
    chatInput.value = '';
  }
});