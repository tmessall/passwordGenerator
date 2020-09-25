// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    document.getElementById("password").innerHTML = password;
}

// All possible characters in the password
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "@", "#", "$", "5", "^", "&", "*"];

// To compile the characters we want in the password (reset each use)
var possibleChars = []

// The password itself (reset each use)
var password = "";

// Generate the password
function generatePassword() {
    // Resets characters, password, and length so multiple passwords can be generated without reloading the page
    possibleChars = [];
    password = "";
    var length = getLength();

    // This var and the while loop create a check to make sure the user selects at least one character type
    var noChars = true;
    while (noChars) {
        checkCharType("lowercase", letters);
        checkCharType("uppercase", letters);
        checkCharType("numeric", numbers);
        checkCharType("special", special);
        if (possibleChars.length > 0) {
            noChars = false;
        } else {
            alert("Oops! It looks like you didn't select any character types. Try again, and make sure to select at least one!");
        }
        
    }

    // Generates the remainder of the password beyond the start
    for (var i = password.length; i < length; i++) {
        var selector = Math.floor(Math.random() * possibleChars.length);
        password += possibleChars[selector];
    }

    return password;
}

function getLength() {
    // This loop creates a check to ensure that the length input is valid
    while (true) {
        var length = prompt("How long do you want your password to be?\n(Between 8 and 128 characters)");
        if (length >= 8 && length <= 128) {
            return parseInt(length)
        }
        alert("Make sure to type a number between 8 and 128 to get a valid length!")
    }
}

function checkCharType(typeStr, typeArr) {
    var wants = confirm(`Do you want ${typeStr} characters in your password?`);
    if (wants) {
        // This check allows it to only need one letter array
        if (typeStr === "uppercase") {
            for (var i = 0; i < typeArr.length; i++) {
                possibleChars.push(typeArr[i].toUpperCase());
            }
            // Adds a random char of defined type to the start of the password to ensure there's at least one
            password += typeArr[Math.floor(Math.random() * typeArr.length)].toUpperCase();
        } else {
            for (var i = 0; i < typeArr.length; i++) {
                possibleChars.push(typeArr[i]);
            }
            // Adds a random char of defined type to the start of the password to ensure there's at least one
            password += typeArr[Math.floor(Math.random() * typeArr.length)];
        }
        alert(`Great, adding ${typeStr} characters to your password!`);
    } else {
        alert(`Alright, there won't be any ${typeStr} characters in your password.`);
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
