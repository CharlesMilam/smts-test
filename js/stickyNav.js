// thanks to http://jsfiddle.net/uFq2k/ for example
function stickyNav(){
  // Check the initial Poistion of the Sticky Header
  var stickyNavTop = $('#stickynav').offset().top

  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyNavTop ) {
      $('#stickynav').css({position: 'fixed', top: '0px', margin: "0px"})
      $("#stickynav li").css({margin: "0 0 0 3em"})
    } else {
      $('#stickynav').css({position: 'static', top: '0px', margin: "1em 0 0 3em"})
      $("#stickynav li").css({margin: "1em 0 0 3em"})
    }
  })
}