import addToBasket from "./addToBasket"

export default function productCardTemplate(product) {

  const {id, name, price} = product
  const img = require(`../../assets/images/${id}.png`)
  
  const $product = document.createElement('li')
  $product.classList.add('card', 'products__card')

  const clickHandler = (e) => addToBasket(product)

  $product.insertAdjacentHTML('afterbegin', 
    `
        <img class="card__image" src="${img}" alt="no image" />

        <p class="card__name" >${name}</p>

        <div class="card__body">
          <div class="card__price">${price}</div>
          <button class="btn card__btn-add" >+</button>
        </div>
    `
    )

  const $btnAdd = $product.querySelector('.card__btn-add')
  $btnAdd.addEventListener("click", clickHandler)

  return {
    append: () => $product,
    remove: () => {
      $btnAdd.removeEventListener("click", clickHandler)
      $product.remove()
    }
  }
}