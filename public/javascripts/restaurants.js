
// imagePreview
const inputImg = document.querySelector('#image')
inputImg.addEventListener('blur', function imagePreview () {
  document.querySelector('#imagePreviewBlock').src = inputImg.value
})

// validation
const form = document.querySelector('.needs-validation')
form.addEventListener('submit', function onFormSubmitted (event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.classList.add('was-validated')
}, false)
