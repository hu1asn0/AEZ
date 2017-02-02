import $ from 'jquery';

class Ratio{
constructor(){
$(document).ready(function(){
    $("btn").click(function(){
    	$("article-image is-16by9").removeClass("is-16by9").addClass("is-4by3");
    	console.log("Done with proportion!");
    });
}

};
}