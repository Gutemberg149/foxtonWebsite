const bagshopMenu = document.querySelector(".bagshopMenu");
const Xclose = document.querySelector(".Xclose");
const html = document.getElementsByTagName("html");
const overLayBase = document.querySelector(".overLayBase");
const shopCartSideWay = document.querySelector(".shopCartSideWay");

function showCart() {
  bagshopMenu.addEventListener("click", () => {
    shopCartSideWay.style.right = 0;
    overLayBase.classList.add("overlayer");
    html[0].style.overflow = "hidden";
  });
}
function showCartGeneral() {
  shopCartSideWay.style.right = 0;
  overLayBase.classList.add("overlayer");
  html[0].style.overflow = "hidden";
}

function hideCart() {
  Xclose.addEventListener("click", () => {
    shopCartSideWay.style.right = "-37%";
    overLayBase.classList.remove("overlayer");
    html[0].style.overflow = "visible";
  });
}

overLayBase.addEventListener("click", () => {
  shopCartSideWay.style.right = "-37%";
  overLayBase.classList.remove("overlayer");
  html[0].style.overflow = "visible";
});

export { showCart, hideCart, showCartGeneral };
