$(document).ready(() => {
  //   scroll on .scroll-area horizontally
  if ($(window).width() > 1500) {
    $(document).scrollTop(0)
    $('.scroll-area').scrollLeft(270)
  } else if ($(window).width() > 1000) {
    $('.scroll-area').scrollLeft(200)
  }
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
