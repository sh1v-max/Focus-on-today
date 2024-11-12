const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputField = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputField].every(function(input){
      return input.value
    })
    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle('completed')
    }else{
      // errorLabel.style.display = 'block'
      progressBar.classList.add('show-error')
    }
  } )
})

