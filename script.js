// TYPING SPEED TEST PROJECT
// ARMIN PANAHI | ARMINP10 | P10CODING | P10



// Element's
const theTimer = document.querySelector(".timer");
const textArea = document.querySelector("#test-area");


// Variable's
var timer=[0,0,0,0];
var timerRuning = false;

// Function's
function leadingZero(time){
    if(time <= 9){
        time = "0" + time;
    };

    return time;
};

function runTimer(){
    let currentTime= leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;

    timer[3]++;

    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
    timer[2]=Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
};

function startTyping(){
    let textLength = textArea.value.length;

    if(textLength == 0 && !timerRuning){
        setInterval(runTimer,10);
        timerRuning = true;
    };
};


// Event's
textArea.addEventListener("keypress",function(){
    startTyping();        
});



// ARMIN PANAHI | ARMINP10 | P10CODING | P10
// Finish