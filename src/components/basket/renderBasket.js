import getStorageData from "../../utils/getStorageData";
import productBasketTemplate from "./productBasketTemplate";
import renderTotal from "./renderTotal";

const $basket = document.getElementById('basket')
const $basketQuantity = document.querySelector('.basket-quantity .text')
const $basketOpen = document.querySelector('#basket-open')

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