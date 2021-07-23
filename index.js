player1=prompt("ENTER NAME OF PLAYER 1😀:");
player2=prompt("ENTER NAME OF PLAYER 2😀:");


var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1+1);

document.querySelector(".img1").setAttribute("src" ,"images/dice"+randomNumber1+".png");
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2+1);

document.querySelector(".img2").setAttribute("src" ,"images/dice"+randomNumber2+".png");

document.querySelector(".p1").innerHTML=player1;
document.querySelector(".p2").innerHTML=player2;
if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent=("🚩 "+ player1+"     "+"Wins!");
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent=player2+"  Wins! 🚩";
}
else{
    document.querySelector("h1").textContent="🚩 DRAW 🚩";
}