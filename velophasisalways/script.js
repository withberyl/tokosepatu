// ==========================
//   DATA PRODUK & WARNA
// ==========================
const titleOptions = [
  "Sneaker Velophasis Always On",
  "Sneaker Velophasis Always On",
];

const colorOptions = [
  { bg: "#ffffffff", img: "sepatu/silver.png", name: "red" },
  { bg: "#ffffffff", img: "sepatu/silvernew.png", name: "blue" },
];

let index = 0;


// ==========================
//       ELEMENT HTML
// ==========================
const shoeImg = document.getElementById("shoe-img");
const body = document.body;

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

const leftArrowImg = document.querySelector(".left-arrow img");
const rightArrowImg = document.querySelector(".right-arrow img");

const colorBtns = document.querySelectorAll(".color-btn");

// =============================
//      PILIH SIZE SEPATU
// =============================
let selectedSize = null;
const sizeButtons = document.querySelectorAll(".size-list button");

sizeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    selectedSize = btn.textContent;

    sizeButtons.forEach(b => b.classList.remove("active-size"));

    btn.classList.add("active-size");
  });
});




// ==========================
//    HIGHLIGHT TOMBOL WARNA
// ==========================
function setActiveColor(name) {
  colorBtns.forEach(btn => {
    if (btn.classList.contains(name)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}


// =============================
//  CEK APAKAH WARNA TERANG
// =============================
function isLight(hex) {
  let c = hex.replace("#", "");

  // buang alpha (#ffffffff → ffffff)
  if (c.length === 8) c = c.substring(0, 6);

  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b);

  return luminance > 180; // warna terang
}


// =============================
//     GANTI GAMBAR PANAH
// =============================
function updateArrowIcons(isWhiteMode) {
  if (isWhiteMode) {
    leftArrowImg.src = "panah/kiri.svg";
    rightArrowImg.src = "panah/kanan.svg";
  } else {
    leftArrowImg.src = "panah/kiri.png";
    rightArrowImg.src = "panah/kanan.png";
  }
}


// =============================
//      UPDATE WARNA HALAMAN
// =============================
function updateColor() {
  const c = colorOptions[index];

  // ubah background
  body.style.background = c.bg;

  // ubah gambar sepatu
  shoeImg.src = c.img;

  // ubah judul sepatu
  document.getElementById("shoe-title").textContent = titleOptions[index];

  // highlight warna yang dipilih
  setActiveColor(c.name);

  // cek apakah warna terang
  const whiteMode = isLight(c.bg);

  // aktifkan mode putih
  if (whiteMode) {
    body.classList.add("white-mode");
  } else {
    body.classList.remove("white-mode");
  }

  // ganti icon panah
  updateArrowIcons(whiteMode);
}



// =============================
//        WHATSAPP PESAN
// =============================
const waNumber = "628973464572";

const waMessages = [
  "Halo, saya ingin memesan Sneaker Velophasis Always On warna Silver.",
  "Halo, saya ingin memesan Sneaker Velophasis Always On warna  Silver-New Navy."
];

const buyBtn = document.getElementById("buy-btn");

buyBtn.addEventListener("click", () => {
  if (!selectedSize) {
    alert("Silakan pilih size terlebih dahulu!");
    return;
  }

  const msg = `${waMessages[index]}\nUkuran yang saya pilih : ${selectedSize}`;

  const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});




// =============================
//      FITUR TOMBOL PANAH
// =============================
rightArrow.addEventListener("click", () => {
  index++;
  if (index >= colorOptions.length) index = 0;
  updateColor();
});

leftArrow.addEventListener("click", () => {
  index--;
  if (index < 0) index = colorOptions.length - 1;
  updateColor();
});



// =============================
//   PILIH WARNA (COLOR BUTTON)
// =============================
colorBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    index = i;
    updateColor();
  });
});



// =============================
//       SET WARNA AWAL
// =============================
updateColor();
