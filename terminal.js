const outputArea = document.getElementById('output-area');
const commandLine = document.getElementById('command'); // Assuming 'command-line' is the ID of the input element

function executeCommand(userInput) {
    const command = userInput.trim().toLowerCase(); // Remove leading/trailing whitespaces
  
    // Handle different commands based on their names
    if (command === 'help') {
      displayOutput('This is a help message.'); // Call a function to display the output
    } else if (command === 'clear') {
      clearTerminal(); // Call a function to clear the terminal
    } else if (command === 'welcome') {
      displayOutput("");
    } else {
      displayOutput(`Command not found: ${command}`);
    scrollToBottom();
  }
}

  commandLine.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const userInput = event.target.value;
        event.target.value = '';  // Clear the input field

        executeCommand(userInput);
        scrollToBottom();
    }
});

setInterval(function() {
  commandLine.focus();
}, 100);

function displayOutput(output) {
    // Create a new paragraph element to display the output
    const outputElement = document.createElement('p');
    outputElement.textContent = output;
  
    // Append the output element to the output area
    outputArea.appendChild(outputElement);
  
    // Scroll to the bottom of the output area to show the latest output
    scrollToBottom();
  }

  function clearTerminal() {
    const outputArea = document.getElementById('output-area');
    const welcomeArea = document.getElementById('welcome-area');
    outputArea.innerHTML = '';  // Clear the output area
    welcomeArea.innerHTML = '';  // Clear the welcome area
    commandLine.value = '';  // Clear the command line
}

function scrollToBottom() {
  outputArea.lastChild.scrollIntoView({ behavior: 'smooth' });
}