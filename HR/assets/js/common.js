$(document).ready(function () {
 // -----------------------------------------------
 // set vh variable
 // -----------------------------------------------
 function setVhVariable() {
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
 }
 setVhVariable()
 $(window).resize(function () {
  setVhVariable()
 })
 // -----------------------------------------------
 // menu
 // -----------------------------------------------
 $('.menu__button').click(function () {
  $('body').toggleClass('menu-is-open')
  if ($('.menu').is(':visible')) {
   $('.menu').fadeOut()
  } else {
   $('.menu').fadeIn()
  }
 })
 // -----------------------------------------------
 // header mega menu
 // -----------------------------------------------
 if (window.innerWidth > 767) {
  $('.js-mega-hover').hover(
   function () {
    $(this).find('.js-mega-menu').addClass('show')
   },
   function () {
    $(this).find('.js-mega-menu').removeClass('show')
   }
  )
 }

 // -----------------------------------------------
 // anchor-link
 // -----------------------------------------------
 $('.anchor-link').on('click', function (event) {
  event.preventDefault()
  const target = $(this.getAttribute('href'))
  if (target.length) {
   $('html, body').animate(
    {
     scrollTop: target.offset().top,
    },
    500
   )
  }
 })

 // -----------------------------------------------
 // ajust height
 // -----------------------------------------------
 $('.js-ajust-height-container').each(function () {
  var $container = $(this)
  var $elements = $container.find('.js-ajust-height')
  $elements.css('min-height', '')
  var maxHeight = 0
  $elements.each(function () {
   var elementHeight = $(this).outerHeight()
   if (elementHeight > maxHeight) {
    maxHeight = elementHeight
   }
  })
  $elements.css('min-height', maxHeight)
 })

 // -----------------------------------------------
 // modal
 // -----------------------------------------------
 $('.js-modal-open').on('click', function (e) {
  e.preventDefault()
  $('body').addClass('modal-is-open')
  const modalId = $(this).data('modal')
  $(modalId).fadeIn(500)
 })
 $('.js-modal-close, .js-modal-overlay').on('click', function () {
  $('body').removeClass('modal-is-open')
  const $modal = $(this).closest('.js-modal')
  $modal.fadeOut(300)
 })

 // -----------------------------------------------
 // sp-scroll
 // -----------------------------------------------
 $('.sp-scroll-container').on('touchstart', function () {
  $(this).addClass('touched')
 })

 // ----------------------------------------------- document.ready
})
