const DEFAULT_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"

// img
const inputImg = document.querySelector('#image')
inputImg.addEventListener('blur', function imagePreview(event) {
  const imagePreviewBlock = document.querySelector('#imagePreviewBlock')
  if (inputImg.value) { imagePreviewBlock.src = inputImg.value } else {
    imagePreviewBlock.src = DEFAULT_IMAGE
  }
})

// validation
const form = document.querySelector('.needs-validation')
form.addEventListener('submit', function onFormSubmitted(event) {
  if (!form.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }

  form.classList.add('was-validated')
}, false)


