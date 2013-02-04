/*
	File Name: sizePosition.js
	Author:    Chris Lee
	Version:   0.1.1.4
	Desc:      This plugin makes sizing and positioning elements easy
*/

(function($){
    $.fn.posCustom = function(settings){
        var config = $.extend({
            hAddition: 0,
            vAddition: 0,
            hSubtract: 0,
            vSubtract: 0
        }, settings);
        
        var boxWidth;
        var boxHeight;
        
        switch (config.boundingBox) {
            case "parent":
                boxWidth = $(this).parent().width();
                boxHeight = $(this).parent().height();
                break;
            default:
                boxWidth = Win.width;
                boxHeight = Win.height;
        }
        
        //--------------------------------
        
        var hPos;
        var vPos;

        // Takes padding into account
        var hPadding = parseInt(this.css('padding-left')) + parseInt(this.css('padding-right'));
        var vPadding = parseInt(this.css('padding-top')) + parseInt(this.css('padding-bottom'));
        
        switch(config.hPos){
            case  "left": 
                hPos = 0;
                break;
            case "center": 
                hPos = (boxWidth - (parseInt(this.width()) + hPadding) )/2;
                break;
            case "right": 
                hPos = boxWidth - (parseInt(this.width() + hPadding) );
                break;
            default: parseInt(this.css("left"))
        }
      
        switch(config.vPos){
            case "top": 
                vPos = 0;
                break;
            case "center": 
                vPos = (boxHeight - (parseInt(this.height()) + vPadding) )/2;
                break;
            case "bottom": 
                vPos = boxHeight - (parseInt(this.height()) + vPadding);
                break;
            default: 
                parseInt(this.css("top"));
        }
        
        return this.each(function(){
            $(this).css({
                left: hPos + config.hAddition - config.hSubtract,
                top: vPos + config.vAddition - config.vSubtract
            });
        });
    };

    $.fn.sizeCustom = function(settings){
        var config = $.extend({
        	hAddition: 0,
        	vAddition: 0,
        	hSubtract: 0,
        	vSubtract: 0
        }, settings);
        
       //add code here for other bounding boxes
       
       var boxWidth;
       var boxHeight;
       
       switch (config.boundingBox) {
       	   case "boundingBoxRemaining":
       	       var tempWidth = $(this).width();
       	       var tempHeight = $(this).height();
       	       
       	       var widthSum = 0;
       	       var heightSum = 0;
       	       
       	       $(this).parent().children().each(function(index){
       	           widthSum += $(this).outerWidth();
       	           heightSum += $(this).outerHeight();
       	       });
       	       
       	       boxWidth = widthSum - tempWidth;
       	   	   boxHeight = heightSum - tempHeight;

       	   	   break;
       	   case "parent":
       	       boxWidth = $(this).parent().width();
       		   boxHeight = $(this).parent().height();
       		   break;
       	   default:
       		   boxWidth = Win.width;
       		   boxHeight = Win.height;
       }
       
       //--------------------------------
        
        var elWidth;
        var elHeight;
        
        var wMultiplier = 1;
        
        switch(config.width){
        	case "full": 
        		wMultiplier = 1;
        		break;
        	case "half": 
        		wMultiplier = .5;
        		break;
        	case "third": 
        		wMultiplier = .333;
        		break;
        	case "quarter": 
        		wMultiplier = .25;
        		break;
    		case "fifth": 
    			wMultiplier = .2;
    			break;
    		case "self":
    			boxWidth = $(this).width();
    			break;
        	default: 
        		wMultiplier = 1;
        }
        
        elWidth = boxWidth * wMultiplier;
        
        var hMultiplier = 1;
        
        switch(config.height){
        	case "full": 
        		hMultiplier = 1;
        		break;
        	case "half": 
        		hMultiplier = .5;
        		break;
        	case "third": 
        		hMultiplier = .333;
        		break;
        	case "quarter": 
        		hMultiplier = .25;
        		break;
        	case "fifth": 
        		hMultiplier = .2;
        		break;
        	case "self":
        		boxHeight = $(this).height();
        		break;
        	default: 
        		hMultiplier = 1;
        }
        
        elHeight = boxHeight * hMultiplier;

        return this.each(function(){
        
        	$(this).css({
       			width: elWidth + config.hAddition - config.hSubtract,
       			height: elHeight + config.vAddition - config.vSubtract
       		});
       	});
    };
})(jQuery);

var Win = {//this object is used for saving the window height and width
	init:function(){
        var winTemp = $(window);

		this.height = winTemp.height();
		this.width = winTemp.width();
		
		$("#content").sizeCustom({
			width: "full",
			height: "full"
		});
	}
};

Win.init();




