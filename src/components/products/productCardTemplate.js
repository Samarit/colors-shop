import getStorageData from "../../utils/getStorageData"
import updateStorageData from "../../utils/updateStorageData"
import addToBasket from "./addToBasket"

export default function productCardTemplate(product) {

  const {id, name, price} = product
  
  const $product = document.createElement('li')
  $product.classList.add('card')
  
  const $img = document.createElement('img')
  const img = require(`../../assets/images/${id}.png`)
  $img.setAttribute('src', img)

  const $name = document.createElement('p')
  $name.innerText = name

  const $priceBar = document.createElement('div')
  $priceBar.classList.add('price-bar')

  const $priceValue = document.createElement('span')
  $priceValue.classList.add('price-value')
  $priceValue.innerText = price

  const $buttonAdd = document.createElement('button')
  $buttonAdd.classList.add('add')

  $buttonAdd.onclick = () => addToBasket(product)

  $priceBar.append($priceValue, $buttonAdd)
  $product.append($img, $name, $priceBar)

  return $product
}