document.getElementById('logoutBtn').addEventListener('click', function(e) {
  e.preventDefault();
  localStorage.removeItem("isLoggedIn");
  window.location.href = "homepage.html";
});
