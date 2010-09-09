(function($){  
	$.fn.extend({   

		stickyWrapper: function() {  
			
			$("body").prepend('<div class="sticky-wrapper"></div>');

			$(window).scroll(function(){
				$(".sticky-header:last").each(function(){
					tracker(this);
				})    
			});


			function tracker(elm) {
				elmTopOffset = $(elm).offset().top
				vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - elmTopOffset;

				if(vOffset > 0) {
					$(elm).css("visibility", "hidden");  
					$('.sticky-wrapper').show();
				} else {
					$(elm).css("visibility", "visible");
					$('.sticky-wrapper').hide();    
				}
			}

			return this.each(function() {  
				var $clone = $(this).clone(true).width($(this).width());
				$('.sticky-wrapper').append($clone);
				$(".sticky-wrapper").height($(".sticky-wrapper").height() + 15); // Add in height of BG Fade
			}); 

		}  
	
	});  

})(jQuery);	