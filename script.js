document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contatoForm");
    const sucesso = document.getElementById("sucesso");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();

  
        sucesso.classList.remove("d-none");
        form.reset();
      });
    }
  });
