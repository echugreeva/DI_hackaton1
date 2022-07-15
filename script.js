//score counter function
// let score = 0;


// timer function

let timeleft = 10;
let downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("timeDown").innerHTML = "TimeOut";
  } else {
    document.getElementById("timeDown").innerHTML = timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);
