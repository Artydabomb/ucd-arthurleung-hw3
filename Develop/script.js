// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt('How many chars?'));
  console.log(typeof pwlength);
  console.log();
  return pwlength;
  /* First code: deny user if less than 8 characters or more than 128 characters*/

  /* First criteria (confirm box): "Do you want to have lower case characters?" */
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")`
  /* Have to define what a lower case character is (consider doing an array that contains characters with all lower case letters) */


  /* Second criteria (confirm box): "Do you want to have upper case characters?" */
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")
  /* Have to define what a an upper case character is (consider doing an array that contains characters with all upper case letters) */


  /* Third criteria (confirm box): "Do you want to have special case characters?" */
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")*/
  /* Have to define what a special case character is (consider doing an array that contains characters with all special case characters; do not have to refer to the link provided in the Readme.md) */


  /* Fourth criteria (confirm box): "Do you want to have numeric case characters?"*/
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")*/
  /* Have to define what a numeric character is (consider doing an array that contains characters with all numeric case characters (e.g. 0-9) )*/

  /* Write for loop here for pw length to generate the random characters one by one (anything from 8-128) */
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
