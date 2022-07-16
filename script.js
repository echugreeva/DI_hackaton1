
let randomColor = () => {
    let r =  Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

// console.log(randomColor())

let randomRed = () => {
    let r = Math.floor(Math.random() * (255-140)+140);
    return `rgb(${r},0,0)`
}
let randomGreen = () => {
    let g = Math.floor(Math.random() * (255-140)+140);
    return `rgb(0,${g},0)`
}

let randomBlue = () => {
    let b = Math.floor(Math.random() * (255-140)+140);
    return `rgb(0,0,${b})`
}

// feel the circles 

let circles = [...document.querySelectorAll(".circle")];
// console.log(circles);

for (i = 0; i < circles.length; i++){
    circles[i].style.backgroundColor = randomColor();

}
// for (x in circles) {
//     circles.x.style.backgroundColor = randomColor();
// }

//assign 1 of the cirles bg color as a correct answer

let correctAnswer = () =>{
    let random = Math.floor(Math.random() * 3);
    let rgbToShow = circles[random].style.backgroundColor;
    return rgbToShow;
}

// add rgbtoShow to <p></p>//

let pGuess = document.querySelector(".toguess :first-Child");

let colorToGuess = document.createTextNode(correctAnswer());

pGuess.appendChild(colorToGuess);



// generate round


// add answer and check answer functions
// event listeners on circles -> if user clicks -> check if color match, if yes add score and render colors again


