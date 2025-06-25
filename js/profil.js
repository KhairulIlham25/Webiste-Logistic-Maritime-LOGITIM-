   document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('active');
      });

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Edit Profil
  const editBtn = document.getElementById("editButton");
  const saveBtn = document.getElementById("saveButton");
  const editForm = document.querySelector(".edit-profil-form");

  if (editBtn && saveBtn && editForm) {
    const inputs = editForm.querySelectorAll("input");

    // Nonaktifkan semua input di awal
    inputs.forEach(input => input.disabled = true);
    saveBtn.disabled = true;

    // Aktifkan mode edit saat tombol edit ditekan
    editBtn.addEventListener("click", () => {
      inputs.forEach(input => input.disabled = false);
      saveBtn.disabled = false;
    });

    // Simpan data dan nonaktifkan kembali input setelah submit
    editForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Data profil berhasil disimpan!");
      inputs.forEach(input => input.disabled = true);
      saveBtn.disabled = true;
    });
  }

function enableEdit() {
  document.querySelectorAll('.profile-input').forEach(input => {
    input.removeAttribute('readonly');
  });
  document.getElementById('edit-actions').style.display = 'block';
  document.getElementById('foto').style.display = 'block'; // Tampilkan input file
}

function cancelEdit() {
  const userData = JSON.parse(localStorage.getItem("userLogin"));

  document.getElementById('nama').value = userData.nama;
  document.getElementById('email').value = userData.email;
  document.getElementById('telepon').value = userData.telepon;
  document.getElementById('alamat').value = userData.alamat;
  document.getElementById('previewFoto').src = userData.foto;

   document.querySelectorAll('.profile-input').forEach(input => {
    input.setAttribute('readonly', true);
  });
  document.getElementById('edit-actions').style.display = 'none';
  document.getElementById('foto').style.display = 'none'; // Sembunyikan input file
}

function saveProfile() {
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const telepon = document.getElementById('telepon').value;
  const alamat = document.getElementById('alamat').value;
  const fotoSrc = document.getElementById('previewFoto').src;

  const updatedData = {
    username: JSON.parse(localStorage.getItem("userLogin")).username,
    nama,
    email,
    telepon,
    alamat,
    foto: fotoSrc
  };

  localStorage.setItem("userLogin", JSON.stringify(updatedData));

  document.querySelector(".namanya").textContent = nama;
  document.querySelector(".username").textContent = "@" + updatedData.username;

   document.querySelectorAll('.profile-input').forEach(input => {
    input.setAttribute('readonly', true);
  });
  document.getElementById('edit-actions').style.display = 'none';
  document.getElementById('foto').style.display = 'none'; // Sembunyikan input file
  alert('Profil berhasil diperbarui!');
}

document.addEventListener("DOMContentLoaded", () => {
  const userData = JSON.parse(localStorage.getItem("userLogin"));

  if (!userData) {
    alert("Anda harus login terlebih dahulu.");
    window.location.href = "login.html";
    return;
  }

  document.querySelector(".namanya").textContent = userData.nama;
  document.querySelector(".username").textContent = "@" + userData.username;
  document.getElementById("nama").value = userData.nama;
  document.getElementById("email").value = userData.email;
  document.getElementById("telepon").value = userData.telepon;
  document.getElementById("alamat").value = userData.alamat;
  document.getElementById("previewFoto").src = userData.foto;
});

const fotoInput = document.getElementById("foto");

fotoInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("previewFoto").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

function previewFoto(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('previewFoto').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Fungsi logout
function logout() {
  localStorage.removeItem("userLogin");
  window.location.href = "login.html";
}
  // Cek apakah sudah login
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    alert("Silakan login terlebih dahulu.");
    window.location.href = "login.html"; // Arahkan kembali ke halaman login
  }