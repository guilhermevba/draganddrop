const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach(card => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragStop);
});

function dragStart() {
  this.classList.add("is-dragging");
  dropzones.forEach(dropzone => {
    dropzone.classList.add("highlight");
  });
}

function drag(e) {}

function dragStop() {
  this.classList.remove("is-dragging");
  dropzones.forEach(dropzone => {
    dropzone.classList.remove("highlight");
  });
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener("dragenter", dragEnter);
  dropzone.addEventListener("dragover", dragOver);
  dropzone.addEventListener("dragleave", dragLeave);
  dropzone.addEventListener("dragdrop", dragDrop);
});

function dragEnter(e) {}

function dragOver(e) {
  this.classList.add('over')
  const draggingCard = document.querySelector('.is-dragging')
  this.appendChild(draggingCard)
}

function dragLeave(e) {
  this.classList.remove('over')
}

function dragDrop(e) {
  this.classList.remove('over')
}
