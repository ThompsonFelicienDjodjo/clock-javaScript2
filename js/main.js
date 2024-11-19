const secondHand = document.querySelector( '.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegress = ((seconds /30)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegress}deg)`;

    const min = now.getMinutes();
    const minDegress = ((min /30)* 360) + 90;
    minHand.style.transform = `rotate(${minDegress}deg)`;

    const hours = now.getMinutes();
    const hourDegress = ((min / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegress}deg`;

}

setInterval(setDate, 1000);
