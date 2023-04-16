import { productsPage } from "../../main"

const $selectInput = document.querySelector('.select__input')
const $selectOptions = document.querySelectorAll('.dropdown__option')
const $selectOverlay = document.querySelector('.select__overlay')
const $selectInputText = $selectInput.querySelector('.select__text')

// Sort select handler
$selectInput.onclick = (e) => {
  e.preventDefault()
  $selectInput.classList.add('select__input_opened')
}

$selectOptions.forEach(option => {
  option.onclick = (e) => {
    e.stopPropagation()
    productsPage.order = e.target.dataset.value
    productsPage.sort()

    $selectInputText.innerText = e.target.innerText
    $selectInput.classList.remove('select__input_opened')
  }
})

$selectOverlay.onclick = () => $selectInput.classList.remove('select__input_opened')