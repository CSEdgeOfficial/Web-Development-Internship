function generateQR() {
    var qrType = document.getElementById('qr-type').value;
    var qrData = document.getElementById('qr-data').value;
    var qrSize = document.getElementById('qr-size').value;
    var qrColor = document.getElementById('qr-color').value;
    var qrErrorCorrection = document.getElementById('qr-error-correction').value;

    var qrCodeContainer = document.getElementById('qr-code');
    qrCodeContainer.innerHTML = '';

    if (qrData.trim() === '') {
        alert('Please enter data to generate QR code.');
        return;
    }

    var url = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${qrSize}x${qrSize}&color=${qrColor.substring(1)}&bgcolor=ffffff&margin=0&format=png&ecc=${qrErrorCorrection}`;

    var img = document.createElement('img');
    img.src = url;
    img.alt = 'QR Code';

    qrCodeContainer.appendChild(img);
}
