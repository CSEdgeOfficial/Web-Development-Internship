function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeModal() {
    document.getElementById('lightbox').style.display = 'none';
}