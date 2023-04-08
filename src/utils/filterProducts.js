export default function filterProducts() {
  if (this.filters.size === 0) {
    this.currentProducts = this.allProducts
    return false
  }

  this.currentProducts = this.allProducts.filter(product => {
    return Array.from(this.filters).every(el => product.tags.includes(el))
  })
}