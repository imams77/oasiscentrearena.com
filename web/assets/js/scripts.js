function clickAnywhereToHide(selectedClass, removedClass, reverse = false) {
  // selectedClass : class yang mau di hide
  // removedClass : class yang mau dihilangkan
  // reverse : removedClass jadi class yang mau ditambahkan
  if (reverse) {
    $('body, html').click(() => {
      $(selectedClass).addClass(removedClass)
    })
  } else {
    $('body, html').click(() => {
      $(selectedClass).removeClass(removedClass)
    })
  }
  $(selectedClass).click((e) => {
    e.stopPropagation()
  })
  
}
function expandSubmenu (submenu) {
  // $('.has-submenu').addClass('collapsed')
  var hasSubMenu = document.querySelectorAll('.oca-menu > ul > li.has-submenu')
  for(let i = 0; i < hasSubMenu.length; i++) {
    if (hasSubMenu[i].dataset.submenu === submenu) {
      hasSubMenu[i].classList.toggle('collapsed')
    } else {
      hasSubMenu[i].classList.add('collapsed')
    }
  }
}
function calendarTriangle () {
  let x = document.querySelectorAll('.calendar-container')
  for (let i = 0; i < x.length; i++) {
    x[i].style.zIndex = i
  }
}
function setHeroVideoTextPosition (windowHeight) {
  let homeContainer = document.getElementById('home-video')
  let containerHeight = ''
  for (let i = 0; i < homeContainer.children.length; i++) {
    console.log(homeContainer.children[i])
    if (homeContainer.children[i].classList[0] === 'text') {
      containerHeight = homeContainer.children[i].clientHeight 
      console.log(containerHeight, windowHeight)
      homeContainer.children[i].style.top = (windowHeight / 2) - (containerHeight / 2) + 'px'
    }
  }
}
function bodyWrapperParallax () {
  let wrapper = document.querySelectorAll('.wrapper')[0]
  let scrollValue = window.scrollY
  wrapper.style.backgroundPositionY = -scrollValue/15 + 'px'
}
// get staired padding like
// lorem
//   lorem
//     lorem
// containerName = nama class / id
// padding = seberapa banyak paddingnya
function stairedPadding (containerName, padding, start = 0) {
  let x = document.querySelectorAll(containerName + ' > *')
  for (let i = 0; i < x.length; i++) {
    x[i].style.marginLeft = i * padding + start + 'px'
  }
}
function animate() {
  let scrollValue = window.scrollY
  let x = document.querySelectorAll('.sport-section')
  for (let i = 0; i < x.length; i++) {
    if(scrollValue >= x[i].offsetTop - windowHeight/1.5) {
      x[i].classList.add('active')
    } else {
      x[i].classList.remove('active')
    }
  }
  let homeCalendar = document.getElementById('footer-calendar')
  if(scrollValue >= homeCalendar.offsetTop - windowHeight / 1.5) {
    homeCalendar.classList.add('active')
  } else {
    homeCalendar.classList.remove('active')
  }
}
var calendarBackground = document.getElementById('footer-calendar')
var windowHeight = window.innerHeight
$(document).ready(() => {
  $('.slick').slick({
    arrows: false
  })
  setHeroVideoTextPosition(windowHeight)
  $('.hero-slider').slick()
  clickAnywhereToHide('.has-submenu','collapsed', true)
  //add panah ke bawah klo menu nya punya submenu
  $('.has-submenu > a').append('&nbsp; &nbsp;<i class="fas fa-chevron-down"></i>')
  stairedPadding('.visit-menu', 10, 10)
  calendarTriangle()
  animate()
})

$(document).scroll(() => {
  animate()
  bodyWrapperParallax()
  if ($(window).scrollTop() >= windowHeight) {
    $('header.fixed').addClass('active')
  } else {
    $('header.fixed').removeClass('active')
  }
  
  // calendarBackground.style.backgroundPositionY = window.scrollY / 3 + 'px'
})

$(window).resize(() => {
  windowHeight = window.innerHeight
  setHeroVideoTextPosition(windowHeight)
})