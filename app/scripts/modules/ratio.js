import $ from 'jquery';

class Ratio{
constructor(){

$(document).ready(function(){
    $("#target-pic").click(function(){
    	$("#aim-pic").toggleClass("is-16by9");
    	$("#aim-pic").toggleClass("is-4by3");
    	console.log("Done with proportion!");
    								});
 							});   
}
}

export default Ratio;