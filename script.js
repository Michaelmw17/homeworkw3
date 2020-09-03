var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#onCopyPressed");

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_|}{[]:;?><,./-=+~`";
const pwLength = " ";

// Writing password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  copyBtn.disable = false;
}

function onCopyPressed() {
  var passwordText = document.querySelector("#password");
  var passwordValue = passwordText.value;
  console.log("Password in textbox " + passwordValue);

  navigator.clipboard.writeText(passwordValue).then(
    function () {
      console.log("Async : copying to clipboard was successful!");
    },
    function (err) {
      console.error("async: Could not copy text: ", err);
    }
  );
}

function generatePassword() {
  userPassword = " ";
  passwordCharacters = " ";

  // Asking user the length of password
  let pwLength = prompt(
    "Please select the length of your password. (Between 8 - 128 characters)"
  );

  // Checking if password between 8 and 128 character's
  if (pwLength >= 8 && pwLength <= 128) {
    password.length = pwLength;

    //does user want lowercase/uppercase letters numbers/special characters
    var isLowercase = confirm("Include lowercase letters in password?");
    var isUppercase = confirm("Include uppercase letters in password?");
    var isNumbers = confirm("Include numbers in password?");
    var hasSpecialChars = confirm("Include special characters in password?");
  } else {
    alert("Please select a password between 8 - 128 characters");
  }

  // Conditional Statements
  if (isLowercase) {
    passwordCharacters += lowercase;
  }
  if (isUppercase) {
    passwordCharacters += uppercase;
  }
  if (isNumbers) {
    passwordCharacters += numbers;
  }
  if (hasSpecialChars) {
    passwordCharacters += specialCharacters;
  } else {
    alert("Error! Cannot generate a password!");
  }
  for (var i = 0; i < pwLength; i++) {
    userPassword +=
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }

  console.log(userPassword);
  return userPassword;
}
console.log(copyBtn);
// event listener for generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", onCopyPressed);
