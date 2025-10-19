// script.js
const cpfInput = document.getElementById('cpf');

cpfInput.addEventListener('input', function () {
  let cpf = this.value.replace(/\D/g, '');
  cpf = cpf.substring(0, 11);

  if (cpf.length > 9) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
  } else if (cpf.length > 6) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
  } else if (cpf.length > 3) {
    cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
  }

  this.value = cpf;
});
