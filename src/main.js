import ProductsPage from "./components/products/ProductsPage";
import './styles/index.sass'

// ===Initialization of Products component===
const $products = document.getElementById('products')
const productsPage = new ProductsPage($products)

try {
  productsPage.init($products)
} catch (error) {
  console.error(error.message)
}

// Sort select handler
const $selectSort = document.getElementById('sort')
$selectSort.onchange = (e) => {
  e.preventDefault()
  productsPage.order = e.target.value
  productsPage.sort()
}


// Filters handler
const $filters = document.querySelectorAll('.products-filters > input[type="checkbox"]')
$filters.forEach($filter => {
  $filter.onchange = e => {
    e.preventDefault()
    if (e.target.checked) {
      productsPage.filters.add(e.target.value)
    } else productsPage.filters.delete(e.target.value)

    productsPage.filter()
  }
})