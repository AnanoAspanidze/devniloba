registerListeners()

function showModal(dataId) {
  hideAllModals()
  const modalElement = document.querySelector(
    '.modal[data-id="' + dataId + '"]',
  )
  if (modalElement) {
    modalElement.classList.add('show')
    modalElement.querySelector('.modal-content').scrollTo(0, 0)
    document.body.classList.add('no-scroll')
  }
}

function hideAllModals() {
  document
    .querySelectorAll('.modal')
    .forEach((modalElement) => modalElement.classList.remove('show'))
  document.body.classList.remove('no-scroll')
}

function registerListeners() {
  document.querySelectorAll('.backdrop').forEach((backgdropElement) => {
    backgdropElement.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        hideAllModals()
      }
    })
  })

  document.querySelectorAll('.dot').forEach((dotElement) => {
    dotElement.addEventListener('click', (e) =>
      showModal(e.target.dataset.target),
    )
  })

  document.querySelectorAll('.modal-close').forEach((dotElement) => {
    dotElement.addEventListener('click', () => hideAllModals())
  })

  document.querySelectorAll('#continue').forEach((dotElement) => {
    dotElement.addEventListener('click', () => hideAllModals())
  })

  showModal(5)
}

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
    type: 'loop',
    perMove: 1,
    center: true,
    width: '100%',
    height: '40%',
    padding: '20%',
    gap: '2rem',
    pagination: false,
  })
  splide.mount()
})

$(document).ready(() => {
  //   scroll on .scroll-area horizontally
  if ($(window).width() > 1500) {
    $(document).scrollTop(0)
    $('.scroll-area').scrollLeft(270)
  } else if ($(window).width() > 1000) {
    $('.scroll-area').scrollLeft(200)
  }

  if (
    $(window).height() > $(window).width() / 1.4 ||
    $(window).width() > 1500
  ) {
    $('.calculate-height').css(
      'height',
      `calc(100vh - ${$('.about-footer')[0]?.scrollHeight}px)`,
    )
  }
  $(window).resize(() => {
    if (
      $(window).height() > $(window).width() / 1.4 ||
      $(window).width() > 1500
    ) {
      $('.calculate-height').css(
        'height',
        `calc(100vh - ${$('.about-footer')[0]?.scrollHeight}px)`,
      )
    } else {
      $('.calculate-height').css('height', 'auto')
    }
  })

  $('.modal-close').click(() => {
    hideAllModals()
  })

  $('#continue').click(() => {
    console.log('clicked')
    hideAllModals()
  })
})
//   $('.scroll-area').on('scroll', () => {
//     if ($(document).scrollTop() === 0 && $('.scroll-area').scrollTop() !== 0) {
//       $(document).scrollTop(110)
//     }

//     if ($(document).scrollTop() !== 0 && $('.scroll-area').scrollTop() === 0) {
//       $(document).scrollTop(0)
//     }

//     if (
//       $('.scroll-area').scrollTop() ===
//       $('.scroll-area')[0].scrollHeight - $('.scroll-area').height() - 100
//     ) {
//       $('.description').removeClass('dissapear')
//       $('.footer').removeClass('dissapear')
//     } else {
//       $('.description').addClass('dissapear')
//       $('.footer').addClass('dissapear')
//     }
//   })

//   $(document).on('scroll', () => {
//     if ($(document).scrollTop() > 0 && $('.scroll-area').scrollTop() !== 0) {
//       $('.header').addClass('dissapear')
//     }
//     if ($(document).scrollTop() === 0 && $('.scroll-area').scrollTop() === 0) {
//       $('.header').removeClass('dissapear')
//     }
//   })

const disableClick = () => {
  $('a').click(function (e) {
    e.preventDefault()
  })
}
