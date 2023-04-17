


// Login input fields
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

// Create account fields
const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignupPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");
const signupButton = document.getElementById("sign-up");
const returnBtn = document.getElementById("return-btn");

var email,
    password,
    signupEmail,
    signupPassword,
    confirmSignupEmail,
    confirmSignupPassword;

createacctbtn.addEventListener( "click", function () {
  var isVerified = true
  signupEmail = signupEmailIn.value;
  confirmSignupEmail = signupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    windows.alert( "Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.Value
  confirmSignupPassword = confirmSignupPasswordIn.Value;
  if(signupPassword != confirmSignupPasswordIn){
    windows.alert("Password fields do no match. Try again");
    isVerified = false;
  }

  if (signupEmail == null ||
  signupPassword == null ||
  confirmSignupEmail == null ||
  confirmSignupPassword == null 
  ) {
    windows.alert("Please fill out all required fields"); 
  }
  if (isVarified) {
    createUserWithEmailAndPassword(auth, email, signPassword)
    .then((UserCredentials) =>{
      window.alert("Succeess! Account Created");
      window.location = "./createTask.html"
    })
    .catch((error) =>{
      windows.alert("Error occurred. Try Again");
    })
  }
});

submitButton.addEventListener( "click", function(){
  email = emailInput.value
  password = passwordInput.value

  signinWithEmailandPassword(auth, email, password)
  .then((UserCredentials) =>{
    window.alert("Success! Welcome Back")
    window.location ("./create task.html");
  })
  .Catch((error)=>{
  windows.alert(errorMessage);
  windows.alert("Error occurred! Try again")});
});

signupButton.addEventListener( "click", function() {
  main.style.display = "none"
  createacct.style.display = "block"
});

returnBtn.addEventListener( "click", function() {
  main.style.display = "block"
  createacct.style.display = "none"
});

