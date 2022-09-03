function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = dateTime.getMinutes();
    document.getElementById('seconds').innerHTML = dateTime.getSeconds();
}
setInterval(displayTime, 10);
