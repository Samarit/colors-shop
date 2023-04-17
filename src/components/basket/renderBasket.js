import getStorageData from "../../utils/getStorageData";
import productBasketTemplate from "./productBasketTemplate";
import renderTotal from "./renderTotal";

const $basket = document.getElementById('basket') // Where product cards render to
const $basketQuantity = document.querySelector('.basket__quantity .text')
const $basketOpen = document.getElementById('basket-open') // Button in navbar

export default function renderBasket() {
  const basketStorage = getStorageData()

  if (basketStorage.length === 0) {
    $basket.innerText = ''
  } else {
    $basket.innerText = ''
    basketStorage.forEach((el) => $basket.appendChild(productBasketTemplate(el)))
  }
  
  $basketOpen.innerText = basketStorage.length
  $basketQuantity.innerText = basketStorage.length + ' товаров'

  renderTotal()

}