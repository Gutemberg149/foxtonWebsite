//rendering the product page

// import remove from "../JSfolder/remove.js"; //emove button ,remove item from the cart
const mainProdInfo = document.getElementById("mainProdInfo");
const sinlgeProdCart = JSON.parse(localStorage.getItem("CartSingle"));

mainProdInfo.innerHTML = `
<div class="leftBoxImgs">
<img class="imgLeftBox" src="${sinlgeProdCart[0][0].prodImg1}" alt="" />
<img class="imgLeftBox" src="${sinlgeProdCart[0][0].prodImg2}" alt="" />
<img class="imgLeftBox" src="${sinlgeProdCart[0][0].prodImg3}" alt="" />
<img class="imgLeftBox" src="${sinlgeProdCart[0][0].prodImg4}" alt="" />
</div>

<div class="rightBoxInfo reachedBottom">
<h3 class="prodName">${sinlgeProdCart[0][0].prodName}</h3>
<p class="prodPrice">R$ ${sinlgeProdCart[0][0].prodPrice}</p>
<div class="colorContainer">
  <p class="cor">Cor</p>
  <div class="color"></div>
</div>

<div class="size_qtd">
  <div class="ulSizesOptions2Container">
    <p>Tamanho</p>
    <ul class="ulSizesOptions2">
      <li class="sizesConfig2 small">P</li>
      <li class="sizesConfig2 medium">M</li>
      <li class="sizesConfig2 large">L</li>
      <li class="sizesConfig2 extraLarge">GG</li>
    </ul>
  </div>

</div>
<div class="meassuring">
  <i class="hanger">△</i>
  <p class="provador">PROVADOR VIRTUAL</p>
  <i class="fa-regular fa-ruler"></i>
  <p class="provador">TABELA DE MEDIDAS</p>
</div>
<div class="addBagContainer">
  <button class="addBag">ADICIONAR A SACOLA</button>
  <i class="fa-regular fa-bookmark"></i>
</div>
<div class="freteContainer">
  <p class="frete">Consulte prazo e valor do frete</p>
  <div class="divBtn">
    <input type="text" class="CEP" placeholder="DIGITE SEU CEP" />
    <button class="ok">OK</button>
  </div>
</div>
<div class="descricaoContainer">
  <div class="twoDescription">
    <p class="descricao">Descrição</p>
    <p class="composicao">Compisição</p>
  </div>
  <p class="descricaoText">
    Camiseta Cocoa New com decote redondo, manga curta, estampa frontal
    no peito.
  </p>
</div>
</div>
`;
// ------------------------------imports-----------------------------------------------

import { showCart, hideCart, showCartGeneral } from "../JSfolder/showCart.js";
import renderingCarrossel from "../JSfolder/carrosselProdpage.js";
import renderingCheckOut, { cartEmpty } from "../JSfolder/checkOut.js";
import renderingSubBill from "../JSfolder/totalContainer.js";
import { increaseProdQtt, decreaseProdQtt } from "../JSfolder/checkOut.js";
import { removeItens } from "../JSfolder/checkOut.js";

showCart();
hideCart();
renderingCarrossel();

// sending the product to final bag

const addBag = document.querySelector(".addBag");
let bagArray = [];

addBag.addEventListener("click", added);

function added() {
  if (localStorage.cartStorage) {
    bagArray = JSON.parse(localStorage.getItem("cartStorage"));
  }

  var checking = false;
  if (bagArray.length === 0) {
    bagArray.push(sinlgeProdCart);
    localStorage.setItem("cartStorage", JSON.stringify(bagArray));
    renderingCheckOut();
    showCartGeneral();
    cartEmpty();
    renderingSubBill();
    increaseProdQtt();
    decreaseProdQtt();
    removeItens();
  } else {
    let cartSingleId = JSON.parse(localStorage.getItem("CartSingle"));
    bagArray.forEach((prod) => {
      if (prod[0][0].id === cartSingleId[0][0].id) {
        //getting the index to cut the repeated prod from the array------
        //flattint bag array till reach object---------------------------
        let bagArrayFlat = bagArray.reduce((acc, curVal) => {
          return acc.concat(curVal);
        });
        let bagArrayFlat2 = bagArrayFlat.reduce((acc, curVal) => {
          return acc.concat(curVal);
        });
        const bagIdx = bagArrayFlat2.findIndex((elem) => {
          return Number(elem.id) == Number(cartSingleId[0][0].id);
        });

        //adding one more product
        const prodPlusOne = bagArray[bagIdx];

        prodPlusOne[0][0].prodQtd++;
        console.log(bagIdx);

        //removing the prod from bag and put the same element back in--------------------------------
        bagArray.splice(bagIdx, 1); //here we cut the element off from the array

        bagArray.splice(bagIdx, 0, prodPlusOne); //here we put the same above element modified (prodPlusOne) at the same position.

        // localStorage.setItem("CartSingle", JSON.stringify(prodPlusOne));
        localStorage.setItem("cartStorage", JSON.stringify(bagArray));
        showCartGeneral();
        renderingCheckOut();
        renderingSubBill();
        increaseProdQtt();
        decreaseProdQtt();
        removeItens();
        checking = true;
      }
    });
    if (checking === false) {
      bagArray.push(sinlgeProdCart);
      localStorage.setItem("cartStorage", JSON.stringify(bagArray));
      renderingCheckOut();
      showCartGeneral();
      cartEmpty();
      renderingSubBill();
      increaseProdQtt();
      decreaseProdQtt();
      removeItens();
    }
  }
}
