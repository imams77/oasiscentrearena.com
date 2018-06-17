function initMap() {
  let position = {lat: -6.172639, lng: 106.951629}
  let center = {lat: position.lat, lng: position.lng}
  var map = new google.maps.Map(
    document.getElementById('oca-map'), 
    {zoom: 16, center}
  )
  var marker = new google.maps.Marker({
    position,
    map,
    icon: '/assets/images/marker.png'
  });
}
function clickAnywhereToHide(selectedClass, removedClass, reverse = 
  false) {
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
// scroll animation
function scrollAnimation (anchorId, selector, addedClass, timeout = 0) {
  let selectorArray = document.querySelectorAll(selector)
  let anchor = document.getElementById(anchorId)
  if (anchor.getBoundingClientRect().y < 0) {
    for (let i = 0; i< selectorArray.length; i++) {
      setTimeout (() => {
        selectorArray[i].classList.add(addedClass)
      }, timeout * i)
    }
  }
}
function parallaxBackground () {
  let bodyOffset = window.pageYOffset
  $('.background-image').css({'transform': 'translateY('+ -bodyOffset / 10 +'px)'})
}
function showModal () {
  $('#modal').addClass('active')
}
function hideModal () {
  $('#modal').removeClass('active')
  setTimeout(() => {
    $('#modal .subtitle').html('')
    $('#modal .content').html('')
  }, 200)
}
function fillRulesRegulations (name) {
  let selected = {}
  rules.map(rule => {
    if (rule.name === name) {
      selected = rule
      console.log(rule)
      $('#modal .subtitle').html(rule.title)
      $('#modal .content').html(rule.content)
    }
  })
}
function showRulesRegulations (name) {
  fillRulesRegulations (name)
  showModal()
}
function monthTransition (method, value = null) {
  $('#oca-calendar').removeClass('active')
  setTimeout(() => {
    if (value) {
      $('#oca-calendar').fullCalendar(method, value);
    } else {
      $('#oca-calendar').fullCalendar(method);
    }
  }, 100)
  setTimeout(() => {
    $('#oca-calendar').addClass('active');
  }, 200)
}
// calendar
function nextMonth() {
  monthTransition('next')
}
function prevMonth() {
  monthTransition('prev')
}
function goToMonth() {
  let month = $('#calendar-input-month').val()
  let year = $('#calendar-input-year').val()
  let res = `${year}-${month}`
  console.log(res)
  monthTransition('gotoDate', res)
  // $('#oca-calendar').fullCalendar(  )
}
function generateYear () {
  let today = new Date()
  let thisYear = today.getFullYear()
  for (let i = thisYear; i >= 2017; --i ) {
  //   // while(thisYear - i > 2015) {
      $('#calendar-input-year').append(`<option value="${i}">${i}</option>`)
  //   // }
  }
}
var calendarBackground = document.getElementById('footer-calendar')
var windowHeight = window.innerHeight
$(document).ready(() => {
  generateYear()
  var today = new Date();
  try {
    $('#oca-calendar').fullCalendar({
      googleCalendarApiKey: 'AIzaSyD6Ia0zEUDL1X6sPZoRB0FJVUi_SrZUuw4',
      events: {
        googleCalendarId: 'michelle@oasiscentrearena.com',
        className: 'oca-calendar-event'
      },
      now: today,
      header: { center: 'month,agendaWeek' }, // buttons for switching between view
    })
  } catch (e) {
    console.log('no calendar')
  }
  try {
    $('.news-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: `<span class="navigation next"><i class="fa fa-chevron-right fa-2x"></i></span>`,
      prevArrow: `<span class="navigation prev"><i class="fa fa-chevron-left fa-2x"></i></span>`,
      dots: true,
      appendDots: $('.dots-container')
    })
  } catch (e) {
    console.log('no news slider')
  }
  $('#modal').click(() => {
    hideModal()
    $('#modal-container').click(e => {
      e.stopPropagation()
      e.preventDefault()
    })
  })
  $('.background-image').addClass('active')
  $('.slideshow').slick({
    arrows: false,
    dots: true,
    appendDots: $('.dots-container'),
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  })
  clickAnywhereToHide('.has-submenu','collapsed', true)
  //add panah ke bawah klo menu nya punya submenu
  $('.has-submenu > a').append('&nbsp; &nbsp;<i class="fas fa-chevron-down"></i>')
  stairedPadding('.visit-menu', 10, 10)
  calendarTriangle()
  animate()
})

$(document).scroll(() => {
  animate()
  parallaxBackground()
  bodyWrapperParallax()
  
  if ($(window).scrollTop() >= windowHeight) {
    $('header.fixed').addClass('active')
  } else {
    $('header.fixed').removeClass('active')
  }
  
  // calendarBackground.style.backgroundPositionY = window.scrollY / 3 + 'px'
})

