var randomPic = new Array();
randomPic[0] = "images/darth.jpg";
randomPic[1] = "images/dragon.jpg";
randomPic[2] = "images/spidervsvenom.jpg";
randomPic[3] = "images/starairplane.png";
randomPic[4] = "images/starskull.jpg";

var selectRandom = randomPic[Math.floor(Math.random()*randomPic.length)]

var img = document.createElement("img");
img.src = selectRandom;
var src = document.getElementById("imgDiv");
src.appendChild(img);


