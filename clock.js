// console.log("Program started");

setInterval(setClock, 1000)

const secHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (currentDate.getMinutes() + secondsRatio)/60
    // const hoursRatio = currentDate.getHours()/60
    const hoursRatio = (checkHours(currentDate.getHours())+minutesRatio)/12
    // console.log(hoursRatio,minutesRatio,secondsRatio);
    // console.log(currentDate.getHours(),currentDate.getMinutes(),currentDate.getSeconds());
    // console.log();
    // console.log(secondsRatio, currentDate.getSeconds());

    setRotation(secHand, secondsRatio)
    setRotation(minHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, ratio) {
    element.style.setProperty('--rotation',ratio * 360 )
}


function checkHours(hour) {
    if (hour>12) {
        hour -= 12
        // console.log(hour);
        return hour
    }else{
        // console.log(hour);
        return hour
    }
}

setClock();