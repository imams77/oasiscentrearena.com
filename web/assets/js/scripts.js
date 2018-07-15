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
function animateHomeVideo (direction) {
  let windowHeight = window.innerHeight
  let headerHeight = 150
  let smallHeaderHeight = 80
  $('.hero-video').css({'height': (windowHeight-headerHeight) + 'px'})
  let videoHeight = $('#home-video').height()
  let alreadyScrolling = false
  if (window.scrollY > 0 && window.scrollY < videoHeight) {
    if (direction === 'up') {
      // $("html, body").animate({ scrollTop: 0 }, 500);
    } else {
      // $("html, body").animate({ scrollTop: videoHeight }, 500);
    }
  }
  // }
  if (window.scrollY > videoHeight) {
    $('#scrollAnchor').addClass('home')
    $('header').addClass('fixed small')
    setTimeout(() => {
    }, 200)
  } else {
    // $('header').addClass('absolute')
    $('#scrollAnchor').removeClass('home')
    $('header').removeClass('fixed small')
    // $('.hero-video').addClass('active')
  }
  // console.log(scroll)
  // if (scroll > 0 && scroll <= (windowHeight - headerHeight)) {
    // if (!$('.hero-video').hasClass('active')) {
      // for (let i = 1; i <= (windowHeight - headerHeight); i++) {
        // $('html').css({'transform': 'translateY(0px))'})
        // while(i < (windowHeight - headerHeight)) {
        //   setTimeout(() => {
        //     window.scrollTo(0, i)
        //     // $('.hero-video').css({'height': i + 'px'})
        //     // $('.hero-video video').css({'opacity': '1'})
        //   }, 1000)
        // }
      // }
      
    // }
  // }
  // if (mode === 'show') {
  // } else {
  //   if ($('.hero-video').hasClass('active')) {
  //     for (let i = 0; i <= (windowHeight - headerHeight); i++) {
  //       setTimeout(() => {
  //         $('.hero-video').css({'height': ((windowHeight - headerHeight) - i) + 'px'})
  //       }, 100)
  //       // if (i === (windowHeight-headerHeight)) {
  //       //   $('header').css({'opacity': 1, 'bottom': 'calc(100% - 150px)'})
  //       // }
  //     }
  //     $('header').addClass('fixed')
  //     $('.hero-video').removeClass('active')
  //     $('header').removeClass('absolute')
  //   // }
  // }
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
function sendSubscription (email) {
  showModal()
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
function scrollDown () {
  $("html, body").animate({ scrollTop: $('#scrollAnchor').offset().top }, 1000);
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
  $('#modal-container').removeClass()
  setTimeout(() => {
    $('#modal .subtitle').html('')
    $('#modal .content').html('')
  }, 200)
}
function fillModal (id, arrays, containerClass) {
  if (containerClass) {
    $('#modal-container').addClass(containerClass)
  }
  let selected = {}
  arrays.map(arr => {
    if (arr.id === id) {
      selected = arr
      $('#modal .title').html(arr.title)
      $('#modal .subtitle').html(arr.subtitle)
      $('#modal .content').html(arr.content)
    }
  })
}
function facilitiesHeaderResponsive () {
  let initial = 1680
  let mediumWidth = 1500
  let smallWidth = 1400
  let verySmallWidth = 990
  let windowWidth = window.innerWidth
  if (windowWidth > initial) {
    $('#facilities-banner-items .items-container .items-item-container').css({left: '0px'})
  }else if (windowWidth < initial && windowWidth > mediumWidth) {
    $('#facilities-banner-items .items-container .items-item-container').css({left: (windowWidth - initial) + 'px'})
  } else if (windowWidth < mediumWidth && windowWidth > smallWidth) {
    $('#facilities-banner-items .items-container .items-item-container').css({left: (windowWidth - initial) + 100 + 'px'})
  } else if  (windowWidth < smallWidth) {
    $('#facilities-banner-items .items-container .items-item-container').css({left: (windowWidth - smallWidth + -100) + 'px'})
  }

}
function showCoachProfile (id) {
  fillModal (id, coaches, 'coaches-modal')
  showModal ()
}
function showRulesRegulations (id) {
  fillModal (id, rules)
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
  animateHomeVideo('show')
  $('.calendar-container').click(() => {
    window.location.href = '/contact-us';
  })
  facilitiesHeaderResponsive()
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
  try {
    $('.slideshow').slick({
      arrows: true,
      dots: true,
      appendDots: $('.dots-container'),
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: `<span class="navigation next"><i class="fa fa-chevron-right fa-2x"></i></span>`,
      prevArrow: `<span class="navigation prev"><i class="fa fa-chevron-left fa-2x"></i></span>`
    })
  } catch (e) {
    console.log('no slideshow')
  }
  clickAnywhereToHide('.has-submenu','collapsed', true)
  //add panah ke bawah klo menu nya punya submenu
  $('.has-submenu > a').append('&nbsp; &nbsp;<i class="fas fa-chevron-down"></i>')
  stairedPadding('.visit-menu', 10, 10)
  calendarTriangle()
  animate()
})

$(window).resize(() => {
  facilitiesHeaderResponsive()
})

var iScrollPos = 0;
$(document).scroll(() => {
  animate()
  parallaxBackground()
  bodyWrapperParallax()
  
  var iCurScrollPos = $(this).scrollTop();
  if (iCurScrollPos > iScrollPos) {
    animateHomeVideo('down')
  } else {
    animateHomeVideo('up')
  }
  iScrollPos = iCurScrollPos;
  // if (window.scrollY < 1) {
  //   animateHomeVideo('show')
  // } else {
  //   animateHomeVideo('hide')
  // }
  // if ($(window).scrollTop() >= windowHeight) {
  //   $('header.fixed').addClass('active')
  // } else {
  //   $('header.fixed').removeClass('active')
  // }
  
  // calendarBackground.style.backgroundPositionY = window.scrollY / 3 + 'px'
})

