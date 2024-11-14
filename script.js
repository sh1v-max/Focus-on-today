const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputField = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {} // empty object to store all goals
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length
// see the reference image for help
progressValue.style.width = `${completedGoalsCount / 3 * 100}%`

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener('click', (e) => {
    const allGoalsAdded = [...inputField].every(function (input) {
      return input.value
    })

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle('completed')
      progressValue.style.width = '33.333%'
      const inputId = checkBox.nextElementSibling.id //selecting the id of the input field
      allGoals[inputId].completed = !allGoals[inputId].completed
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length
      progressValue.style.width = `${completedGoalsCount / 3 * 100}%`
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`
      localStorage.setItem('allGoals', JSON.stringify(allGoals))
    } else {
      // errorLabel.style.display = 'block'
      progressBar.classList.add('show-error')
    }
  })
})

inputField.forEach((input) => {
  input.value = allGoals[input.id].name

  if (allGoals[input.id].completed) {
    input.parentElement.classList.add('completed')
  }

  input.addEventListener('focus', () => {
    progressBar.classList.remove('show-error')
  })

  input.addEventListener('input', (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    }
    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
})
