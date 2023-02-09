const subtotalValue = document.querySelector(".subtotalValue");
const subtotalinalValueF = document.querySelector(".subtotalinalValue");

function renderingSubBill() {
  if (localStorage.cartStorage) {
    let cartStoragePrices = JSON.parse(localStorage.getItem("cartStorage"));
    if (localStorage.cartStorage[0].length >= 1) {
      let total = 0;
      cartStoragePrices.forEach((elem) => {
        total += elem[0][0].prodQtd * Number(elem[0][0].prodPrice);
      });
      subtotalValue.innerHTML = `R$ ${total},00`;
      subtotalinalValueF.innerHTML = `R$ ${total},00`;
    }
  }
}
renderingSubBill();
export default renderingSubBill;
