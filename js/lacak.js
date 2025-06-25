  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Anda harus login terlebih dahulu.");
  window.location.href = "login.html";
}

// Cek login saat halaman dimuat
window.onload = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  if (isLoggedIn !== "true") {
    alert("Anda harus login terlebih dahulu.");
    window.location.href = "login.html";
  }
};

// Fungsi pelacakan dummy
function track() {
  const resi = document.getElementById("resi").value;
  if (resi.trim() === "") {
    alert("Masukkan nomor resi terlebih dahulu!");
    return;
  }

  // Tampilkan informasi tracking (dummy data)
  document.getElementById("tracking-info").style.display = "block";
  document.getElementById("tracking-info").scrollIntoView({ behavior: "smooth" });
}

// Fungsi Google Maps
function initMap() {
  const indonesiaCenter = { lat: -2.5489, lng: 118.0149 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: indonesiaCenter,
  });

  new google.maps.Marker({
    position: indonesiaCenter,
    map,
    title: "Indonesia",
  });
}