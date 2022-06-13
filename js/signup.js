// -------- element start -------- //
var nameInputSignUp = document.getElementById("nameInput");
var emailInputSignUp = document.getElementById("emailInput");
var passwordInputSignUp = document.getElementById("passwordInput");
var signUpBtn = document.getElementById("signUpBtn");
var incorrect = document.getElementById("incorrect");
var inputs = document.querySelectorAll("input");
var showPassword = document.getElementById("showPassword");
// -------- element end -------- //
// -------- all variable start -------- //
var usersData = [];
// -------- all variable end -------- //
// --- when start
(function () {
   if (getstorage() != null) {
      usersData = getstorage();
   }
})();
// -------- events start -------- //
// --- sign up button
signUpBtn.addEventListener("click", function () {
   if (validation()) {
      if (emailExits()) {
         getDataSignUp();
         resetData();
         incorrect.innerHTML = '<span class="text-success ">Success</span>';
      }
   } else {
      incorrect.innerHTML =
         '<span class="text-danger">All inputs is required</span>';
   }
});
// --- show password button
showPassword.addEventListener("click", visaplityPass);
// -------- events end -------- //
// -------- function start -------- //
// --- get Data SignUp
function getDataSignUp() {
   var userData = {
      name: nameInputSignUp.value,
      email: emailInputSignUp.value,
      pass: passwordInputSignUp.value,
   };
   usersData.push(userData);
   setStorage();
}
// --- reset data
function resetData() {
   for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
   }
}
// --- set storge
function setStorage() {
   localStorage.setItem("usersData", JSON.stringify(usersData));
}
// --- get storage
function getstorage() {
   return JSON.parse(localStorage.getItem("usersData"));
}
// --- validation
function validation() {
   var regexName = /^\w+[\w\s]+$/,
      regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      regexPassword = /^.{3,20}$/;
   if (
      regexName.test(nameInput.value) &&
      regexEmail.test(emailInputSignUp.value) &&
      regexPassword.test(passwordInputSignUp.value)
   ) {
      return true;
   } else {
      return false;
   }
}
// --- email exists
function emailExits() {
   var check = true;
   for (var i = 0; i < usersData.length; i++) {
      if (emailInputSignUp.value == usersData[i].email) {
         incorrect.innerHTML =
            '<span class="text-danger ">email already exists</span>';
         check = false;
         break;
      } else {
         check = true;
      }
   }
   return check;
}
// --- show Password
function visaplityPass() {
   if (passwordInputSignUp.type == "password") {
      passwordInputSignUp.type = "text";
      showPassword.classList.replace("fa-eye", "fa-eye-slash");
   } else {
      passwordInputSignUp.type = "password";
      showPassword.classList.replace("fa-eye-slash", "fa-eye");
   }
}
// -------- function end -------- //
