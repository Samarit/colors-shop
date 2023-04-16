import ProductsPage from "./components/products/ProductsPage";
import './components/select/select.js'
import './components/slider/slider.js'
import './components/basket/basket.js'
import './styles/index.sass'

// ===Initialization of Products view component===
const $products = document.getElementById('products')
export const productsPage = new ProductsPage($products)


try {
  productsPage.init($products)
} catch (error) {
  console.error(error.message)
}



// Filter handlers
const $filter = document.querySelector('.filter')
const $filterWrapper = document.querySelector('.filter__wrapper')
const $filterContainer = document.querySelector('.filter__container')
const $filterToggle = document.getElementById('filter-toggle')
const $filterInputs = document.querySelectorAll('#filter .filter__input[type="checkbox"]')

$filterContainer.onclick = e => e.stopPropagation() 
$filterToggle.onclick = () => $filter.classList.add('filter_opened')
$filterWrapper.onclick = () => $filter.classList.remove('filter_opened')

$filterInputs.forEach( filter => {
  filter.onchange = e => {
    e.preventDefault()
    if (e.target.checked) {
      productsPage.filters.add( e.target.value )
    } else productsPage.filters.delete( e.target.value )

    productsPage.filter()
  }
})