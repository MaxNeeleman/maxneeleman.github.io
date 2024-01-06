const outputArea = document.getElementById('output-area');
const commandLine = document.getElementById('command');

const commands = ['help', 'clear', 'welcome', 'cv', 'contact', 'projects'];

function executeCommand(userInput) {
    const command = userInput.trim().toLowerCase(); // Remove leading/trailing whitespaces and convert to lowercase
  
    // Handle different commands based on their names
    if (command === 'help') {
      const help = helpMessage();
      displayOutput(help); // Call a function to display the output
    } else if (command === 'clear') {
      clearTerminal(); // Call a function to clear the terminal
    } else if (command === 'welcome') {
      displayOutput("");
    } else if (command === 'cv') {
      const cv = generateCV();
      displayOutput(cv);
    } else if (command === 'contact') {
      const contact = contactForm();
      displayOutput(contact);
    } else if (command === 'projects') {
      const projects = projectsMessage();
      displayOutput(projects);
    } else {
      displayOutput(`Command not found: ${command}`);
      scrollToBottom();
  }
}

commandLine.addEventListener('input', function(event) {
  // Ignore backspace key events
  if (event.inputType !== 'deleteContentBackward') {
    const userInput = event.target.value;
    const autoCompleteCommand = commands.find(cmd => cmd.startsWith(userInput));
    if (autoCompleteCommand) {
      event.target.value = autoCompleteCommand;
      // Set the cursor position at the end of the input
      event.target.setSelectionRange(userInput.length, autoCompleteCommand.length);
    }
  }
});

commandLine.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const userInput = event.target.value;
    event.target.value = '';  // Clear the input field
    executeCommand(userInput);
    scrollToBottom();
  } else if (event.key === 'Tab') {
    event.preventDefault();  // Prevent the default action of the 'Tab' key
    const userInput = event.target.value;
    const autoCompleteCommand = commands.find(cmd => cmd.startsWith(userInput));
    if (autoCompleteCommand) {
      event.target.value = autoCompleteCommand;
      // Set the cursor position at the end of the input
      event.target.setSelectionRange(autoCompleteCommand.length, autoCompleteCommand.length);
    }
  }
});

// Focus on the command line automatically
//setInterval(function() {
//  commandLine.focus();
//}, 100);

function displayOutput(output) {
    // Create a new paragraph element to display the output
    const outputElement = document.createElement('div');
    outputElement.innerHTML = output;
  
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

window.onload = function() {
  commandLine.focus();
};

commandLine.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
    event.preventDefault(); // Prevent the default tab behavior
    commandLine.focus(); // Focus on the input field
  }
});

function helpMessage() {
  const helpMessageContent = `
  <h1>Here is a list of commands!</h1>
  <ul>
    <li>Help || Shows a list of commands</li>
    <li>Clear || Clears the terminal</li>
    <li>Welcome || Shows welcome message</li>
    <li>CV || Shows Curriculum Vitae</li>
    <li>Contact || Shows contact form</li>
    <li>Projects || Shows projects</li>
  </ul>
  `;
  return helpMessageContent;
}

function generateCV() {
  const currentDate = new Date();
  const formattedDate = currentDate.getDate() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getFullYear();
  const getFullYear = currentDate.getFullYear();

  const cvContent = `
  <h1>Curriculum Vitae</h1>
  <h2>Max Neeleman</h2>
  <h3>Personal Information</h3>
  <ul>
    <li>29-06-1999</li>
    <li>Almkerk, The Netherlands</li>
    <li>m.neeleman@proton.me</li>
  </ul>
  <h3>Experience</h3>
  <ul>
    <li>Stock Clerk              @ Albert Heijn Almkerk     || 08-08-2015 -- 25-05-2019</li>
    <li>Internship Information   @ Gemeente Altena          || 01-02-2020 -- 29-07-2020</li>
    <li>Production Worker        @ The Dutch Nightcrawlers  || 01-02-2021 -- 30-09-2021</li>
    <li>Administrative Assistant @ Idea-X B.V.              || 07-02-2022 -- 07-09-2022</li>
    <li>Production Worker        @ The Dutch Nightcrawlers  || 12-09-2022 -- ${formattedDate} (Currently employed)</li>
  </ul>
  <h3>Education</h3> 
  <ul>
    <li>HAVO                        @ Altena College                    || 2011 -- 2016 || Diploma Acquired</li>
    <li>Business IT & Management    @ Avans University of Science Breda || 2016 -- 2020 || No Diploma</li>
    <li>Part Time Computer Science  @ Avans University of Science Breda || 2022 -- ${getFullYear} (Currently attending)</li>
  </ul>
  <h3>Skills</h3>
  <p>Rated out of ☆☆☆☆☆</p>
  <ul>
    <li>HTML              ★★★☆☆</li>
    <li>CSS               ★★★☆☆</li>
    <li>JavaScript        ★★★☆☆</li>
    <li>PHP               ★★★☆☆</li>
    <li>Kotlin            ★★★☆☆</li>
    <li>Linux             ★★★☆☆</li>
    <li>Dutch & English   ★★★★☆</li>
    <li>Microsoft Office  ★★★★☆</li>
    <li>Drivers License B ★★★★★</li>
  </ul>
  `;

  return cvContent;
}

function projectsMessage() {
  const projectsContent = `
  <h1>Projects</h1>
  <h2>Work in Progress</h2>
  `;

  return projectsContent;
}



function contactForm() {
  const contactFromContent = `
  <form action="" method="post">
    <h1>Contact Form</h1>
    <p>Feel free to contact me!</p>
    <h2>Work in Progress</h2>
    <input type="text" id="fname" name="fullname" placeholder="Your name..">
    <input type="text" id="email" name="email" placeholder="Your email..">
    <input type="text" id="subject" name="subject" placeholder="Subject..">
    <textarea id="message" name="message" placeholder="Write something.."></textarea>
    <button type="submit" value="Submit">Submit</button>
  </form>
  `;

  return contactFromContent;
}