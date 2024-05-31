function openModal(imageSrc) {
    var modal = document.getElementById("lightboxModal");
    var modalImg = document.getElementById("lightboxImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("lightboxModal");
    modal.style.display = "none";
}