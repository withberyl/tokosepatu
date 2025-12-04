const productSection = document.getElementById('product-section');

// data produk
const products = {
  nike: [
     { 
      name: "Nike Air Force 1 '07", 
      price: 1549000,
      discount: 30,
      img: "sepatu/NikeAirForce.png", 
      link: 'AirForce1/desain.html' 
    },
    { name: "Jordan 1 High", price: "3.000.000", img: "sepatu/Jordan.png", link: 'jordan1/desain.html' },
    { name: "Nike Vomero Premium", price: "3.399.000", img: "sepatu/NikeVomeroPremium.png", link: 'vomeropremium/desain.html' },
  ],
  puma: [
    { name: "Velophasis Always On", price: "Rp. 1.899.000", img: "sepatu/SneakerVelophasis.png", link: 'velophasisalways/desain.html' },
    { name: "Deviate NITRO™ 3", price: "Rp. 2.399.000", img: "sepatu/DeviateNITRO.png", link: 'deviate/desain.html' }
  ],
  adidas: [
    { name: "Sepatu Anthony Edwards 2", price: "Rp. 2.000.000", img: "sepatu/ANTHONYEDWARDS.png", link: '' },
    { name: "Superskate X Kader Shoes", price: "Rp. 1.700.000", img: "sepatu/SUPERSKATE X.png", link: '' }
  ]
};

// biar produk tampil
function showProducts(brand) {
  productSection.innerHTML = products[brand].map(p => {
    
    // Hitung diskon (jika ada)
    const originalPrice = p.price;
    const discount = p.discount ? p.discount : 0;
    const finalPrice = originalPrice - (originalPrice * discount / 100);

    return `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <div class="product-info">
          <h3>${p.name}</h3>

          ${
            discount > 0 
            ? `
              <p class="price">
                <span class="after">Rp ${finalPrice.toLocaleString()}</span>
                <span class="before">Rp ${originalPrice.toLocaleString()}</span>
                <span class="disc">-${discount}%</span>
              </p>
            `
            : `<p class="price">Rp ${originalPrice.toLocaleString()}</p>`
          }

          <button class="view-btn" onclick="window.location.href='${p.link}'">View</button>
        </div>
      </div>
    `;
  }).join('');
}


// Event click untuk tombol brand
document.querySelectorAll('.brand').forEach(btn => {
  btn.addEventListener('click', () => {
    // hapus active dari semua brand
    document.querySelectorAll('.brand').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ambil nama brand dari teks
    const brandName = btn.querySelector('span').textContent.toLowerCase();
    showProducts(brandName);
  });
});


showProducts('nike');
