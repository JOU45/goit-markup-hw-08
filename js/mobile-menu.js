(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-info]"),
    closeModalBtn: document.querySelector("[data-modal-clos-info]"),
    modal: document.querySelector("[data-modal-info]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();