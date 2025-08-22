
let nomor = 0;
let total = 0;

const nomorDisplay = document.getElementById('nomor');
const nomorTerakhir = document.getElementById('nomorTerakhir');
const totalAntrian = document.getElementById('totalAntrian');
const ambilBtn = document.getElementById('ambil');
const resetBtn = document.getElementById('reset');

ambilBtn.addEventListener('click', () => {
    nomor++;
    total++;
    updateDisplay();
    cetakPDF(nomor);
});

resetBtn.addEventListener('click', () => {
    nomor = 0;
    total = 0;
    updateDisplay();
});

function updateDisplay() {
    nomorDisplay.textContent = nomor;
    nomorTerakhir.textContent = nomor;
    totalAntrian.textContent = total;
}

function cetakPDF(nomorAntrian) {
    const printWindow = window.open('', '', 'width=400,height=400');
    printWindow.document.write(`
        <html>
        <head>
            <title>Cetak Nomor</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                h1 { font-size: 80px; color: #0f172a; }
                p { font-size: 20px; }
            </style>
        </head>
        <body>
            <img src="logo-bps.png" alt="Logo BPS" style="width:80px; margin-bottom:20px;">
            <h1>${nomorAntrian}</h1>
            <p>Nomor Antrian Anda</p>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}
