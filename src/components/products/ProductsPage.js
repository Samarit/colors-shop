import filterProducts from '../../utils/filterProducts'
import sortProducts from '../../utils/sortProducts'
import productCardTemplate from './productCardTemplate'
import productsData from '/src/data/products.js'

export default class ProductsPage {
  constructor() {
    this.allProducts = productsData // Array with all products data
    this.currentProducts = productsData // Rendering data
    
    this.element = null // DOM element where products render to

    this.order = '' // sorting order state
    this.filters = new Set // collection of filters tags 
  }

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

    //Add product as string of html
    this.currentProducts.forEach( product => this.element.appendChild(productCardTemplate(product))) 
  }
}

