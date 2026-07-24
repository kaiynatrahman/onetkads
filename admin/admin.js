const authKey = "onetkads-admin-auth";
const loginPanel = document.querySelector("#login-panel");
const dashboard = document.querySelector("#dashboard");
const loginForm = document.querySelector("#login-form");
const formMessage = document.querySelector("#form-message");

function showDashboard() {
  if (loginPanel) loginPanel.parentElement.hidden = true;
  if (dashboard) dashboard.hidden = false;
}

if (sessionStorage.getItem(authKey) === "true") showDashboard();

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(loginForm);
  if (data.get("username") === "admin" && data.get("password") === "admin123") {
    sessionStorage.setItem(authKey, "true");
    showDashboard();
  } else {
    formMessage.textContent = "That ID or password doesn't match.";
    loginForm.reset();
    document.querySelector("#username").focus();
  }
});
