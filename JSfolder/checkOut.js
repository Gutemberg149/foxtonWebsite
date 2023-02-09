import renderingSubBill from "./totalContainer.js";
const containerMainPart = document.querySelector(".containerMainPart");
const noProduct = document.querySelector(".noProduct");

//Function to render the prod in cart, function is also called in prodPage----

function renderingCheckOut() {
  const cartProds = JSON.parse(localStorage.getItem("cartStorage")) || [];
  containerMainPart.innerHTML = "";

  cartProds.forEach((prod) => {
    containerMainPart.innerHTML += `
    <div class="mainPart">
              <div class="prodCartLeft">
                <img src="${prod[0][0].prodImg1}" class="prodCartLeftImg" />
                <div class="prodCartLeftInfo">
                  <p class="prodCartLeftInfoName">
                  ${prod[0][0].prodName}
                  </p>

                  <div class="middleInfo">
                     <div class="colorContainer">
                       <div class="cor2">Cor</div>
                       <div class="color2"></div>
                     </div>
                     <p class="sizecontainer">Tamanho: G</p>
                     <p class="prodCardPrice">R$ ${prod[0][0].prodPrice},00</p>
                  </div>

                  <div class="qtdContainer">

                    <ion-icon class="removeoutlineCart" name="remove-outline">  
                     <div class='getId5'>${prod[0][0].id}</div>
                    </ion-icon>

                    <div class="qtdDiviser"></div>

                    <p class="qtdProdShopCart">${prod[0][0].prodQtd}</p>

                    <div class="qtdDiviser"></div>

                    <ion-icon class="addveoutlineCart" name="add-outline">
                      <div class='getId5'>${prod[0][0].id}</div>
                    </ion-icon>

               
                  
                  </div>
                </div>
              </div>

            <div class="prodCartRight">
              <div class="remove">
                <div class='getId5'>${prod[0][0].id}</div>
                <p >Remove</p>
              </div>
                <div class="saveForLater">
                  <p>Salvar Para depois</p>
                  <ion-icon class="bookMark" name="bookmark-outline"></ion-icon>
                </div>
              </div>
            </div> 
    `;
  });
  removeItens();
}

renderingCheckOut();
export default renderingCheckOut;

// ----Function to display the cart empty message, function is also called in prodPage----
export function cartEmpty() {
  const cartProds = JSON.parse(localStorage.getItem("cartStorage")) || [];
  if (cartProds.length == 0) {
    noProduct.style.display = "block";
  } else {
    noProduct.style.display = "none";
  }
}
cartEmpty();

// ------------------------------------------------------------------------------------------
// Increase or decrease product; counting and changing final bill

export function decreaseProdQtt() {
  const qtdContainers = document.querySelectorAll(".qtdContainer");
  qtdContainers.forEach((prodCont) => {
    let qtdProdShopCart = prodCont.querySelector(".qtdProdShopCart");

    let minus = prodCont.querySelector(".removeoutlineCart");
    minus.addEventListener("click", () => {
      const cartProds = JSON.parse(localStorage.getItem("cartStorage")) || [];
      let cartConc1 = cartProds.reduce((acc, curVal) => {
        return acc.concat(curVal);
      });
      let cartConc2 = cartConc1.reduce((acc, curVal) => {
        return acc.concat(curVal);
      });
      let id = minus.querySelector(".getId5").innerHTML;

      let prodFiltered = cartConc2.filter((prod) => {
        return prod.id === Number(id);
      });

      let qtd = prodFiltered[0].prodQtd;
      if (qtd === 0) {
        return;
      } else {
        qtd -= 1;

        cartProds.forEach((cart) => {
          if (cart[0][0].id == id) {
            cart[0][0].prodQtd = qtd;
            localStorage.setItem("cartStorage", JSON.stringify(cartProds));
            qtdProdShopCart.innerHTML = cart[0][0].prodQtd;
            renderingSubBill();
          }
        });
      }
    });
  });
}
decreaseProdQtt();

export function increaseProdQtt() {
  const qtdContainers = document.querySelectorAll(".qtdContainer");
  qtdContainers.forEach((prodCont) => {
    let qtdProdShopCart = prodCont.querySelector(".qtdProdShopCart");

    let plus = prodCont.querySelector(".addveoutlineCart");
    plus.addEventListener("click", () => {
      const cartProds = JSON.parse(localStorage.getItem("cartStorage")) || [];
      let cartConc1 = cartProds.reduce((acc, curVal) => {
        return acc.concat(curVal);
      });
      let cartConc2 = cartConc1.reduce((acc, curVal) => {
        return acc.concat(curVal);
      });
      let id = plus.querySelector(".getId5").innerHTML;

      let prodFiltered = cartConc2.filter((prod) => {
        return prod.id === Number(id);
      });

      let qtd = prodFiltered[0].prodQtd;
      qtd += 1;

      cartProds.forEach((cart) => {
        if (cart[0][0].id == id) {
          cart[0][0].prodQtd = qtd;
          localStorage.setItem("cartStorage", JSON.stringify(cartProds));
          qtdProdShopCart.innerHTML = cart[0][0].prodQtd;
          renderingSubBill();
        }
      });
    });
  });
}
increaseProdQtt();

// ------------------------------------------------------------------------------------------
//remove item from the cart

export function removeItens() {
  const removes = document.querySelectorAll(".remove");
  const cartArray = JSON.parse(localStorage.getItem("cartStorage"));
  removes.forEach((remove) => {
    remove.addEventListener("click", () => {
      const id = remove.querySelector(".getId5").innerHTML;
      const cartconc = cartArray.reduce((acc, curVal) => {
        return acc.concat(curVal);
      });
      const cartconc1 = cartconc.reduce((acc, curVal) => {
        return acc.concat(curVal);
      });
      const index = cartconc1.findIndex((idx) => {
        return idx.id === Number(id);
      });
      cartArray.splice(index, 1);
      localStorage.setItem("cartStorage", JSON.stringify(cartArray));
      renderingCheckOut();
      renderingSubBill();
      cartEmpty();
      increaseProdQtt();
      decreaseProdQtt();
    });
  });
}
removeItens();
