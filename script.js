// TYPING SPEED TEST PROJECT
// ARMIN PANAHI | ARMINP10 | P10CODING | P10



// Element's
const theTimer = document.querySelector(".timer");
const testWrapper = document.querySelector(".test-wrapper");
const textArea = document.querySelector("#test-area");
const originText_Element = document.querySelector("#origin-text > p");
const originText = originText_Element.innerHTML;
const resetButton = document.querySelector("#reset");


// Variable's
var timer=[0,0,0,0];
var timerRuning = false;
var interval;


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

function spellChecking(){
    let enteredText = textArea.value;
    let textMatch = originText.substring(0,enteredText.length);

    if(enteredText == originText){
        testWrapper.style.borderColor = "Green";
        clearInterval(interval);
        textArea.removeEventListener("keyup",spellChecking);
        textArea.setAttribute("readonly","");
    }
    else {
        if(enteredText == textMatch){
            testWrapper.style.borderColor = "Yellow";
        }
        else {
            testWrapper.style.borderColor = "Red";
        };
    };
};

function startTyping(){
    let textLength = textArea.value.length;

    if(textLength == 0 && !timerRuning){
        interval = setInterval(runTimer,10);
        timerRuning = true;
    };
};

function resetTest(){
    clearInterval(interval);
    interval = null;
    timer=[0,0,0,0];
    timerRuning = false;

    textArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "Grey";
};


// Event's
textArea.addEventListener("keypress",function(){
    startTyping();        
});

textArea.addEventListener("keyup",spellChecking);

resetButton.addEventListener("click",resetTest);



// ARMIN PANAHI | ARMINP10 | P10CODING | P10
// Finish