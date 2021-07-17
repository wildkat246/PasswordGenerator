// Assignment Code
var generateBtn = document.querySelector("#generate");


///Variable for creating password
  var uppercasechar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowercasechar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var numeric = ['1','2','3','4','5','6','7','8','9','0']
  var specialcharacters = ['~','!','@','#','$','%','^','&','*','(',')','_','-','=','+','{','}','<','>','?']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  //Create empty array to store possible characters 
  var possibleCharacters = [];
  var createpassword = [];

  var wantuppercase = confirm("Cliek ok if you want upper case");
  var wantlowercase = confirm("Cliek ok if you want lower case");
  var wantnumeric = confirm("Click ok if you want numbers");
  var wantspecial = confirm("Click ok if you want special characters");
  var passwordlength = prompt("How many characters do you want");
  console.log(passwordlength);
  
  if (wantuppercase === true ) {
    possibleCharacters.push(uppercasechar);
    console.log(possibleCharacters);
  }
  
  if (wantlowercase === true) {
    possibleCharacters.push(lowercasechar);
    console.log(possibleCharacters);
  }

  if (wantnumeric === true) {
    possibleCharacters.push(wantnumeric);
    console.log(possibleCharacters);
  }

  if (wantspecial === true) {
    possibleCharacters.push(wantspecial)
    console.log(possibleCharacters);
  }

///Loop over possible character as many time and the password length and then randomly grab info
  for (var i=0; i < passwordlength; i++) {
    console.log("uppercasechar + lowercasechar + numeric + specialcharacters");
   
    //Grab a random element from the possible character array and push into create passowrd empty array 
  }

  return createpassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var generatePassword = function(){
  // var index = Math.floor(Math.random(uppercasechar + lowercasechar + numeric + specialcharacters) * Option.length); 
  // console.log(Math.random().toString())};