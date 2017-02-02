import $ from 'jquery';

class Modal{
constructor(){
this.openModalButton = $(".open-modal");
this.modal = $(".modal");
this.closeModalButton =$(".modal__close");
this.events();
console.log("Modal loaded");
}

events(){
//clicking the open modal button
this.openModalButton.click(this.openModal.bind(this));
//clicking the X modal putton
this.closeModalButton.click(this.closeModal.bind(this));
//the user Pressed any key
$(document).keyup(this.keyPressHandler.bind(this));
}

keyPressHandler(e){
if(e.keyCode == 27)	{
	this.closeModal();
	}
}


openModal (){
this.modal.addClass("modal--is-visible");
return false; //disables the href="#"
} 

closeModal(){
this.modal.removeClass("modal--is-visible");
}

}

export default Modal;