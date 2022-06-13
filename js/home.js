// -------- element start -------- //
var sayHello = document.getElementById("sayHello");
var logOutBtn = document.getElementById("logOutBtn");
// -------- element end -------- //
// -------- all variable start -------- //
var logInPage =
   location.href.slice(0, location.href.lastIndexOf("/")) + "/index.html";
// -------- all variable end -------- //
// -------- events start -------- //
logOutBtn.addEventListener("click", logOut);
// -------- events end -------- //
// --- when start
(function () {
   sayHello.innerHTML = `Welcome ${localStorage.getItem("session")}`;
})();
// -------- function start -------- //
function logOut() {
   localStorage.removeItem("session");
   location.replace(logInPage);
}
// -------- function end -------- //