

console.log("Welcome to the Password Validator Tool, enter if you Dare!!!")

let palmersupersecretpassword = "Ilovemymomsomuch"
let readline = require ("readline");
let reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please type in your password!: ", function(answer){
  console.log("Password input " + answer);
  if (answer.length == ""){
    console.log("You did not enter a password Scum!")
} else if (answer == "passwordssss"){
    console.log("You Suck! Go home to the pile of dirt you came from")
  } else if (answer === palmersupersecretpassword){
    console.log("You Suck! No One Can Steal Lord Palmer's Password!")
  }  else if(answer.length >= 10){
    console.log("enter")
} else {
    console.log("access denied")}
});


// reader.question("Please type in your password!: ", function(answer){
//   console.log("Password input " + answer);
//   return answer.charAt(1)
//   if( return = "a" ){
//     console.log("No 'As' allowed")
//   }
  

// });