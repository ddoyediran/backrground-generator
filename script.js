var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var dfColor = document.getElementById
// var color3 = document.querySelector(".color3");
var colorRan = document.querySelector(".colorRan");



// this is for the input
// function addColor() {
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";

// 	css.textContent = body.style.background + ";";
// }

// color1.addEventListener("input", addColor); 

// color2.addEventListener("input", addColor);


//Sample here
// https://codepen.io/chrisgresh/pen/aNjovb



function color12()
{
	return'#'+(1e8^Math.random()*(1<<24)).toString(16).slice(1)
}

function color22() {
	return'#'+(1e8^Math.random()*(1<<14)).toString(16).slice(1)
}


//thus function is to add the color to the background
function genColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color12()
	+ ", " 
	+ color22()
	+ ")";
}

//callback function
colorRan.addEventListener("click", genColor); 
