import getStorageData from "../../utils/getStorageData"
import updateStorageData from "../../utils/updateStorageData"
import renderBasket from "../basket/renderBasket"

export default function addToBasket(product) {
  const {id, name, price} = product

  const basketStorage = getStorageData()

  if (basketStorage.length === 0) {
    updateStorageData([{id, name, price, count: 1}])
    renderBasket()
    return false
  }

  for (let i = 0; i < basketStorage.length; i++) {
    const element = basketStorage[i]

    if (element.id === id) {
      element.count++
      updateStorageData(basketStorage)
      break
    } else {
      updateStorageData([...basketStorage, {id, name, price, count: 1}])
    }
  }

  renderBasket()
}