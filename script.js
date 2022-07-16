

let randomColor = () => {
    let r =  Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

// console.log(randomColor())

let randomRed = () => {
    let r = Math.floor(Math.random() * (255-140)+140);
    return `rgb(${r},0,0)`;
}
let randomGreen = () => {
    let g = Math.floor(Math.random() * (255-140)+140);
    return `rgb(0,${g},0)`;
}

let randomBlue = () => {
    let b = Math.floor(Math.random() * (255-140)+140);
    return `rgb(0,0,${b})`;
}

// feel the circles 

// let circles = [...document.querySelectorAll(".circle")];
// // console.log(circles);

// for (i = 0; i < circles.length; i++){
//     circles[i].style.backgroundColor = randomColor();

// }
// for (x in circles) {
//     circles.x.style.backgroundColor = randomColor();
// }

//assign 1 of the cirles bg color as a correct answer

// let correctAnswer = () =>{
//     let random = Math.floor(Math.random() * 3);
//     let rgbToShow = circles[random].style.backgroundColor;
//     return rgbToShow;
// }

// add rgbtoShow to <p></p>//

// let pGuess = document.querySelector(".toguess :first-Child");

// let colorToGuess = document.createTextNode(correctAnswer());

// pGuess.appendChild(colorToGuess);


//score counter function
// let score = 0;
// let upScore = document.getElementById("btn")
// upScore.addEventListener("click", function () {
//     score+=1;
//     document.getElementById("gameScore").innerHTML = score;
    
// })

// timer function

// let timeleft = 10;
// let downloadTimer = setInterval(function(){
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("timeDown").innerHTML = "TimeOut";
//   } else {
//     document.getElementById("timeDown").innerHTML = timeleft + " seconds";
//   }
//   timeleft -= 1;
// }, 1000);

// generate round;
let rgbToShow;
let numRound = 1;

let generateRound = () => {
    numRound ++;
    let pGuess = document.querySelector("p");
    pGuess.removeChild;

    let circles = [...document.querySelectorAll(".circle")];
    let roundRGBs =[];

        for (i = 0; i < circles.length; i++){
            
            circles[i].style.backgroundColor = randomColor();
            //console.log(circles[i].style.backgroundColor);
            roundRGBs.push(circles[i].style.backgroundColor);
        
        }
    console.log(roundRGBs);

//takes 1 of circles rgbs 
    let correctAnswer = () =>{
        let random = Math.floor(Math.random() * 4);
        rgbToShow = roundRGBs[random];
        return rgbToShow;
    }

    let correctRGB = correctAnswer();
    console.log(`correct answer is ${correctRGB}`);

    
        
    let colorToGuess = document.createTextNode(correctRGB);
        
    pGuess.appendChild(colorToGuess);        
        
//addeventlistener to each circle and onclick trigger check answer
    for (i = 0; i < circles.length; i++){
        circles[i].addEventListener("click", checkAnswer=()=>{
                if (correctRGB == circles[i].style.backgroundColor) {
                    score+=1;
                    document.getElementById("gameScore").innerHTML = score;
                   if (numRound < 4) {generateRound();}
                   
                } else if (numRound < 4) {
                    generateRound();
                }
            });
        }
            
        
    
    
    

    let timeleft = 5;
    let downloadTimer = setInterval(function(){
    if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timeDown").innerHTML = "TimeOut";
    if (numRound < 4) 
                   {generateRound()};
} else {
    document.getElementById("timeDown").innerHTML = timeleft + " seconds";
}
timeleft -= 1;
    }, 1000);
    
    

}

let gameDiv = document.querySelector(".gameDiv");
gameDiv.style.display = "none";

let startBtn = document.querySelector(".start");
let header = document.querySelector("header");

startBtn.addEventListener("click", function(){
    gameDiv.style.display = "block";
    header.style.display = "none";
    generateRound();
})

let score = 0;

// while (numRound <4){
    
//    generateRound();
// }


    //call generate round again 
    //add count of the round (every time generateRound runs numberOf round ++)
    //add conditional if numRound x switch randomColor type (maybe add switch case...)

