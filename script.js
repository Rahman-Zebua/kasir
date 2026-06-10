```javascript
let total = 0;

function buatProduk() {

  const nama =
    document.getElementById("namaProduk").value;

  const harga =
    parseInt(
      document.getElementById("hargaProduk").value
    );

  if (!nama || !harga) {

    alert("Isi nama dan harga produk!");

    return;
  }

  const daftar =
    document.getElementById("daftarProduk");

  const tombol =
    document.createElement("button");

  tombol.innerText =
    `${nama} - Rp${harga.toLocaleString("id-ID")}`;

  tombol.onclick = function () {

    tambahKeKeranjang(nama, harga);
  };

  daftar.appendChild(tombol);

  document.getElementById("namaProduk").value = "";

  document.getElementById("hargaProduk").value = "";
}

function tambahKeKeranjang(nama, harga) {

  const keranjang =
    document.getElementById("keranjang");

  const item =
    document.createElement("li");

  item.innerHTML = `
    ${nama} - Rp${harga.toLocaleString("id-ID")}

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
    `Total: Rp${total.toLocaleString("id-ID")}`;
}

function hitungKembalian() {

  const bayar =
    parseInt(
      document.getElementById("bayar").value
    );

  if (!bayar) {

    alert("Masukkan uang bayar!");

    return;
  }

  const kembali = bayar - total;

  document.getElementById("kembalian").innerText =
    `Kembalian: Rp${kembali.toLocaleString("id-ID")}`;
}

function resetKasir() {

  document.getElementById("keranjang").innerHTML = "";

  total = 0;

  updateTotal();

  document.getElementById("kembalian").innerText =
    "Kembalian: Rp0";

  document.getElementById("bayar").value = "";
}

function toggleDarkMode() {

  document.body.classList.toggle("dark");
}

function cetakStruk() {

  let isi = "";

  const items =
    document.querySelectorAll("#keranjang li");

  items.forEach(item => {

    isi += `<p>${item.innerText}</p>`;
  });

  const struk = `
    <html>

    <head>

      <title>Struk</title>

      <style>

        body{

          font-family:Arial;

          padding:20px;
        }

        h2{

          text-align:center;
        }

      </style>

    </head>

    <body>

      <h2>STRUK BELANJA</h2>

      <hr>

      ${isi}

      <hr>

      <h3>
        ${document.getElementById("total").innerText}
      </h3>

      <h3>
        ${document.getElementById("kembalian").innerText}
      </h3>

      <p>
        Terima kasih 🙏
      </p>

    </body>

    </html>
  `;

  const win =
    window.open("", "", "width=400,height=600");

  win.document.write(struk);

  win.document.close();

  win.print();
}
```
