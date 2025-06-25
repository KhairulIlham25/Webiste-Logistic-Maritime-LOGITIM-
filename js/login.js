document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (!username || !password || !confirmPassword) {
    alert("Semua field harus diisi!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Password dan konfirmasi password tidak cocok!");
    return;
  }

  const passwordValid = password.length >= 8 && /[^A-Za-z0-9]/.test(password);
  if (!passwordValid) {
    alert("Password tidak sesuai format: minimal 8 karakter dan harus mengandung simbol.");
    return;
  }

  const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

  if (storedUser && username === storedUser.username && password === storedUser.password) {
    const akun = {
      username: storedUser.username,
      nama: "Andi Prasetya",
      email: storedUser.email,
    };

    localStorage.setItem("userLogin", JSON.stringify(akun));
    localStorage.setItem("isLoggedIn", "true");

    // redirect ke profil
    window.location.href = "profil.html";
  } else {
    alert("Username atau password salah!");
  }
});
