import getStorageData from "../../utils/getStorageData";
import updateStorageData from "../../utils/updateStorageData";
import renderBasket from "./renderBasket";

export default function deleteFromBasket(id) {
  const basketStorage = getStorageData()
  console.log('deleted', id)

  basketStorage.every((el, index) => {
    if (el.id === id ) {
      basketStorage.splice(index, 1)
      updateStorageData(basketStorage)
      renderBasket()
      return false
    }
    return true
  })
}