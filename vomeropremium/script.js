const titleOptions = [
  "Vomero Premium",
  "Vomero Premium",
  "Vomero Premium"
];

const colorOptions = [
  { bg: "#83c10b", img: "sepatu/green.png", name: "green" },
  { bg: "#d75e22", img: "sepatu/orange.png", name: "orange" },
  { bg: "#bd5275", img: "sepatu/pink.png", name: "pink" }
];

let index = 0;

const shoeImg = document.getElementById("shoe-img");
const body = document.body;

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

// semua tombol color
const colorBtns = document.querySelectorAll(".color-btn");

// === Fungsi highlight select color ===
function setActiveColor(name) {
  colorBtns.forEach(btn => {
    if (btn.classList.contains(name)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// === Update warna background + gambar + tombol warna ===
function updateColor() {
  const c = colorOptions[index];
  body.style.background = c.bg;
  shoeImg.src = c.img;

  // 🔥 Ubah tulisan h2 sesuai warna
  document.getElementById("shoe-title").textContent = titleOptions[index];

  setActiveColor(c.name);
}

// ======================
// === WHATSAPP PESAN ===
// ======================

// nomor WA kamu
const waNumber = "628973464572";

// pesan khusus tiap warna (urutannya harus sama dengan colorOptions)
const waMessages = [
  "Halo, saya ingin memesan Vomero Premium warna Hijau.",
  "Halo, saya ingin memesan Vomero Premium warna Oren.",
  "Halo, saya ingin memesan Vomero Premium warna Pink."
];

// === PILIH SIZE ===
const sizeButtons = document.querySelectorAll(".size-list button");

sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {

    // remove highlight sebelumnya
    sizeButtons.forEach(b => b.classList.remove("active-size"));

    // set highlight & simpan size
    btn.classList.add("active-size");
    selectedSize = btn.textContent;
  });
});

// tombol beli
const buyBtn = document.getElementById("buy-btn");

// ketika tombol beli diklik
buyBtn.addEventListener("click", () => {

  if (!selectedSize) {
    alert("Silakan pilih size terlebih dahulu!");
    return;
  }

  const msg = `${waMessages[index]}\nUkuran yang saya pilih : ${selectedSize}`;

  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;

  window.open(url, "_blank");
});


// ► Tombol kanan
rightArrow.addEventListener("click", () => {
  index++;
  if (index >= colorOptions.length) index = 0;
  updateColor();
});

// ◀ Tombol kiri
leftArrow.addEventListener("click", () => {
  index--;
  if (index < 0) index = colorOptions.length - 1;
  updateColor();
});

// ► Klik select color manual
colorBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    index = i;
    updateColor();
  });
});

// Set awal
updateColor();
