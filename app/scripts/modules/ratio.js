import $ from 'jquery';

class Ratio {
constructor(){
this.var1 = $(".is-4by3");
this.var2 = $(".is-16by9");
this.btn1 = $("#btn_43");
this.btn2 = $("#btn_169");
this.btn3 = $("#btn_reset");
this.events();
}

events(){
this.btn1.click(this.fun43.bind(this));
this.btn2.click(this.fun169.bind(this));
this.btn3.click(this.fun_reset.bind(this));
}

fun43(){
this.var2.removeClass("is-16by9");
this.var2.addClass("is-4by3");
/*console.log(this.var1); 						  */
}

fun169(){
this.var1.removeClass("is-4by3");
this.var1.addClass("is-16by9");
/*console.log(this.var2);*/
}

fun_reset(){
this.var1.removeClass("is-16by9");
this.var1.addClass("is-4by3");
this.var2.removeClass("is-4by3");
this.var2.addClass("is-16by9");
/*console.log("Reset done!");*/
}

}

export default Ratio;


