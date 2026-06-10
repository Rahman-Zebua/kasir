```javascript
let total = 0;

function buatProduk() {

  const nama =
    document.getElementById("namaProduk").value;

  const harga =
    parseInt(document.getElementById("hargaProduk").value);

  if (!nama || !harga) {

    alert("Isi nama dan harga produk!");

    return;
  }

  const divProduk =
    document.querySelector(".produk");

  const tombol =
    document.createElement("button");

  tombol.innerText =
    `${nama} - Rp${harga}`;

  tombol.onclick = function () {

    tambahProduk(nama, harga);
  };

  divProduk.appendChild(tombol);

  document.getElementById("namaProduk").value = "";

  document.getElementById("hargaProduk").value = "";
}

function tambahProduk(nama, harga) {

  const keranjang =
    document.getElementById("keranjang");

  const item =
    document.createElement("li");

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

  document.getElementById("bayar").value = "";
}

function hitungKembalian() {

  const bayar =
    parseInt(document.getElementById("bayar").value);

  if (!bayar) {

    alert("Masukkan uang bayar!");

    return;
  }

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
```
