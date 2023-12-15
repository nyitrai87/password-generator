// Array of special characters to be included in password
const specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

const charOptions = [];
const passwordChars = [];
let generatedPassword = '';
let passwordLengthParsed = 0;

function pickRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function chooseCharOptions(array1, array2) {
  if (array1) {
    charOptions.push(array2);
    passwordChars.push(pickRandomElement(array2));
  }
}

//! You can store the generatedPassword as a string and concat each character OR
//! as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  //! Prompt for password length
  //! At least 8 characters, no more than 128 characters
  //! Conditional to check that the number that was entered is in range
  //! Prompts store data as strings, so need to parse into a number
  //! If the user's input is out of range, either return out of the function or call the function again

  //! Confirm which character sets to use
  //! If the user answers false for all, either return out of the function or call the function again

  //! Once they select a character set:
  //! Generate a random character for each selected character set
  //! Either push selected character sets to a mega-array of all selected characters
  //! OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  //! Once character sets are selected, move on to generating random characters

  passwordLength = prompt("How many characters would you like your password to contain? Password must be at least 8 characters, and not longer than 128 characters.");
  passwordLengthParsed = parseInt(passwordLength);

  if (!(passwordLengthParsed >= 8 && passwordLengthParsed <= 128) || !passwordLength) {
    alert("If you would like to generate a password, please click the 'Generate Password' button again and input a number between 8 and 128.")
    return;
  }

  let wantSpecChars = confirm("Do you want your password to contain special characters?");
  chooseCharOptions(wantSpecChars, specialCharacters);

  let wantNumChars = confirm("Do you want your password to contain numbers?");
  chooseCharOptions(wantNumChars, numericCharacters);

  let wantLowerCase = confirm("Do you want your password to contain lower case characters?");
  chooseCharOptions(wantLowerCase, lowerCasedCharacters);


  let wantUpperCase = confirm("Do you want your password to contain upper case characters?");
  chooseCharOptions(wantUpperCase, upperCasedCharacters);

  if (!wantSpecChars && !wantNumChars && !wantLowerCase && !wantUpperCase) {
    getPasswordOptions();
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Need a variable to hold the password as it's being generated
  // Need a variable to hold the index that's being generated

  // For loop that loops the number of times that matches the length the user chose
  // Generate a random number
  // That number is the index for a character in the mega-array
  // So then, mega-array[generated-index] is the actual character
  // Add that character to the password

  // Once we finish the for loop, return the generated password
  let cycles = passwordLengthParsed - passwordChars.length;
  for (i = 0; i < cycles; i++) {
    passwordChars.push(pickRandomElement(arr));
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getRandom(charOptions.flat());

  const shuffledChars = passwordChars
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  generatedPassword = shuffledChars.join('').toString();
  return generatedPassword;
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);