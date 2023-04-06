// javascript
//reset luas
function myLuas() {
    document.getElementById("myLuas").reset();
    document.getElementById("luassegitiga").innerHTML = "";
    document.getElementById("luasjg").innerHTML = "";
    document.getElementById("alasSG").value = "";
    document.getElementById("tinggiSG").value = "";
    document.getElementById("alasJG").value = "";
    document.getElementById("tinggiJG").value = "";
}
//reset keliling
function myKel() {
    document.getElementById("myKel").reset();
    document.getElementById("kelsegitiga").innerHTML = "";
    document.getElementById("keljg").innerHTML = "";
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("alasJG2").value = "";
    document.getElementById("tinggiJG2").value = "";
}
// hitung luas segitiga
function luasSegitiga() {
    const alas = parseFloat(document.getElementById('alasSG').value);
    const tinggi = parseFloat(document.getElementById('tinggiSG').value);

    // jika input kosong, tampilkan sweet alert
    if (!alas || !tinggi) {
        Swal.fire({
            icon: "error",
            title: "Luas Segitiga",
            text: "Alas dan tinggi tidak boleh kosong!",
        });
        return;
    }

    // menghitung luas
    luas = 0.5 * alas * tinggi;
    const result =
        `L = 1/2 x ${alas} x ${tinggi} = ${luas}`
        ;
    document.getElementById("luassegitiga").textContent = result;

    // tampilkan hasil luas segitiga menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Luas Segitiga",
        text: `Luas Segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas.toFixed(1)}`,
    });

    return false;
}
// hitung keliling segitiga
function kelilingSegitiga() {
    const s1 = parseFloat(document.getElementById('s1').value);
    const s2 = parseFloat(document.getElementById('s2').value);
    const s3 = parseFloat(document.getElementById('s3').value);

    // jika input kosong, tampilkan sweet alert
    if (!s1 || !s2 || !s3) {
        Swal.fire({
            icon: "error",
            title: "Keliling Segitiga",
            text: "Sisi-sisi tidak boleh kosong!",
        });
        return;
    }
    // menghitung keliling
    kel = s1 + s2 + s3;
    const result =
        `K =${s1} + ${s2} + ${s3} = ${kel}`
        ;
    document.getElementById("kelsegitiga").textContent = result;

    // tampilkan hasil keliling segitiga menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Keliling Segitiga",
        text: `Keliling Segitiga dengan Sisi AB ${s1}, Sisi BC ${s2} dan Sisi AC ${s3} adalah ${kel.toFixed(1)}`,
    });

    return false;
}
// hitung luas jajar genjang
function luasJG() {
    const alas = parseFloat(document.getElementById('alasJG').value);
    const tinggi = parseFloat(document.getElementById('tinggiJG').value);

    // jika input kosong, tampilkan sweet alert
    if (!alas || !tinggi) {
        Swal.fire({
            icon: "error",
            title: "Luas Jajar Genjang",
            text: "Alas dan tinggi tidak boleh kosong!",
        });
        return;
    }

    // menghitung luas
    luas = alas * tinggi;
    const result =
        `L = ${alas} x ${tinggi} = ${luas}`
        ;
    document.getElementById("luasjg").textContent = result;

    // tampilkan hasil luas jajar genjang menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Luas Jajar Genjang",
        text: `Luas Jajar Genjang dengan alas ${alas} dan tinggi ${tinggi} adalah ${luas.toFixed(1)}`,
    });

    return false;
}
// hitung keliling jajar genjang
function kelilingJG() {
    const alas = parseFloat(document.getElementById('alasJG2').value);
    const tinggi = parseFloat(document.getElementById('tinggiJG2').value);

    // jika input kosong, tampilkan sweet alert
    if (!alas || !tinggi) {
        Swal.fire({
            icon: "error",
            title: "Keliling Jajar Genjang",
            text: "Alas dan tinggi tidak boleh kosong!",
        });
        return;
    }

    // menghitung keliling
    kel = 2 * (alas + tinggi);
    const result =
        `K = 2 x ( ${alas} + ${tinggi} ) = ${kel}`
        ;
    document.getElementById("keljg").textContent = result;

    // tampilkan hasil keliling jajar genjang menggunakan sweet alert
    Swal.fire({
        icon: "success",
        title: "Keliling Jajar Genjang",
        text: `Keliling Jajar Genjang dengan alas ${alas} dan tinggi ${tinggi} adalah ${kel.toFixed(1)}`,
    });

    return false;
}