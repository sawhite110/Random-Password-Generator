// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


function generatePassword() {
  // This propmpts the user how long do you want the password to be.
  var passwordLength = window.prompt("Please enter an number between 8 and 128! How many characters would you like for your password?");//#1
  
  // If user pressed Cancel, immediately end the function!
  if (!passwordLength) {//This gives a bolean false
  return;
  }
  
  //If user enters in a number less than 8, they get an alert and ends the program.
  if (passwordLength === 7 || passwordLength <= 7) {
    window.alert("Your password is too short! Please choose again.")//#2
    return;//The program will end the function.
  } else if (passwordLength >= 128) {
    window.alert("Your password is too long! please choose again.")
    return;
  }
  

  //This will ask the user to confirm their special character choice.
  var firstChoice = window.confirm("Click OK to confirm using special characters.");//#3
    
  //This will ask the user to confirm their numeric character choice.
  var secondChoice = window.confirm("Click OK to confirm using numeric characters.");//#4
    
  //This will ask the user to confirm their lowercase character choice.
  var thirdChoice = window.confirm("Click OK to confirm using lowercase characters.");//#5

  //This will ask the user to confirm their uppercase character choice.
  var lastChoice = window.confirm("Click OK to confirm using uppercase characters.");//#6

  //This function is to set up the random numner for special characters.
  function randomSpeci() {
    const randomNum = Math.floor(Math.random() * specialChar.length)
    return specialChar[randomNum]
  }

   //This function is to set up the random numners.
  function randomNum() {
    return Math.floor(Math.random() * 10);
  }

   //This function is to set up the random numner for lowercase characters.
  function randomLower() {
    const randomChar = Math.floor(Math.random() * 26 + 1);
    return lowerCase[randomChar]
  }

   //This function is to set up the random numner for uppercase characters.
  function randomUpper() {
    const randomChar = Math.floor(Math.random() * 26 + 1);
    return upperCase[randomChar]
  }

   //This will set up the array for the functions.
  const fnArray = [randomSpeci, randomNum, randomLower, randomUpper]
  var password = [];

  //This if statement will take the first choice only.
  if (firstChoice && !secondChoice && !thirdChoice && !lastChoice) {
    console.log('first');
    const fnArray = [randomSpeci]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 1);
      console.log(randomNum);
      password.push(fnArray[randomNum]());
    }
  }

  //This if statement will take the second choice only.
  if (!firstChoice && secondChoice && !thirdChoice && !lastChoice) {
    console.log('second');
    const fnArray = [randomNum]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 1)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }    
  }

  //This if statement will take the third choice only.
  if (!firstChoice && !secondChoice && thirdChoice && !lastChoice) {
    console.log('third');
    const fnArray = [randomLower]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 1)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }    
  }

  //This if statement will take the last choice only.
  if (!firstChoice && !secondChoice && !thirdChoice && lastChoice) {
    console.log('last');
    const fnArray = [randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 1)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }    
  }

  //This if statement will take the first & second choices only.
  if (firstChoice && secondChoice && !thirdChoice && !lastChoice) {
    const fnArray = [randomSpeci, randomNum]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 2)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }    
  }

  //This if statement will take the first & third choices only.
  if (firstChoice && !secondChoice && thirdChoice && !lastChoice) {
    const fnArray = [randomSpeci,randomLower]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 2)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the first & last choices only.
  if (firstChoice && !secondChoice && !thirdChoice && lastChoice) {
    const fnArray = [randomSpeci, randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 2)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the second & third choices only.
  if (!firstChoice && secondChoice && thirdChoice && !lastChoice) {
    const fnArray = [randomNum, randomLower]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 2)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the second & last choices only.
  if (!firstChoice && secondChoice && !thirdChoice && lastChoice) {
    const fnArray = [randomNum, randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 2)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the third & last choices only.
  if (!firstChoice && !secondChoice && thirdChoice && lastChoice) {
    const fnArray = [randomLower, randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 2)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the first 3 choices only.
  if (firstChoice && secondChoice && thirdChoice && !lastChoice) {
    const fnArray = [randomSpeci, randomNum, randomLower]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 3)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the first, second, & last choices only.
  if (firstChoice && secondChoice && !thirdChoice && lastChoice) {
    const fnArray = [randomSpeci, randomNum,randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 3)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the first, third, & last choices only.
  if (firstChoice && !secondChoice && thirdChoice && lastChoice) {
    const fnArray = [randomSpeci,randomLower, randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 3)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take the second, third, & last choices only.
  if (!firstChoice && secondChoice && thirdChoice && lastChoice) {
    const fnArray = [randomNum, randomLower, randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 3)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }

  //This if statement will take a 4 choices only.
  if (firstChoice && secondChoice && thirdChoice && lastChoice) {
    const fnArray = [randomSpeci, randomNum, randomLower, randomUpper]
    for (let i = 0; i < passwordLength; i++) {
      const randomNum = Math.floor(Math.random() * 4)
      console.log(randomNum)
      password.push(fnArray[randomNum]())
    }
  }
  
  return password.join("");
}


//This displays the password
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //This will display the generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);