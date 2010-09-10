(function(jQuery){  
	jQuery.fn.extend({   

		stickyWrapper: function() {  
			
			jQuery(this).parent().prepend('<div class="sticky-wrapper"></div>');

			function positionStickyHeader(elm) {
				elmTopOffset = jQuery(elm).offset().top
				vOffset = (document.documentElement.scrollTop || document.body.scrollTop) - elmTopOffset;

				if(vOffset > 0) {
					jQuery(elm).css("visibility", "hidden");  
					jQuery('.sticky-wrapper').show();
				} else {
					jQuery(elm).css("visibility", "visible");
					jQuery('.sticky-wrapper').hide();    
				}
			}

			return this.each(function() { 
				var jQueryelm = this; 
				jQuery(window).scroll(function(){
					positionStickyHeader(jQueryelm);
				});
				var jQueryclone = jQuery(this).clone(true).width(jQuery(this).width());
				jQuery('.sticky-wrapper').append(jQueryclone);
				jQuery(".sticky-wrapper").height(jQuery(".sticky-wrapper").height() + 15); // Add in height of BG Fade
				positionStickyHeader(jQueryelm);
			}); 

		}  
	
	});  

})(jQuery);	