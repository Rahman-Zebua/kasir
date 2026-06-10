let total = 0;

function buatProduk() {

  const nama = document.getElementById("namaProduk").value;

  const harga = document.getElementById("hargaProduk").value;

  if (nama === "" || harga === "") {
    alert("Isi nama dan harga produk!");
    return;
  }

  const tombol = document.createElement("button");

  tombol.innerHTML = nama + " - Rp" + harga;

  tombol.onclick = function () {
    tambahKeKeranjang(nama, parseInt(harga));
  };

  document.getElementById("daftarProduk").appendChild(tombol);

  document.getElementById("namaProduk").value = "";

  document.getElementById("hargaProduk").value = "";
}

function tambahKeKeranjang(nama, harga) {

  total += harga;

  const item = document.createElement("p");

  item.innerHTML = nama + " - Rp" + harga;

  document.getElementById("keranjang").appendChild(item);

  document.getElementById("total").innerHTML =
    "Total: Rp" + total;
}

function hitungKembalian() {

  const bayar = parseInt(
    document.getElementById("bayar").value
  );

  if (isNaN(bayar)) {
    alert("Masukkan uang bayar!");
    return;
  }

  const kembali = bayar - total;

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp" + kembali;
}

function resetKasir() {

  total = 0;

  document.getElementById("keranjang").innerHTML = "";

  document.getElementById("total").innerHTML =
    "Total: Rp0";

  document.getElementById("kembalian").innerHTML =
    "Kembalian: Rp0";

  document.getElementById("bayar").value = "";
}

function cetakStruk() {

  let isiStruk = `
    <h2>STRUK BELANJA</h2>
    <hr>
    ${document.getElementById("keranjang").innerHTML}
    <hr>
    <h3>${document.getElementById("total").innerHTML}</h3>
    <h3>${document.getElementById("kembalian").innerHTML}</h3>
  `;

  let halaman = window.open("", "", "width=400,height=600");

  halaman.document.write(isiStruk);

  halaman.document.close();

  halaman.print();
}
