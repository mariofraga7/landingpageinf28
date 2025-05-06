document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contatoForm");
    const sucesso = document.getElementById("sucesso");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        // Aqui você poderia adicionar validação extra ou enviar dados para backend
  
        sucesso.classList.remove("d-none");
        form.reset();
      });
    }
  });