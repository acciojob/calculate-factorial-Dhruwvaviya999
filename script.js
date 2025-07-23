//your JS code here. If required.
// Prompt the user for a number
let input = prompt("Enter a number to find its factorial:");

// Convert the input to a number
let num = parseInt(input);

// Initialize factorial
let factorial = 1;

// Edge case: If num is 0 or 1, factorial is 1
if (num === 0 || num === 1) {
  factorial = 1;
} else {
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
}

// Show the result
alert("The factorial of " + num + " is " + factorial);
