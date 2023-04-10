export default function productTemplate({name, price, img}) {
  return `
    <li class="card">
      <img alt="img" />
      <p>${name}</p>
      <span>${price}</span>
    </li>
    `
}