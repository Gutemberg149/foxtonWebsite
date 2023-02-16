// cep.addEventListener("blur", (e) => {
//   let cepValue = cep.value;
//   const options = { method: "GET", mode: "cors", cache: "default" };
//   fetch(`https://viacep.com.br/ws/${cepValue}/json/`, options)
//     .then((response) => {
//       response.json().then((data) => {
//         console.log(data);
//       });
//     })
//     .catch((e) => console.log("Deu erro" + e));
// });

const pesquisarCep = async () => {
  const cep = document.querySelector(".cep").value;
  const textA = document.querySelector(".textA");
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const dados = await fetch(url);
  const endereco = await dados.json();
  if (endereco.hasOwnProperty("erro")) {
    textA.innerHTML = "CEP nao encontrado";
  } else {
    textA.innerHTML = endereco.logradouro;
    console.log(endereco);
  }
};
const cepP = document.querySelector(".cep");
cepP.addEventListener("focusout", pesquisarCep);
