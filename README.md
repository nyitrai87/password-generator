# Random Password Generator

## Description
This project is a random password generator that creates a password, based on the criteria provided by the User. Generated password can be 8 to 128 characters long, and the User can decide how many characters should the password consist of. They can also determine what type of characters should be involved. Password can contain special characters, numeric characters, lower case and upper case letters and the generated password will be written to the screen, ready to copy and paste it.

## How to use
1. Click on the "Generate Password" button.
2. Input a number between 8 and 128 to determine the length of the password
    - If the number is out of the above range, not a number, or the User clicks on the "Cancel" button, an alert pops up and then the application stops when the "OK" button is clicked.
3. Four further questions will pop up to determine what ty of characters would you like to use.
    - If you click on the "OK", the character type will be used, if you click on "Cancel" the character type will not be used.
    - If none of the charater types were chosen, the application starts over and jumps back to the question mentioned in section 2.
4. If at least one character type was chosen, the password will be generated and written to the screen.
5. If you would like to generate another password, please reload the page before clicking the "Generate Password" button again.

## Screenshots
![Screenshot of the deployed application](/images/screenshot1.png)

![Screenshot of the deployed application in use](/images/screenshot2.png)

## Links
[Link to the deployed application](https://nyitrai87.github.io/password-generator/)

## Sources
To shuffle the content of the array, I have used the solution provided by superluminary on Stackoverflow: [How to randomize (shuffle) a JavaScript array? - Stackoverflow topic](https://stackoverflow.com/a/46545530)