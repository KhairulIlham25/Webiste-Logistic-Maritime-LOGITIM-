  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const telepon = document.getElementById('telepon').value;
  const pesan = document.getElementById('pesan').value;

  // Contoh: tampilkan di konsol
  console.log('Nama:', nama);
  console.log('Email:', email);
  console.log('Telepon:', telepon);
  console.log('Pesan:', pesan);

  alert('Pesan berhasil dikirim!');
  this.reset();
});