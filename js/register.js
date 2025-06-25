document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const form = document.getElementById('registerForm');
  form?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!username || !email || !password || !confirmPassword) {
      alert("Semua field harus diisi!");
      return;
    }

    // Validasi format email
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      alert("Format email tidak valid! Contoh: contoh@gmail.com");
      return;
    }

    // Validasi password
    const passwordValid = password.length >= 8 && /[^A-Za-z0-9]/.test(password);
    if (!passwordValid) {
      alert("Password harus minimal 8 karakter dan mengandung simbol (contoh: !@#$%^&*)");
      return;
    }

    // Konfirmasi password
    if (password !== confirmPassword) {
      alert("Konfirmasi password tidak cocok!");
      return;
    }

    const userData = {
      username,
      email,
      password
    };

    localStorage.setItem('registeredUser', JSON.stringify(userData));
    alert("Registrasi berhasil! Silakan login.");
    window.location.href = "login.html";
  });
});
