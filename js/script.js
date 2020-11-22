var h3 = document.querySelector("h3");
var h4 = document.querySelector("h4");
var h5 = document.querySelector("h5");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#body");

function gradient() {
    body.style.background = "linear-gradient(to right bottom, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
   	h4.textContent = "Color 1 : " + color1.value;
   	h5.textContent = "Color 2 : " + color2.value;
};

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);