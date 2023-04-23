
let img = document.createElement("img"); 

img.style.height = "280"

img.src = "img/6412374b6538dc06c130a125_Homepage slide-out banner-p-800.jpg"; 
let src = document.getElementById("hideImg"); 
img.onclick = function() {
    window.location.href = 'https://www.traackr.com/';
};
src.appendChild(img); 