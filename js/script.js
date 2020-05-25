$(window).scroll(function () {
	var sc = $(window).scrollTop()
	if (sc > 150) {
		$("#main-navbar").addClass("navbar-scroll")
	} 
	else {
		$("#main-navbar").removeClass("navbar-scroll")
	}
});

jQuery(function($) {
  
	// Function which adds the 'animated' class to any '.animatable' in view
	var doAnimations = function() {
	  
	  // Calc current offset and get all animatables
	  var offset = $(window).scrollTop() + $(window).height(),
		  $animatables = $('.animatable');
	  
	  // Unbind scroll handler if we have no animatables
	  if ($animatables.length == 0) {
		$(window).off('scroll', doAnimations);
	  }
	  
	  // Check all animatables and animate them if necessary
		  $animatables.each(function(i) {
		 var $animatable = $(this);
			  if (($animatable.offset().top + $animatable.height() - 20) < offset) {
		  $animatable.removeClass('animatable').addClass('animated');
			  }
	  });
  
	  };
	
	// Hook doAnimations on scroll, and trigger a scroll
	  $(window).on('scroll', doAnimations);
	$(window).trigger('scroll');
  
  });

  (function(exports,$){
  var self = this;
  self.CSSvendors = ["-webkit-","-moz-", "-o-", "-ms-","-khtml-",""];

  $("#wrapper .hover").on("mouseenter",function(){
    var $el = $(this),
      $im = $el.children("img"),
      elSize = {w:($el.width()+10)*1.2,h:($el.height()+10)*1.2},
      elPos = $el.offset();

    $(this).on("mousemove",function(evt){
      var mousePos = {x:evt.clientX-elPos.left,y:evt.clientY-elPos.top},
        imSize = {w:$im.width(),h:$im.height()},
        translate = "",
        imPos = {x:$im.position().left,y:$im.position().top},
        css = {},
        newPos = {x:0,y:0};

      newPos.x = - (15 + (mousePos.x/elSize.w)*(imSize.w-elSize.w));
      newPos.y = - (15 + (mousePos.y/elSize.h)*(imSize.h-elSize.h));

      translate = "translate("+newPos.x+"px,"+newPos.y+"px)";
      css = self.prefixCSS(css,"transform",translate);
      $im.css(css);
    });
  }).on("mouseleave",function(){
    $(this).off("mousemove");
    var css = {};
    self.prefixCSS(css,"transform","");
    $(this).children("img").css(css);
  });

  self.prefixCSS = function(obj,prop,value){
    var self = this;
    obj = obj||{};
    for (var i = 0, max = self.CSSvendors.length; i < max; i += 1) {
        obj[self.CSSvendors[i] + "" + prop] = value;
    }
    return obj;
  };


})(window,jQuery);
$(document).ready(function(){
  $('a').click(
    function(event){
       $('html, body').animate({
       scrollTop: $( $.attr(this, 'href') ).offset().top
       }, 500);
   event.preventDefault();
  });
});