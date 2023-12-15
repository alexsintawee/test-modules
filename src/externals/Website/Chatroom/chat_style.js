const chatInput = document.getElementById('chat-input');

chatInput.addEventListener('paste', (event) => {
  event.preventDefault();
});

chatInput.addEventListener('input', (event) => {
  const chat = event.target.value;
  const chatLines = chat.split('\n');
  const lastLine = chatLines[chatLines.length - 1];
  const lastLineLength = lastLine.length;
  
  // If the last line has exceeded a certain length, add a new line
  if (lastLineLength >= 20) { // Change 20 to your desired length
    chatInput.value += '\n';
  }
});
