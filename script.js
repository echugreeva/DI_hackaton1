let randomColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
};

// console.log(randomColor())

let randomRed = () => {
    let r = Math.floor(Math.random() * (255 - 140) + 140);
    return `rgb(${r},0,0)`;
};
let randomGreen = () => {
    let g = Math.floor(Math.random() * (255 - 140) + 140);
    return `rgb(0,${g},0)`;
};

let randomBlue = () => {
    let b = Math.floor(Math.random() * (255 - 140) + 140);
    return `rgb(0,0,${b})`;
};

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
let score = 0;
let correctRGB;
let downloadTimer;
let circles = [...document.querySelectorAll('.circle')];

let roundRGBs = [];
let checkAnswer = (e, circleBackgroundColor) => {
    e.stopPropagation();
    // e.preventDefault();
    clearInterval(downloadTimer);
    if (correctRGB == circleBackgroundColor) {
        score += 1;
        document.getElementById('gameScore').innerHTML = score;
        if (numRound < 10) {
            generateRound();
        }
    } else if (numRound < 10) {
        generateRound();
    }
};

let gameDiv = document.querySelector('.gameDiv');
gameDiv.style.display = 'none';

let startBtn = document.querySelector('.start');
let header = document.querySelector('header');

let generateRound = () => {
    document.querySelector('#roundNum').textContent = numRound;

    roundRGBs = [];
    let pGuess = document.querySelector('p');
    for (i = 0; i < circles.length; i++) {
        circles[i].style.backgroundColor = randomColor();
        // console.log(circles[i].style.backgroundColor);
        roundRGBs.push(circles[i].style.backgroundColor);
    }
    console.log(roundRGBs);

    //addeventlistener to each circle and onclick trigger check answer
    for (let i = 0; i < circles.length - 1; i++) {
        const circleBackgroundColor = circles[i].style.backgroundColor;
        circles[i].addEventListener('click', (e) =>
            checkAnswer(e, circleBackgroundColor)
        );
    }
    //takes 1 of circles rgbs. works it returns 1 rgb code
    let random = Math.floor(Math.random() * 4);
    correctRGB = roundRGBs[random];
    console.log(`correct answer is ${correctRGB}`);

    // let colorToGuess = document.createTextNode(correctRGB);

    // pGuess.appendChild(colorToGuess);

    pGuess.textContent = `Guess the matchig color: ${correctRGB}`;
    let timeleft = 10;
    downloadTimer = setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById('timeDown').innerHTML = 'TimeOut';
            if (numRound < 10) {
                generateRound();
            }
        } else {
            document.getElementById('timeDown').innerHTML = timeleft + ' seconds';
        }
        timeleft -= 1;
    }, 1000);

    numRound += 1;
};

startBtn.addEventListener('click', function () {
    gameDiv.style.display = 'block';
    header.style.display = 'none';
    generateRound();
});

// while (numRound <4){

//    generateRound();
// }

//call generate round again
//add count of the round (every time generateRound runs numberOf round ++)
//add conditional if numRound x switch randomColor type (maybe add switch case...)
