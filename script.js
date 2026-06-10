let total = 0;

function tambahProduk(nama, harga) {

  const keranjang = document.getElementById("keranjang");

  const item = document.createElement("li");

  item.innerHTML = `
    ${nama} - Rp${harga}
    <button onclick="hapusItem(this, ${harga})">
      Hapus
    </button>
  `;

  keranjang.appendChild(item);

  total += harga;

  updateTotal();
}

function hapusItem(button, harga) {

  button.parentElement.remove();

  total -= harga;

  updateTotal();
}

function updateTotal() {

  document.getElementById("total").innerText =
    `Total: Rp${total}`;
}

function resetKasir() {

  document.getElementById("keranjang").innerHTML = "";

  total = 0;

  updateTotal();

  document.getElementById("kembalian").innerText =
    "Kembalian: Rp0";
}

function hitungKembalian() {

  const bayar =
    parseInt(document.getElementById("bayar").value);

  const kembali = bayar - total;

  document.getElementById("kembalian").innerText =
    `Kembalian: Rp${kembali}`;
}

function simpanTransaksi() {

  alert("Transaksi berhasil disimpan!");
}

function toggleDarkMode() {

  document.body.classList.toggle("dark");
}
