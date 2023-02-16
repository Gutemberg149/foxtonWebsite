const address = document.querySelector(".address");
const cepInputBox = document.querySelector(".cep");
const okBox = document.querySelector(".okBoxCep");
const city = document.querySelector(".city p");
const street = document.querySelector(".street p");
const neighborhood = document.querySelector(".neighborhood p");
const cepErro = document.querySelector(".cepErro ");

const pesquisaCep = async () => {
  const cep = cepInputBox.value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const dados = await fetch(url);
  const endereco = await dados.json();
  if (endereco.hasOwnProperty("erro")) {
    address.style.display = "none";
    cepErro.style.display = "flex";
    cepInputBox.value = " ";
  } else {
    cepErro.style.display = "none";
    address.style.display = "block";
    city.innerHTML = endereco.localidade;
    street.innerHTML = endereco.logradouro;
    neighborhood.innerHTML = endereco.bairro;
    cepInputBox.value = " ";
  }
};

cepInputBox.addEventListener("focusout", pesquisaCep);

export default pesquisaCep;
export { cepInputBox };
