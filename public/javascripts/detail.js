
// delete confirm
const dataPanel = document.querySelector('#data-panel')
dataPanel.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-delete')) {
    if (confirm('確定要刪除嗎？') === true) event.target.parentElement.submit()
  }
})
