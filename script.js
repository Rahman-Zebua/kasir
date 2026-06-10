let total = 0;

function tambahProduk(nama, harga) {

    const keranjang = document.getElementById("keranjang");

    const item = document.createElement("li");

    item.innerText = `${nama} - Rp${harga}`;

    keranjang.appendChild(item);

    total += harga;

    document.getElementById("total").innerText =
        `Total: Rp${total}`;
}
