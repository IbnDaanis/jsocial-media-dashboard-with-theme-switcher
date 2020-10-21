const myToggle = document.querySelector('#myToggle')
const toggle = document.querySelector('.toggle')
const count = document.querySelectorAll('.count')
const card = document.querySelectorAll('.card')
const number = document.querySelectorAll('.number')
const headingTitle = document.querySelector('.nav-title h1')
const sectionTitle = document.querySelector('.section-title h2')

myToggle.addEventListener('click', e => {

  if (myToggle.checked === true) {
    console.log('checked')
    document.body.classList.toggle('body-dark')
    headingTitle.classList.toggle('dark-font-white')
    sectionTitle.classList.toggle('dark-font-white')
    count.forEach(x => x.classList.toggle('dark-font-white'))
    card.forEach(x => x.classList.toggle('card-dark'))
    number.forEach(x => x.classList.toggle('dark-font-white'))
    toggle.classList.toggle('toggle-dark')

  } else if (myToggle.checked === false) {
    document.body.classList.toggle('body-dark')
    headingTitle.classList.toggle('dark-font-white')
    sectionTitle.classList.toggle('dark-font-white')
    count.forEach(x => x.classList.toggle('dark-font-white'))
    card.forEach(x => x.classList.toggle('card-dark'))
    number.forEach(x => x.classList.toggle('dark-font-white'))
    console.log('unchecked')
    toggle.classList.toggle('toggle-dark')
  }
})