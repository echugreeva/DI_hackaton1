
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

document.querySelector