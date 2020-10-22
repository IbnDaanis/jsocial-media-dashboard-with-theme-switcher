const myToggle = document.querySelector('#myToggle')
const toggleButton = document.querySelector('.toggle')
const count = document.querySelectorAll('.count')
const card = document.querySelectorAll('.card')
const box = document.querySelector('.box')
const number = document.querySelectorAll('.number')
const headingTitle = document.querySelector('.nav-title h1')
const sectionTitle = document.querySelector('.section-title h2')

myToggle.checked = JSON.parse(localStorage.getItem('checked'))

function setDarkMode() {
  document.body.classList.toggle('body-dark')
  headingTitle.classList.toggle('dark-font-white')
  sectionTitle.classList.toggle('dark-font-white')
  box.classList.toggle('box-dark')
  count.forEach(item => item.classList.toggle('dark-font-white'))
  card.forEach(item => item.classList.toggle('card-dark'))
  number.forEach(item => item.classList.toggle('dark-font-white'))
  toggleButton.classList.toggle('toggle-dark')
  localStorage.setItem('checked', myToggle.checked)
}

!myToggle.checked && setDarkMode()

