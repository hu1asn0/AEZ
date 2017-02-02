import $ from 'jquery';

class MobileMenu{

constructor(){ // DOM selection
	this.siteHeader = $(".site-header");
	this.menuIcon = $(".site-header__menu-icon"); 
	this.menuContent = $(".site-header__menu-content");
	this.events();
	}

	events() { // Event selection
	this.menuIcon.click(this.toggleTheMenu.bind(this)); 
	}

	toggleTheMenu() { // Activity
	this.menuContent.toggleClass("site-header__menu-content--is-visible");
	this.siteHeader.toggleClass("site-header--extended");
	this.menuIcon.toggleClass("site-header__menu-icon--close-x");
	}
}

export default MobileMenu;