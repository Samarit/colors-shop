import modalOpen from "../modal/modalOpen"
import productBasketCounterTemplate from "./productBasketCounterTemplate"

export default function productBasketTemplate(product) {

  const {id, name, price} = product
  const img = require(`../../assets/images/${id}.png`)

  const $product = document.createElement('li')
  $product.classList.add('card', 'basket__card')

  $product.insertAdjacentHTML('afterbegin', 
    `
        <img class="card__image" src="${img}" alt="no image" />

        <div class="card__body">
          <p class="card__name" >${name}</p>
          <span class="card__price">${price}</span>
        </div>
    `
  )

  // Card counter buttons
  const $counterWrapper = productBasketCounterTemplate(product)

  const $buttonDelete = document.createElement('button')
  $buttonDelete.classList.add('card__button-delete')
  $buttonDelete.textContent = '×'
  $buttonDelete.onclick = () => modalOpen(id)
  
  $product.append( $counterWrapper, $buttonDelete)

  return $product
}