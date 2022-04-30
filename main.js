/*abre e fecha o menu quando clicar no icone*/

const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em algum item do menu, esconder todo o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*mudar o header quando der scroll*/

const header = document.querySelector('header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    //scroll maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //menor que a altura do header
  }
})

/*Testimonials carousel slider swiper*/

const swiper = new Swiper('.swiper-container', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})
