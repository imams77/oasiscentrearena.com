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
function expandSubmenu(submenu) {
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
function calendarTriangle() {
  let x = document.querySelectorAll('.calendar-container')
  for (let i = 0; i < x.length; i++) {
    x[i].style.zIndex = i
  }
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
  let homeCalendar = document.getElementById('home-calendar')
  if(scrollValue >= homeCalendar.offsetTop - windowHeight / 1.5) {
    homeCalendar.classList.add('active')
  } else {
    homeCalendar.classList.remove('active')
  }
}
var calendarBackground = document.getElementById('home-calendar')
var windowHeight = window.innerHeight
$(document).ready(() => {
  clickAnywhereToHide('.has-submenu','collapsed', true)
  //add panah ke bawah klo menu nya punya submenu
  $('.has-submenu > a').append('&nbsp; &nbsp;<i class="fas fa-chevron-down"></i>')
  stairedPadding('.visit-menu', 10, 10)
  calendarTriangle()
  animate()
})

$(document).scroll(() => {
  animate()
  // calendarBackground.style.backgroundPositionY = window.scrollY / 3 + 'px'
})