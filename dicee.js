var ran1 = Math.floor(Math.random()*6)+1;
var ranimagesource1 = "images/dice"+ ran1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",ranimagesource1);

var ran2 = Math.floor(Math.random()*6)+1;
var ranimagesource2 = "images/dice"+ ran2 + ".png";
 var image2 = document.querySelectorAll("img")[1];
 image2.setAttribute("src",ranimagesource2);

if(ran1>ran2){
  document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(ran1<ran2){
  document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
  document.querySelector("h1").innerHTML = "Draw";
}
