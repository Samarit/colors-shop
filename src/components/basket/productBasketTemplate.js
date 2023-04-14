import modalOpen from "../modal/modalOpen"
import deleteFromBasket from "./deleteFromBasket"
import productBasketCounterTemplate from "./productBasketCounterTemplate"

export default function productBasketTemplate(product) {

  const {id, name, price} = product

  const $product = document.createElement('li')
  $product.classList.add('card')
  
  const $img = document.createElement('img')
  const img = require(`../../assets/images/${id}.png`)
  $img.setAttribute('src', img)

  const $info = document.createElement('div')
  $info.classList.add('product-info')

  const $name = document.createElement('p')
  $name.innerText = name

  const $priceValue = document.createElement('span')
  $priceValue.classList.add('price-value')
  $priceValue.innerText = price

  const $counterWrapper = productBasketCounterTemplate(product)

  const $buttonDelete = document.createElement('button')
  $buttonDelete.classList.add('basket-button__delete')
  $buttonDelete.onclick = () => modalOpen(id)
  
  $product.append($img, $info, $counterWrapper, $buttonDelete)
  $info.append($name, $priceValue)

  

  return $product
}