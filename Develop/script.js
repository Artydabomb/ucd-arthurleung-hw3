// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt('How many characters?'));
  console.log(typeof pwlength);
  console.log();

  /* First code: deny user if less than 8 characters or more than 128 characters*/

  if (pwlength < 8 || pwlength > 128) {
    alert("Invalid number of characters! Please choose a passwork character length between 8 and 128.");
    return generatePassword();
  } else {
    console.log(pwlength);
  }

  /* First criteria (confirm box): "Do you want to have lower case characters?" */
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")`
  /* Have to define what a lower case character is (consider doing an array that contains characters with all lower case letters) */

  var pwdlower = confirm('Do you want to have lower case characters?');

  if (pwdlower === true) {
    console.log("true");
  }
  else {
    console.log("false");
  }

  lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  /* Second criteria (confirm box): "Do you want to have upper case characters?" */
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")
  /* Have to define what a an upper case character is (consider doing an array that contains characters with all upper case letters) */

  var pwdupper = confirm('Do you want to have upper case characters?');

  if (pwdupper === true) {
    console.log("true");
  }
  else {
    console.log("false");
  }

  uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  /* Third criteria (confirm box): "Do you want to have special case characters?" */
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")*/
  /* Have to define what a special case character is (consider doing an array that contains characters with all special case characters; do not have to refer to the link provided in the Readme.md) */

  var pwdspecial = confirm('Do you want to have special characters?');

  if (pwdspecial === true) {
    console.log("true");
  }
  else {
    console.log("false");
  }

  special = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "["];

  /* Fourth criteria (confirm box): "Do you want to have numeric case characters?"*/
  /* Must store the user response ("Ok" or "Cancel") into a variable (make it "true" or "false")*/
  /* Have to define what a numeric character is (consider doing an array that contains characters with all numeric case characters (e.g. 0-9) )*/

  var pwdnumerical = confirm('Do you want to have special characters?');

  if (pwdnumerical === true) {
    console.log("true");
  }
  else {
    console.log("false");
  }

  numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  /* Write for loop here for pw length to generate the random characters one by one (anything from 8-128) */

  console.log(Math.floor(Math.random(lowercase[i]) * 25));

  /*
  console.log(Math.floor(Math.random(uppercase[i]) * 25));
  console.log(Math.floor(Math.random(special[i]) * 22));
  console.log(Math.floor(Math.random(numerical[i]) * 9));
  */


}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
