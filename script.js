let nomor = 0;
let total = 0;

document.getElementById("ambil").onclick = () => {
    nomor++;
    total++;

    document.getElementById("nomor").innerHTML = nomor;
    document.getElementById("nomorTerakhir").innerHTML = nomor;
    document.getElementById("totalAntrian").innerHTML = total;

    // Set nomor di struk
    document.getElementById("printNumber").innerText = nomor;

    // Set tanggal dan waktu
    const now = new Date();
    document.getElementById("printDate").innerText =
        now.toLocaleDateString("id-ID") + " " + now.toLocaleTimeString("id-ID");

    // Print
    window.print();
};

document.getElementById("reset").onclick = () => {
    nomor = 0;
    total = 0;

    document.getElementById("nomor").innerHTML = nomor;
    document.getElementById("nomorTerakhir").innerHTML = nomor;
    document.getElementById("totalAntrian").innerHTML = total;
};
