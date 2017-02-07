$(function(){
  var trigger = $(".navTrigger");
  
  trigger.on("click",function(){
    $(this).toggleClass("active");
    $(this).next().toggleClass("active");
  });
});