function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }



    function convert(value, unit) {
        const inDays = value / ratios[unit];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }


    document.querySelector('main').addEventListener('click', calculateValue);


    function calculateValue(e) {
        if (e.target.type == 'button' && e.currentTarget.localName == 'main') {
            let currentInput = e.target.parentElement.querySelector('input[type="text"]');
            let result = convert(Number(currentInput.value), currentInput.id);
    
            document.getElementById('days').value  = result.days;
            document.getElementById('hours').value  = result.hours
            document.getElementById('minutes').value = result.minutes;
            document.getElementById('seconds').value = result.seconds;
        }
        
 
    }

}