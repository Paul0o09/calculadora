function add(valor) {
  document.getElementById("display").value += valor;
}
function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  let conta = document.getElementById("display").value;
  try {
    document.getElementById("display").value = eval(conta);
  } catch {
    alert("Conta Invalída");
  }
}