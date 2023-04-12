import { productsPage } from "../../main"

const $selectInput = document.querySelector('.select-input')
const $selectOptions = document.querySelectorAll('.select-dropdown__option')
const $selectShadow = document.querySelector('.select-shadow')
const $selectInputText = $selectInput.querySelector('.text')

// Sort select handler
$selectInput.onclick = (e) => {
  e.preventDefault()
  $selectInput.classList.add('open')
}

$selectOptions.forEach(option => {
  option.onclick = (e) => {
    e.stopPropagation()
    productsPage.order = e.target.dataset.value
    productsPage.sort()

    $selectInputText.innerText = e.target.innerText
    $selectInput.classList.remove('open')
  }
})

$selectShadow.onclick = () => $selectInput.classList.remove('open')