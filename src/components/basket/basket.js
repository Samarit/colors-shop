import getStorageData from "../../utils/getStorageData";
import renderBasket from "./renderBasket";

const $basket = document.querySelector('.basket')
const $basketContainer = document.querySelector('.basket__container')
const $basketOpenBtn = document.getElementById('basket-open')
const $basketCloseBtn = document.getElementById('basket-close')
const $basketQuantity = document.querySelector('.basket__quantity .text')
const $basketClear = document.querySelector('.basket__clear')

const basketStorage = getStorageData()

renderBasket()

$basketOpenBtn.onclick = () => $basket.classList.add('basket_opened')
$basketCloseBtn.onclick = () => $basket.classList.remove('basket_opened')
$basket.onclick = (e) => {
  e.stopPropagation()
  $basket.classList.remove('basket_opened')
}
$basketContainer.onclick = e => e.stopPropagation()
$basketClear.onclick = () => {
  localStorage.removeItem('basket')
  renderBasket()
}

$basketOpenBtn.innerText = basketStorage.length
$basketQuantity.innerText = basketStorage.length + ' товаров'