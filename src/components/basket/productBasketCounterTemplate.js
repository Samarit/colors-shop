import getStorageData from "../../utils/getStorageData"
import updateStorageData from "../../utils/updateStorageData"
import renderTotal from "./renderTotal"

export default function productBasketCounterTemplate(product) {

  const {id, count} = product

  const $counterWrapper = document.createElement('div')
  const $decrement = document.createElement('button')
  const $increment = document.createElement('button')
  const $counter = document.createElement('span')

  $decrement.innerText = '-'
  $increment.innerText = '+'
  $counter.innerText = count

  $decrement.onclick = (e) => {
    $counter.innerText --
    const basketStorage = getStorageData()

    console.log(basketStorage[0].count)
    
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
    $counter.innerText ++
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

  $counterWrapper.append($decrement, $counter, $increment)

  return $counterWrapper

}