import getStorageData from "../../utils/getStorageData"

const $basketTotal = document.getElementById('total')

export default function renderTotal() {
  const basketStorage = getStorageData()

  let total = 0

  basketStorage.forEach(el => total += el.price * el.count)

  $basketTotal.innerText = total
}