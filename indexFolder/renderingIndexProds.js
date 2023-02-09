import prodList from "../JSfolder/prodList.js";
import { showCart, hideCart } from "../JSfolder/showCart.js";
import renderingCheckOut from "../JSfolder/checkOut.js";
renderingCheckOut();
showCart();
hideCart();
const outterContainer = document.getElementById("outterContainer");

function rendMainPage() {
  prodList.forEach((prod) => {
    outterContainer.innerHTML += `
  <div class="prodContainer">
  <a href="/productPage/prodPage.html">
     <div class='getId'>${prod.id}</div>
       <img class="prodImg" src="${prod.prodImg1}" alt="" />
 </a>
     <div class="prodInfoContainer">
       <div class="prodInfo">
         <div class="prodName">${prod.prodName}</div>
         <div class="prodPrice">R$${prod.prodPrice},00</div>
         <div class="prodInstallment">ou 3x de R$ ${Math.trunc(
           prod.prodPrice / 3
         )},00</div>
       </div>
       <ul class="ulSizesOptions">
         <li class="sizesConfig small">P</li>
         <li class="sizesConfig medium">M</li>
         <li class="sizesConfig large">L</li>
         <li class="sizesConfig extraLarge">GG</li>
       </ul>
    </div>
   </div>
`;
  });
}
rendMainPage();
export default rendMainPage;
