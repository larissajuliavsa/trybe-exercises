let estadosBr = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
  "Distrito Federal",
];

for (let index = 0; index < estadosBr.length; index += 1) {
  let selectEstados = document.getElementById("select-estado");
  let criarEstados = document.createElement("option");
  criarEstados.innerHTML = estadosBr[index];
  selectEstados.appendChild(criarEstados);
}

const botaoEnviar = document.querySelector('#btn-enviar')
let inputUsuario = document.querySelectorAll('dados-usuarios')
const nomeUsuario = document.querySelector('#nome-usuario')

function pegarDados(event) {
  event.preventDefault()
  console.log(inputUsuario.value)
  nomeUsuario.innerHTML = inputUsuario.value
}

botaoEnviar.addEventListener('click', pegarDados)