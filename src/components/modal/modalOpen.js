import deleteFromBasket from "../basket/deleteFromBasket"
import modalCreate from "./modalCreate"

export default function modalOpen(id) {
  return new Promise((resolve, reject) => {
    const modal = modalCreate([
      // Confirm button
      {
          text: 'Удалить',
          handler (e) {
              deleteFromBasket(id)
              modal.close()
              resolve()
          }
      },
      // Cancel button
      {
          text: 'Отмена',
          handler (e) {
              if (e.target !== this) return
              modal.close()
              reject(new Error)
          }
      }
  ])

  modal.open()
  })
}