// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// All possible characters in the password
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChars = ["!", "@", "#", "$", "5", "^", "&", "*"];

// To compile the characters we want in the password
var possibleChars = []

// Generate the password
function generatePassword() {
    possibleChars = [];
    var password = "";
    var length = getLength();
    checkLowerCase();
    checkUpperCase();
    checkNumbers();
    checkSpecial();
    for (var i = 0; i < possibleChars.length; i++) {
        console.log(possibleChars[i]);
    }
    for (var i = 0; i < length; i++) {
        var selector = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[selector];
    }
    console.log(password);
    
}

function getLength() {
    var length = prompt("How long do you want your password to be?\n(Between 8 and 128 characters");
    return parseInt(length);
}

function checkLowerCase() {
    var wants = confirm("Do you want lower case letters in your password?");
    if (wants) {
        for (var i = 0; i < letters.length; i++) {
            possibleChars.push(letters[i]);
        }
        alert("Great, adding lower case letters to your password!");
    } else {
        alert("Alright, there won't be any lower case letters in your password.")
    }
}

function checkUpperCase() {
    var wants = confirm("Do you want upper case letters in your password?");
    if (wants) {
        for (var i = 0; i < letters.length; i++) {
            possibleChars.push(letters[i].toUpperCase());
        }
        alert("Great, adding upper case letters to your password!");
    } else {
        alert("Alright, there won't be any upper case letters in your password.")
    }
}

function checkNumbers() {
    var wants = confirm("Do you want numbers in your password?");
    if (wants) {
        for (var i = 0; i < numbers.length; i++) {
            possibleChars.push(numbers[i]);
        }
        alert("Great, adding numbers to your password!");
    } else {
        alert("Alright, there won't be any numbers in your password.")
    }
}

function checkSpecial() {
    var wants = confirm("Do you want special characters in your password?");
    if (wants) {
        for (var i = 0; i < specialChars.length; i++) {
            possibleChars.push(specialChars[i]);
        }
        alert("Great, adding special characters to your password!");
    } else {
        alert("Alright, there won't be any special characters in your password.")
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
