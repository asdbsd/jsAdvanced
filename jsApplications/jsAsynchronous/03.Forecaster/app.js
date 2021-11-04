function attachEvents() {
    let [inputLocation, submitBtn] = Array.from(document.querySelectorAll('#request input'));
    let currentForecastDiv = document.querySelector('#current');
    let upcomingForecastDiv = document.querySelector('#upcoming');

    submitBtn.addEventListener('click', getForecasts);

    function getForecasts() {

        let forecastCodes = {
            "Sunny": () =>  '☀' ,
            "Partly sunny": () => '⛅' ,
            "Overcast": () => '☁' ,
            "Rain": () => '☂' 
        };

        let forecastsLength = Array.from(document.getElementsByClassName('forecasts')).length;

        if (forecastsLength > 0) {
            document.querySelector('.forecasts').remove();
            document.querySelector('.forecast-info').remove();
        } else if (document.getElementById('errorDiv')) {
            document.getElementById('errorDiv').remove();
        }

        fetch(`http://localhost:3030/jsonstore/forecaster/locations`)
            .then(promBody => promBody.json())
            .then(locations => {
                let searchLocationCode = locations.filter(location => location.name === inputLocation.value)[0].code
                return fetch(`http://localhost:3030/jsonstore/forecaster/today/${searchLocationCode}`)
                    .then(promBody => promBody.json())
                    .then(todayForecast => ({ todayForecast, searchLocationCode }))
            })
            .then(({ todayForecast, searchLocationCode }) => {
                let todayForecastElement = todayForecastElements(todayForecast);
                currentForecastDiv.appendChild(todayForecastElement);

                return fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${searchLocationCode}`);

            })
            .then(promBody => promBody.json())
            .then(upcomingForecast => {
                let upcomingForecastElement = upcomingForecastElements(upcomingForecast);
                upcomingForecastDiv.appendChild(upcomingForecastElement);
            })
            .catch(err => {
                document.getElementById('forecast').style.display = '';
                let errorDiv = document.createElement('div');
                errorDiv.id = 'errorDiv';

                let errorB = document.createElement('b');
                errorB.textContent = 'Error'

                let errorP = document.createElement('p')
                errorP.appendChild(errorB);
                errorP.classList.add('error');

                let errorMessageP = document.createElement('p');
                errorMessageP.classList.add('error-message');
                errorMessageP.textContent = "Please make sure your request is correct"

                let br = document.createElement('br');

                let errorMessageP2 = document.createElement('p');
                errorMessageP2.classList.add('error-message')
                errorMessageP2.textContent = "Available locations for search are: "

                let availableCities = 'New York, London and Barcelona';
                let citiesP = document.createElement('p');
                citiesP.classList.add('error-message', 'cities');
                citiesP.textContent = availableCities


                errorDiv.appendChild(errorP);
                errorDiv.appendChild(errorMessageP)
                errorDiv.appendChild(errorMessageP2)
                errorDiv.appendChild(citiesP)
                currentForecastDiv.appendChild(errorDiv)

            })

        function todayForecastElements(todayForecastObj) {
            document.getElementById('forecast').style.display = '';

            let forecastsDiv = document.createElement('div');
            forecastsDiv.className = 'forecasts';

            let symbolSpan = document.createElement('span');
            symbolSpan.classList.add('condition', 'symbol');
            symbolSpan.textContent = forecastCodes[todayForecastObj.forecast.condition]();
            forecastsDiv.appendChild(symbolSpan);

            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('condition');
            forecastsDiv.appendChild(conditionSpan);

            let nameSpan = document.createElement('span');
            nameSpan.classList.add('forecast-data');
            nameSpan.textContent = todayForecastObj.name;
            let degreeSpan = document.createElement('span');
            degreeSpan.classList.add('forecast-data');
            degreeSpan.textContent = `${todayForecastObj.forecast.low + '°'}/${todayForecastObj.forecast.high + '°'}`
            let conditionDataSpan = document.createElement('span');
            conditionDataSpan.classList.add('forecast-data');
            conditionDataSpan.textContent = todayForecastObj.forecast.condition;

            conditionSpan.appendChild(nameSpan);
            conditionSpan.appendChild(degreeSpan);
            conditionSpan.appendChild(conditionDataSpan);

            return forecastsDiv;
        }

        function upcomingForecastElements(upcomingForecastObj) {
            let upcomingDataDiv = document.createElement('div');
            upcomingDataDiv.className = 'forecast-info';

            upcomingForecastObj.forecast.forEach(forecast => {
                let upcomingSpan = document.createElement('span');
                upcomingSpan.classList.add('upcoming');

                let symbolSpan = document.createElement('span');
                symbolSpan.classList.add('symbol');
                symbolSpan.textContent = forecastCodes[forecast.condition]();

                let degreeSpan = document.createElement('span');
                degreeSpan.classList.add('forecast-data');
                degreeSpan.textContent = `${forecast.low + '°'}/${forecast.high + '°'}`;
                
                let conditionDataSpan = document.createElement('span');
                conditionDataSpan.classList.add('forecast-data');
                conditionDataSpan.textContent = forecast.condition

                upcomingSpan.appendChild(symbolSpan);
                upcomingSpan.appendChild(degreeSpan);
                upcomingSpan.appendChild(conditionDataSpan);
                
                upcomingDataDiv.appendChild(upcomingSpan);
            })

            return upcomingDataDiv;
        }

    }

}

attachEvents();