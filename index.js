import rendMainPage from "./indexFolder/renderingIndexProds.js";
import renderingSubBill from "./JSfolder/totalContainer.js";
import removeItens from "./JSfolder/checkOut.js"; //remove button ,remove item from the cart
import prodList from "../JSfolder/prodList.js";
import { increaseProdQtt, decreaseProdQtt } from "../JSfolder/checkOut.js";

increaseProdQtt();
decreaseProdQtt();
// function change the picture with ouse over----------------------------
const prodContainerAll = document.querySelectorAll(".prodContainer");

var changePicMouseOver = () => {
  prodContainerAll.forEach((prodCont) => {
    prodCont.addEventListener("mouseover", () => {
      let imgSrc = prodCont.querySelector(".prodImg");
      let id = prodCont.querySelector(".getId").innerHTML;
      let prodSelected = prodList.filter((prod) => prod.id === Number(id));
      imgSrc.src = prodSelected[0].prodImg2;
    });
  });
};
var changePicMouseOut = () => {
  prodContainerAll.forEach((prodCont) => {
    prodCont.addEventListener("mouseout", () => {
      let imgSrc = prodCont.querySelector(".prodImg");
      let id = prodCont.querySelector(".getId").innerHTML;
      let prodSelected = prodList.filter((prod) => prod.id === Number(id));
      imgSrc.src = prodSelected[0].prodImg1;
    });
  });
};
changePicMouseOver();
changePicMouseOut();

//Here is to click the picture and send prod to prodPage
let cartArray = [];
prodContainerAll.forEach((prodCont) => {
  prodCont.addEventListener("click", () => {
    let id = prodCont.querySelector(".getId").innerHTML;
    let prodSelected = prodList.filter((prod) => prod.id === Number(id));
    cartArray.push(prodSelected);
    localStorage.setItem("CartSingle", JSON.stringify(cartArray));
    console.log(cartArray);
  });
});
