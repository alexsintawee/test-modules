document.addEventListener("DOMContentLoaded", function () {
    const enterToggle = document.getElementById('enter-toggle');
    const chatInput = document.getElementById('chat-input');
      
    enterToggle.addEventListener('change', function () {
      if (enterToggle.checked) {
        chatInput.addEventListener('keydown', handleEnterKey);
      } else {
        chatInput.removeEventListener('keydown', handleEnterKey);
      }
    });
  
    function handleEnterKey(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    }
  
    function sendMessage() {
      const message = chatInput.value;
      // Replace this with your code to send the message (e.g., displaying it in the chat-output div).
      // Then, clear the chat input field if needed.
      chatInput.value = '';
    }
  });