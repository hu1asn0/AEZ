$('.menu').click(function(){
  $this = $(this);
  if ($this.hasClass('active')) {
    $this.removeClass('active');
  }
  else {
    $this.addClass('active');    
  }

  
});