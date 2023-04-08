import filterProducts from '../../utils/filterProducts'
import sortProducts from '../../utils/sortProducts'
import productsData from '/src/data/products.js'

export default class ProductsPage {
  allProducts = productsData // Array with all products data
  currentProducts = productsData // Rendering data
  
  element = null // DOM element where products render to

  order = '' // sorting order
  filters = new Set // collection of filters tags

  // Init render
  init(element) {
    if (!element.isConnected) {
      throw new Error('Provided element is not a valid DOM element')
    }
    this.element = element
    this.render()
  }

  filter() {
    filterProducts.call(this)
    this.render()
  }

  sort() {
    sortProducts.call(this)
    this.render()
  }

  clear() {
    this.element.innerHTML = ''
  }

  render() {
    this.clear()

    this.currentProducts.forEach( ({name, price}) => {
      this.element.innerHTML += `
      <li>
        <img alt="img" />
        <p>${name}</p>
        <span>${price}</span>
      </li>
      `
    })
  }
}
