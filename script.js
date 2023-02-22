console.log("connected");

var color1 = document.getElementsByClassName('colorPicker1')[0];
var color2 = document.getElementsByClassName('colorPicker2')[0];
var body = document.querySelector('body');
var css = document.getElementById('colorScheme');

function setBackground()
{
	 body.style.backgroundImage = "Linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = "CSS for the background is - " + body.style.backgroundImage;
}




color1.addEventListener("input", setBackground);
color2.addEventListener("input", setBackground);