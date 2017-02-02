import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/reveal-on-scroll';
import StickyHeader from './modules/sticky-header';
import Modal from './modules/modal';
import Ratio from './modules/ratio'



var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"),"85%");
new RevealOnScroll($(".testimonial"),"60%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
var ratio = new Ratio;

