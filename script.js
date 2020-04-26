// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  // prompting for password length 
  let p_len = 0;
  while(!p_len || p_len <8 || p_len>128 ){
      p_len= parseInt(prompt("password length, number between 8 and 128","8"))
  }

  // prompting for character set
  const lc_char = "abcdefghijklmnopqrstuvwxyz";
  const up_char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nm_char = "1234567890";
  const sp_char = "!£$%^&*()_-=+{}.,/";
  let x ="";
  if(confirm("add lowercase characters?")){
    x += lc_char;
  }
  if(confirm("add uppercase characters?")){
    x += up_char;
  }
  if(confirm("add numerical characters?")){
    x += nm_char;
  }
  if(confirm("add special characters?")){
    x += sp_char;
  }

  // Generating the password
  let password='';
  for( var i = 0; i<p_len; i++){
    var c = Math.floor((Math.random()*x.length)+1);
    password+= x.charAt(c);
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
