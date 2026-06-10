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
    `${nama} - Rp${harga.toLocaleString("id-ID")}`;

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
    `Kembalian: Rp${kembali.toLocaleString("id-ID")}`;
}

function toggleDarkMode() {

  document.body.classList.toggle("dark");
}

function simpanTransaksi() {

  let isiKeranjang = "";

  const items =
    document.querySelectorAll("#keranjang li");

  items.forEach(item => {

    isiKeranjang += `
      <p>${item.innerText}</p>
    `;
  });

  const tanggal = new Date().toLocaleString("id-ID");

  const struk = `
    <html>
    <head>

      <title>Struk Belanja</title>

      <style>

        body{

          font-family: Arial;

          padding:20px;

          width:300px;
        }

        h2{

          text-align:center;
        }

        p{

          margin:5px 0;
        }

        hr{

          border:1px dashed black;
        }

      </style>

    </head>

    <body>

      <h2>STRUK BELANJA</h2>

      <p>${tanggal}</p>

      <hr>

      ${isiKeranjang}

      <hr>

      <h3>
        ${document.getElementById("total").innerText}
      </h3>

      <h3>
        ${document.getElementById("kembalian").innerText}
      </h3>

      <hr>

      <p>
        Terima kasih sudah belanja 🙏
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
