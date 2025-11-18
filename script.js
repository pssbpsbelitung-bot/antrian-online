let nomor = 0;
let total = 0;

document.getElementById("ambil").onclick = () => {
    nomor++;
    total++;

    document.getElementById("nomor").innerText = nomor;
    document.getElementById("nomorTerakhir").innerText = nomor;
    document.getElementById("totalAntrian").innerText = total;

    // Set data ke mode print
    document.getElementById("printNumber").innerText = nomor;

    const now = new Date();
    document.getElementById("printDate").innerText =
        now.toLocaleDateString() + " " + now.toLocaleTimeString();

    window.print();
};

document.getElementById("reset").onclick = () => {
    nomor = 0;
    total = 0;

    document.getElementById("nomor").innerText = "0";
    document.getElementById("nomorTerakhir").innerText = "0";
    document.getElementById("totalAntrian").innerText = "0";
};
