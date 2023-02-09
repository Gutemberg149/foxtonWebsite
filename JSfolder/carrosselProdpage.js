import prodList from "../JSfolder/prodList.js";

const carrosselsecCarrossel = document.querySelector(".carrosselsecCarrossel");
const CarrosselarrowLeft = document.querySelector(".CarrosselarrowLeft");
const CarrosselarrowRight = document.querySelector(".CarrosselarrowRight");

const carrossel = 10;

function renderingCarrossel() {
  for (let i = 0; i <= carrossel; i++) {
    carrosselsecCarrossel.innerHTML += `
    <div class="prodContainer">
    <img class="prodImg" src="${prodList[i].prodImg1}" alt="" />
  
    <div class="prodInfoContainer">
      <div class="prodInfo">
        <div class="prodName">${prodList[i].prodName}</div>
        <div class="prodPrice">R$${prodList[i].prodPrice},00</div>
        <div class="prodInstallment">ou 3x de R$ ${Math.trunc(
          prodList[i].prodPrice / 3
        )}</div>
      </div>
    </div>
  </div> 
    `;
  }
}
export default renderingCarrossel;

//Making carrossel move------------------------------------------------------
let count = 0;
function moveCarrosselLeft() {
  CarrosselarrowLeft.addEventListener("click", () => {
    if (count >= 147) {
      return;
    } else {
      count += 21;
      const prodContainerAll = document.querySelectorAll(".prodContainer");
      prodContainerAll.forEach((prodCont) => {
        prodCont.style.right = `${count}rem`;
      });
    }
  });
}
moveCarrosselLeft();

function moveCarrosselRight() {
  CarrosselarrowRight.addEventListener("click", () => {
    if (count <= 0) {
      return;
    } else {
      count -= 21;
      const prodContainerAll = document.querySelectorAll(".prodContainer");
      prodContainerAll.forEach((prodCont) => {
        prodCont.style.right = `${count}rem`;
      });
    }
  });
}
moveCarrosselRight();
