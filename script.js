var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var dfColor = document.getElementById
// var color3 = document.querySelector(".color3");
var colorRan = document.querySelector(".colorRan");


// function btnColor() {
// var r = Math.floor(Math.random()*256);          // Random between 0-255
// var g = Math.floor(Math.random()*256);          // Random between 0-255
// var b = Math.floor(Math.random()*256);          // Random between 0-255
// var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
// return rgb;
// }

// var dami = btnColor();

// function genColor() {
// 	body.style.background = "linear-gradient(to right, " 
// 	+ dami.value 
// 	+ ", " 
// 	+ dami.value 
// 	+ ")";
// }



// color32.addEventListener("generate", genColor);
// color3.addEventListener("generate", genColor);


// this for the input
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


// https://codepen.io/chrisgresh/pen/aNjovb



var color12 = function()
{return'#'+(1e8^Math.random()*(1<<24)).toString(16).slice(1)}

var color22 = function() {
	return'#'+(1e8^Math.random()*(1<<14)).toString(16).slice(1)
}

//function genColor() 

function genColor() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color12
	+ ", " 
	+ color22
	+ ")";
}

colorRan.addEventListener("click", genColor); 
