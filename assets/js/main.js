// URL
const base_url = "https://viacep.com.br/ws/";
// parametros do DOM
const cep = document.querySelector("#CEP");
const rua = document.querySelector("#Rua");
//const numero = document.querySelector("#Numero");
const complemento = document.querySelector("#Complemento");
const bairro = document.querySelector("#Bairro");
const cidade = document.querySelector("#Cidade");
const uf = document.querySelector("#UF");

cep.oninput = () => {
  if (cep.value.length < 9) {
    rua.value = "";
    complemento.value = "";
    bairro.value = "";
    cidade.value = "";
    uf.value = "";
  } else {
    fetch(`${base_url}${cep.value.replace("-", "")}/json/`)
      .then(response => response.json())
      .then(data => {
        console.table(data);
        rua.value = data.logradouro;
        complemento.value = data.complemento;
        bairro.value = data.bairro;
        cidade.value = data.localidade;
        uf.value = data.uf;
      });
  }
  cep.value = cep.value.replace(/D/g, "").replace(/^(\d{5})(\d)/, "$1-$2");
};
