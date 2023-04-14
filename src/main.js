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
const $filter = document.getElementById('filter')
const $filterWrapper = document.querySelector('.filter-wrapper')
const $filterToggle = document.getElementById('filter-toggle')
const $filterInputs = document.querySelectorAll('#filter input[type="checkbox"]')

$filter.onclick = e => e.stopPropagation() 
$filterToggle.onclick = () => $filterWrapper.classList.add('show')
$filterWrapper.onclick = () => $filterWrapper.classList.remove('show')

$filterInputs.forEach( filter => {
  filter.onchange = e => {
    e.preventDefault()
    if (e.target.checked) {
      productsPage.filters.add( e.target.value )
    } else productsPage.filters.delete( e.target.value )

    productsPage.filter()
  }
})