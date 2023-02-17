function attachEventsListeners() {

    const add = document.querySelectorAll('div input[type="button"]');
    
    for (const line of add) {
        line.addEventListener('click' , onConvert);
    }

    //One day is equal to 24 hours/1440 minutes/86400 seconds.
    const units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    function convertUnits (value , unit) {

        const days = value / units[unit];

        return {
            days: days,
            hours: days * units.hours,
            minutes: days * units.minutes,
            seconds: days * units.seconds,
        };
    }

    function onConvert (ev) {
        const inputNumber = ev.target.parentElement.querySelector('input[type="text"]');
        const convert = convertUnits(inputNumber.value , inputNumber.id);
        
        document.getElementById('days').value = convert.days;
        document.getElementById('hours').value = convert.hours;
        document.getElementById('minutes').value = convert.minutes;
        document.getElementById('seconds').value = convert.seconds;
    }
}