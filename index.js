// Dice 1


var randomNumber1 =Math.floor(Math.random()*6) +1;  // 1-6 Random Numbers 

var randomDiceImage = "dice" +randomNumber1 +".png"; // dice1.png - dice6.png (no need of using if else if condition)

var randomDiceImageSource = "images/" +randomDiceImage;   // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];   // first image object

image1.setAttribute("src",randomDiceImageSource);   // setting the random image


// Dice 2 


var randomNumber2 =Math.floor(Math.random()*6) +1;  // 1-6 Random Numbers 

var randomDiceImage2 = "dice" +randomNumber2 +".png"; // dice1.png - dice6.png (no need of using if else if condition)

var randomDiceImageSource2 = "images/" +randomDiceImage2;  // images/dice1.png - images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImageSource2);;   // second image object // setting the random image



// Displaying who wins based on Random number comparison


if (randomNumber1>randomNumber2){                                             
    document.querySelector("h1").innerHTML= " 🚩Player 1 Wins !";
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector(".p1").innerHTML = "Player 1 😍😍";
    document.querySelector(".p2").innerHTML = "Player 2 😒😒";

} else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML= " Player 2 Wins ! 🚩";
    document.querySelector("h1").style.fontSize = "5rem";
    document.querySelector(".p2").innerHTML = "Player 2 😍😍";
    document.querySelector(".p1").innerHTML = "Player 1 😒😒";
} else{
    document.querySelector("h1").innerHTML= "Draw ! ";
    document.querySelector("h1").style.fontSize = "5rem";
}
