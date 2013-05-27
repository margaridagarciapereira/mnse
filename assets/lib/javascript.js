function onHover(x) {
	x.style.backgroundColor="#ffffff";
}

function playSound(soundfile) {
	document.getElementById("dummy").innerHTML=	
	"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"true\" />";	
}

var timeout = 50;
var closetimer = 0;
var ddmenuitem = 0;
 
// open hidden layer
function mopen(id)
{
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';
	ddmenuitem.style.position = 'relative';
}
// close showed layer
function mclose()
{
	if(ddmenuitem) {
		ddmenuitem.style.visibility = 'hidden';
		ddmenuitem.style.position = 'absolute';
	}
}
 
// go close timer
function mclosetime()
{
 closetimer = window.setTimeout(mclose, timeout);
}
 
// cancel close timer
function mcancelclosetime()
{
 if(closetimer)
 {
  window.clearTimeout(closetimer);
  closetimer = null;
 }
}
 
// close layer when click-out
document.onclick = mclose;
