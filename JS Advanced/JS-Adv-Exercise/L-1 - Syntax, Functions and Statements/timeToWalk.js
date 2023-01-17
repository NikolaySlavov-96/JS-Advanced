function timeToWalk(step, meeter, kmToH) {

    let allLongTravel = step * meeter;
    let studentMeeter = kmToH / 3.6;

    let breakStudent = Math.floor(allLongTravel / 500); //break minutes
    let result = allLongTravel / studentMeeter
    
    let timeMin = Math.floor(result / 60);
    let timeSec = Math.round(result - (timeMin * 60));
    let timeHr = Math.floor(result / 60);

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + breakStudent < 10 ? "0" : "") + (timeMin + breakStudent) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}

timeToWalk(4000, 0.60, 5)