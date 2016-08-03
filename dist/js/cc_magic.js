// Jerryking Ajih - Code Challenge - JS

// Animate Sliding Elements
$(function() {
  var $blocks = $('.animBlock.notViewed');
  var $window = $(window);

  $window.on('scroll', function(e){
    $blocks.each(function(i,element){
      if($(this).hasClass('viewed')) 
        return;
        
      isScrolledIntoView($(this));
    });
  });
});

function isScrolledIntoView(element) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elementOffset = 0;
  
  if(element.data('offset') != undefined) {
    elementOffset = element.data('offset');
  }
  var elementTop = $(element).offset().top;
  var elementBottom = elementTop + $(element).height();
  
  if(elementOffset != 0) { 
    if(docViewTop - elementTop >= 0) {
      elementTop = $(element).offset().top + elementOffset;
    } else {
      elementBottom = elementTop + $(element).height() - elementOffset
    }
  }
  
  if((elementBottom <= docViewBottom) && (elementTop >= docViewTop)) {
    $(element).removeClass('notViewed').addClass('viewed');
    
    var animElemsLeft = $('.animBlock.notViewed').length;
    if(animElemsLeft == 0){
      $(window).off('scroll');
    }
  }
}

// Make CTA Button Shake on Hover
$('.btn').jrumble({
	speed: 50
});

$('.btn').hover(function(){
	$(this).trigger('startRumble');
}, function(){
	$(this).trigger('stopRumble');
});