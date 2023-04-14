export default function modalCreate(buttons = []) {
  const $modal = document.createElement('div')
  $modal.classList.add('modal')
  
  const confirm = buttons[0].handler
  const decline = buttons[1].handler

  $modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-title">
            Подтверждение удаления
        </div>
        <div class="modal-text">
          Вы действительно хотите удалить товар?
        </div>
      </div>
    </div>
  `)

  const $btnConfirm = document.createElement('button')
  $btnConfirm.classList.add('modal-button__confirm')
  $btnConfirm.textContent = buttons[0].text
  $btnConfirm.onclick = confirm

  const $btnDecline = document.createElement('button')
  $btnDecline.classList.add('modal-button__decline')
  $btnDecline.textContent = buttons[1].text
  $btnDecline.onclick = decline

  
  const $footer = document.createElement('div')
  $footer.classList.add('modal-footer')
  $footer.append($btnConfirm, $btnDecline)

  const $modalContainer = $modal.querySelector('.modal-container')
  $modalContainer.insertAdjacentElement('beforeend', $footer)

  document.body.append($modal)

  return {
    open() {
      $modal.classList.add('open')
    },
    close() {
        $modal.classList.remove('open')
        $modal.remove()
    }
}
}