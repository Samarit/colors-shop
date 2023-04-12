export default function productTemplate({name, price, id, tags}) {

  const img = require(`../../assets/images/${id}.png`)

  return `
    <li class="card">
      <img src=${img} />
      <p>${name}</p>
      <div class="price-bar">
        <span class="price-value">${price}</span>
        <button class="add">+</button>
      </div>
    </li>
    `
}