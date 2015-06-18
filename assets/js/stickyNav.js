// thanks to http://jsfiddle.net/uFq2k/ for example
function stickyNav(){
  // Check the initial Poistion of the Sticky Header
  var stickyNavTop = $('#stickynav').offset().top

  $(window).scroll(function(){
    if( $(window).scrollTop() > stickyNavTop ) {
      $('#stickynav').css({position: 'fixed', top: '0px', margin: "0px"})
      $("#stickynav li").css({margin: "-16px 0 0 3rem"})
    } else {
      $('#stickynav').css({position: 'static', top: '0px', margin: "-20px 0 0 0"})
      $("#stickynav li").css({margin: "0 0 0 3rem"})
    }
  })
}