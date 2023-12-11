

let AMPM = document.getElementById('AMPM');

function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    if(hr > 12){
        hr = hr - 12;
        AMPM.innerHTML = "PM";
    }else{
        AMPM.innerHTML = "AM"
    }
    document.getElementById('hour').innerHTML = paddZero(hr); 
    document.getElementById('min').innerHTML = paddZero(min); 
    document.getElementById('sec').innerHTML = paddZero(sec); 
}
function paddZero(value){
    return value<9? "0"+value:value; 
}

setInterval(displayTime,500);