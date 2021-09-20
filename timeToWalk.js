function timeToWalk(setpsToUni, stepInMetres, speedPerKm) {
    let metresToUni = setpsToUni * stepInMetres;
    let speedMetresInSec = speedPerKm / 3.6;
    let totalTime = metresToUni / speedMetresInSec;
    let additionalTime = Math.floor(metresToUni / 500);


    let totalMinutes = Math.floor(totalTime / 60);
    let totalSeconds = Math.round(totalTime - (totalMinutes * 60));
    let totalHours = Math.floor(totalTime / 3600);

    console.log((totalHours < 10 ? "0" : "") + totalHours + ":" + (totalMinutes + additionalTime < 10 ? "0" : "") + (totalMinutes + additionalTime) + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds);
    
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);


