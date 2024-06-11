document.addEventListener("DOMContentLoaded", function () {
  const detailButtons = document.querySelectorAll(".box button");

  detailButtons.forEach((button, index) => {
    button.addEventListener("click", () => openModal(index));
  });
});

function openModal(index) {
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");

  // Disable the entire document's click event
  document.removeEventListener("click", documentClickHandler);

  // Retrieve the detailed information from the HTML content based on the adjusted index
  const detailsElement = document.getElementById(`minds${index + 1}`);
  const details = detailsElement ? detailsElement.innerHTML : '';

  // Set the detailed information without the close button
  modalContent.innerHTML = details;

  // Display the modal
  modal.style.display = "block";

  // Enable the document's click event only for closing the modal
  document.addEventListener("click", documentClickHandler);
}

function documentClickHandler(event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";

  // Re-enable the entire document's click event
  document.addEventListener("click", documentClickHandler);
}
const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
  menuNav.classList.remove("menu-active");
});
