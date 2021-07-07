
// delete confirm
const dataPanel = document.querySelector('#data-panel')
dataPanel.addEventListener('click', function (event) {
  if (event.target.classList.contains('btn-delete')) {
    if (confirm('確定要刪除嗎？') === true) event.target.parentElement.submit()
  }
})

// sortBy event listener
const sortBy = document.querySelector('#sortBy')
sortBy.addEventListener('change', () => document.querySelector('#search-bar').submit())
// set sortBy.value in index.handlebars
// sortBy.value = '{{query.sortBy}}' || '_id'
