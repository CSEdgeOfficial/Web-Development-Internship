document.getElementById('generate').addEventListener('click', function() {
    var data = document.getElementById('input').value;
    var type = document.getElementById('type').value;
    var size = document.getElementById('size').value;
    var color = document.getElementById('color').value;
    var level = document.getElementById('level').value;
    var qrCodeDiv = document.getElementById('qr-code');

    // Clear previous QR codes
    qrCodeDiv.innerHTML = '';

    // Split the data into chunks if it's too long
    var chunks = chunkString(data, 200); // Adjust chunk size as needed

    // Generate QR codes for each chunk
    chunks.forEach(function(chunk, index) {
        var qrCodeContainer = document.createElement('div');
        qrCodeContainer.classList.add('qr-code-container');
        qrCodeDiv.appendChild(qrCodeContainer);

        var qr = new QRCode(qrCodeContainer, {
            text: type === 'text' ? chunk : getTypeData(type, chunk),
            width: size,
            height: size,
            colorDark: color,
            correctLevel: level
        });
    });
});

function getTypeData(type, data) {
    switch(type) {
        case 'url':
            return data.startsWith('http://') || data.startsWith('https://') ? data : 'http://' + data;
        case 'contact':
            return 'BEGIN:VCARD\nVERSION:3.0\nFN:' + data + '\nEND:VCARD';
        case 'wifi':
            return 'WIFI:S:' + data + ';T:WPA;P:password;;';
        default:
            return data;
    }
}

function chunkString(str, chunkSize) {
    var chunks = [];
    for (var i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.slice(i, i + chunkSize));
    }
    return chunks;
}
