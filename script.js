var dtToday = new Date();
var month = dtToday.getMonth() + 1;
var day = dtToday.getDate();
var year = dtToday.getFullYear();
if(month < 10)
    month = '0' + month.toString();
if(day < 10)
    day = '0' + day.toString();
var maxDate = (year-13) + '-' + month + '-' + day;
var minDate = (year-120) + '-' + month + '-' + day;

var birthday = document.getElementById("birthday");
birthday.setAttribute("max", maxDate);
birthday.setAttribute("min", minDate);

var container = document.querySelector(".container");
var rgbwindow = document.getElementById("rgb");

container.addEventListener("click", changeColor)

function changeColor(event) {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var rgba = "rgba("+red+", "+green+", "+blue+", 0.95)";
	var rgba2 = "rgba("+(255-red)+", "+(255-green)+", "+(255-blue)+", 0.95)";
	container.style.background = "linear-gradient(to bottom, "+rgba+", "+rgba2+")";
	rgbwindow.textContent = rgba;
}