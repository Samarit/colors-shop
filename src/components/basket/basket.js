import getStorageData from "../../utils/getStorageData";
import renderBasket from "./renderBasket";

const $basketWrapper = document.querySelector('.basket-wrapper')
const $basketContainer = document.querySelector('.basket-container')
const $basketOpenBtn = document.getElementById('basket-open')
const $basketCloseBtn = document.getElementById('basket-close')
const $basketQuantity = document.querySelector('.basket-quantity .text')
const $basketClear = document.querySelector('.basket-clear')

const basketStorage = getStorageData()

renderBasket()

$basketOpenBtn.onclick = () => $basketWrapper.classList.add('open')
$basketCloseBtn.onclick = () => $basketWrapper.classList.remove('open')
$basketWrapper.onclick = (e) => {
  e.stopPropagation()
  $basketWrapper.classList.remove('open')
}
$basketContainer.onclick = e => e.stopPropagation()
$basketClear.onclick = () => {
  localStorage.removeItem('basket')
  renderBasket()
}

$basketOpenBtn.innerText = basketStorage.length
$basketQuantity.innerText = basketStorage.length + ' товаров'