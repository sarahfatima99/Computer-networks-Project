dicenumber=Math.floor(Math.random()*6)+1;

firstdice="dice" +dicenumber+".png";

var image= document.querySelectorAll("img")[0];

image.setAttribute("src",firstdice);

dicenumber2=Math.floor(Math.random()*6)+1;

seconddice="dice" +dicenumber2+".png";

var image= document.querySelectorAll("img")[1];

image.setAttribute("src",seconddice);

// if(dicenumber2>dicenumber1){
//         document.querySelector(".container h1").innerText="player1 wins!";
// }
// else if(dicenumber2<dicenumber1){
//     document.querySelector(".container h1").innerText="playyer 2 wins!";
// }
// else{
//     document.querySelector(".container h1").innerText="ITS A TIE";
// }
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerText = "🚩 Player 1 wins!";}
    
    else if (randomNumber1 < randomNumber2) {
      document.querySelector(".container h1").innerText = "Player 2 wins! 🚩";}
    
      else document.querySelector(".container h1").innerText = "Draw!";