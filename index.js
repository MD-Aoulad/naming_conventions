// index.js

// Get the form and output elements
const form = document.getElementById('form');
const output = document.getElementById('output');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the values of all input fields
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;

  // Combine the input values with underscores
  const modifiedText = input1 + '_' + input2;

  // Update the output element with the modified text
  output.textContent = modifiedText;
});
