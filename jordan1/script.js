const titleOptions = [
  "JORDAN 1 RED",
  "JORDAN 1 BLUE",
  "JORDAN 1 GOLD",
  "JORDAN 1 PURPLE"
];

const colorOptions = [
  { bg: "#d80000", img: "sepatu/red.png", name: "red" },
  { bg: "#0057ff", img: "sepatu/blue.png", name: "blue" },
  { bg: "#e9c649ff", img: "sepatu/gold.png", name: "gold" },
  { bg: "#7103fb", img: "sepatu/purple.png", name: "purple" }
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
  "Halo, saya ingin memesan JORDAN 1 warna Merah.",
  "Halo, saya ingin memesan JORDAN 1 warna Biru.",
  "Halo, saya ingin memesan JORDAN 1 warna Emas.",
  "Halo, saya ingin memesan JORDAN 1 warna Ungu."
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
