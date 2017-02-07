
/*OK for toggling
function toggleClass(el)
{
var kids = document.getElementById("menu1").children;
for (var i = 0; i < kids.length; i++) {
	kids[i].className = "sub-nav1";
}
el.className="sub-nav2";
}*/

function toggleMenu(el){
var kids = document.getElementById("menu1").children;
for (var i = 0; i < kids.length; i++) {
	kids[i].className = "sub-nav shown";
}	
el.className += " shown"
}