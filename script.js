const checkBoxList = document.querySelectorAll('.custom-checkbox');
const inputField = document.querySelectorAll('.goal-input');
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')


const allGoals = {} // empty object to store all goals

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputField].every(function(input){
      return input.value
    })
    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle('completed')
      progressValue.style.width = '33.333%'
    }else{
      // errorLabel.style.display = 'block'
      progressBar.classList.add('show-error')
    }
  } )
})

inputField.forEach((input) => {
  input.addEventListener('focus', () => {
    progressBar.classList.remove('show-error')
  })
})

