import filterProducts from '../../utils/filterProducts'
import sortProducts from '../../utils/sortProducts'
import productCardTemplate from './productCardTemplate'
import productsData from '/src/data/products.js'

export default class ProductsPage {
  constructor() {
    this.allProducts = productsData // Array with all products data
    this.currentProducts = productsData // Rendering data
    
    this.container = null // DOM element where products render to
    this.totalDisplay = null // DOM element where total value displayed
    this.listenerRemovers = [] // Array of remove methods of each product card after sort/filter

    this.order = '' // sorting order state
    this.filters = new Set // collection of filters tags 
  }

  // Init render
  init(element) {

    if (!element.isConnected) {
      throw new Error('Provided element is not a valid DOM element')
    }

    this.container = element.querySelector('.products__container')
    this.totalDisplay = element.querySelector('.products__total')

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
    this.listenerRemovers.map( remover => remover())
    this.container.innerHTML = ''
    this.listenerRemovers = []
  }

  render() {
    this.clear()

    //Add product as string of html
    this.currentProducts.forEach( product => {

      const $productCard = productCardTemplate(product).append()

      this.container.appendChild($productCard)

      this.listenerRemovers.push($productCard.remove.bind($productCard))
    
    }) 

    this.totalDisplay.textContent = this.currentProducts.length
  }
}

