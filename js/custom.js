$(document).ready(function(){

    // 이미지 패럴렉스 효과
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function(index) {
        var imageSrc = $(this).data('image-src')
        var imageHeight = $(this).data('height')
        $(this).css('background-image','url(' + imageSrc + ')')
        $(this).css('height', imageHeight)
  
        // Adjust the background position.
        var initY = $(this).offset().top
        var height = $(this).height()
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
    })
  

    $(window).scroll(function() {
      var scrolled = $(window).scrollTop()
      $('.parallax').each(function(index, element) {
        var initY = $(this).offset().top
        var height = $(this).height()
        var endY  = initY + $(this).height()
  
        // Check if the element is in the viewport.
        var visible = isInViewport(this)
        if(visible) {
          var diff = scrolled - initY
          var ratio = Math.round((diff / height) * 100)
          $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px');
        }
      })
    })
  })
  
  // Check if the element is in the viewport.
  function isInViewport(node) {
    var rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }
  