// MENÚ MODAL
const openMenuBtn = document.getElementById("openMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const menuModal = document.getElementById("menuModal");
const backdropMenu = document.getElementById("modalBackdropMenu");

// CONTACTO MODAL
const openContactBtn = document.getElementById("openContactBtn");
const closeContactBtn = document.getElementById("closeContactBtn");
const contactModal = document.getElementById("contactModal");
const backdropContact = document.getElementById("modalBackdropContact");

function openModal(modal) {
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("show");
  document.body.style.overflow = "";
}

// Eventos menú
openMenuBtn.addEventListener("click", () => openModal(menuModal));
closeMenuBtn.addEventListener("click", () => closeModal(menuModal));
backdropMenu.addEventListener("click", () => closeModal(menuModal));

// Eventos contacto
openContactBtn.addEventListener("click", () => openModal(contactModal));
closeContactBtn.addEventListener("click", () => closeModal(contactModal));
backdropContact.addEventListener("click", () => closeModal(contactModal));

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(menuModal);
    closeModal(contactModal);
  }
});
 
