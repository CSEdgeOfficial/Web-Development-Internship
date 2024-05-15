function generateQRCode() {
    var link = document.getElementById("link").value;
    var foregroundColor = document.getElementById("foreground").value;
    var backgroundColor = document.getElementById("background").value;
    var qrcode = new QRCode("qrcode", {
        text: link,
        width: 200,
        height: 200,
        colorDark: foregroundColor,
        colorLight: backgroundColor,
        correctLevel: QRCode.CorrectLevel.H
    });
}