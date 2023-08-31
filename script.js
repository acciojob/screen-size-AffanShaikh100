//your JS code here. If required.


function getscreensize(){
	let element = document.getElementById("sizeInfo");
	let x = window.screen.width;
	let y = window.screen.height;
	element.innerText= "Width:" + " " + x + " " +"and"+ " "+ "Height:"+ y;
}