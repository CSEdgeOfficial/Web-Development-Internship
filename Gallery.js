const thumbnails = document.querySelectorAll('.thumbnails img');
const modal = document.querySelector('.modal');
const modalContent = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.src = thumbnail.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});