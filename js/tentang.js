  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
  const testimonials = [
  {
    text: "“Sejak menggunakan jasa Logitim, pengiriman produk ke pelanggan jadi jauh lebih lancar. Barang selalu sampai tepat waktu dan dalam kondisi baik. Layanan pelacakan mereka juga sangat membantu saya memantau setiap pengiriman. Terima kasih Logitim, sangat bisa diandalkan!”",
    name: "Raiden Ei",
    role: "Pemilik Toko Online “RaidenCraft”",
    image: "img/testimoni1.jpg"
  },
  {
    text: "“Logitim telah menjadi partner logistik utama kami selama 6 bulan terakhir, dan hasilnya sangat memuaskan. Distribusi ke berbagai cabang menjadi lebih efisien dan tidak pernah ada keterlambatan signifikan. Dukungan tim mereka juga cepat dan profesional.”",
    name: "ZhongLi",
    role: "Kepala Gudang PT.Sinar Makmur”",
    image: "img/testimoni2.jpg"
  },
  {
    text: "“Saya baru pertama kali coba jasa Logitim, dan benar-benar puas. Proses pemesanan mudah, CS-nya ramah, dan pengiriman super cepat. Cocok banget buat pelaku UMKM seperti saya!”",
    name: "Mavuika",
    role: "Pengusaha UMKM Makanan Ringan”",
    image: "img/testimoni3.jpg"
  }
];

let current = 0;

function showTestimonial(index) {
  const testimonial = testimonials[index];
  document.querySelector(".testimonial-text").textContent = testimonial.text;
  document.querySelector(".testimonial-profile img").src = testimonial.image;
  document.querySelector(".profile-info").innerHTML =
    `<strong>${testimonial.name}</strong><br><em>${testimonial.role}</em>`;
}

function nextTestimonial() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}

function prevTestimonial() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
}