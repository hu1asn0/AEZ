import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader{
constructor(){
this.lazyImages = $(".lazyload");
this.siteHeader	= $(".site-header");
this.headerTriggerElement = $(".large-hero__title");
this.createHeaderWaypoint();
this.pageSections = $(".page-section");
this.headerLinks = $(".primary-nav a");
this.createPageSectionWaypoints();
this.addSmoothScrolling();
this.refreshWaypoints();
}

refreshWaypoints(){
this.lazyImages.on('load', function(){  // USE on.('load', function...etc) instead of load
Waypoint.refreshAll(); //This is a GLOBAL refresh to the waypoints, not only for those in this file. 
});
}

addSmoothScrolling(){
	this.headerLinks.smoothScroll();
}

createHeaderWaypoint(){
	var that = this;  //THIS points at class StickyHeader, inside it does not
	new Waypoint({
		element: this.headerTriggerElement[0], //the 1st element in a jQuery type array object is always the DOM element pointer
		handler: function(direction){
		if(direction == "down"){
		that.siteHeader.addClass("site-header--dark");
		} else
		{
		that.siteHeader.removeClass("site-header--dark");
		}
		}
	});
	}

createPageSectionWaypoints() {
	var that = this;
    this.pageSections.each(function(){
    var currentPageSection = this;
    new Waypoint({
    	element: currentPageSection,
    	handler: function (direction){
    		if(direction=="down"){
    		var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
    		that.headerLinks.removeClass("is-current-link");
    		$(matchingHeaderLink).addClass("is-current-link");
    		}
    	},
    	offset: "20%"
    });

    new Waypoint({
    	element: currentPageSection,
    	handler: function (direction){
    		if(direction=="up"){
    		var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
    		that.headerLinks.removeClass("is-current-link");
    		$(matchingHeaderLink).addClass("is-current-link");
    		}
    	},
    	offset: "-40%"
    });

    //end of waypoints
    }); //end of EACH def.

    }

}

export default StickyHeader;
