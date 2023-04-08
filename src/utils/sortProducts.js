export default function sortProducts() {

  const currentProducts = this.currentProducts
  const order = this.order

  if (!currentProducts || !order) throw new Error('Products or order is empty')

  switch (order) {
    //Expensive first
    case 'expensive':
      currentProducts.sort((a, b) => b.price - a.price)
      break;
    
    case 'cheap':
      currentProducts.sort((a, b) => a.price - b.price)
    default:
      break;
  }
}