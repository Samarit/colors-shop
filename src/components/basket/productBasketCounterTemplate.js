import getStorageData from "../../utils/getStorageData"
import updateStorageData from "../../utils/updateStorageData"
import renderTotal from "./renderTotal"

export default function productBasketCounterTemplate(product) {

  const {id, count} = product

  const $counterWrapper = document.createElement('div')
  $counterWrapper.classList.add('counter', 'card__counter')

  $counterWrapper.insertAdjacentHTML('afterbegin', 
    `
      <button class="btn counter__button-decrement">+</button>
      <span class="counter__value"></span>
      <button class="btn counter__button-increment">-</button>
    `
  )

  const $decrement = $counterWrapper.querySelector('.counter__button-decrement')
  const $counterValue = $counterWrapper.querySelector('.counter__value')
  const $increment = $counterWrapper.querySelector('.counter__button-increment')

  $counterValue.textContent = count

  $decrement.onclick = (e) => {
    $counterValue.innerText --
    const basketStorage = getStorageData()
    
    basketStorage.forEach((el) => {
      if (el.id === id) {
        el.count --

        updateStorageData(basketStorage)
        renderTotal()

        if (el.count <= 0) $decrement.setAttribute('disabled', true)
      }
    })
  }

  $increment.onclick = (e) => {
    $counterValue.innerText ++
    const basketStorage = getStorageData()

    basketStorage.forEach((el) => {
      if (el.id === id) {
        el.count ++

        updateStorageData(basketStorage)
        renderTotal()

        $decrement.removeAttribute('disabled')
      }
    })
  }

  return $counterWrapper

}