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
      break;

    case 'new':
      currentProducts.sort((a, b) => {
        console.log(a.tags)
        if (a.tags.includes('new') || !b.tags.includes('new')) return -1
        return 1
      })
    default:
      break;
  }
}