function time(){
    const dateTime = new Date()
    const hrs = dateTime.getHours()
    const mins = dateTime.getMinutes()
    const secs = dateTime.getSeconds()
    const sessions = document.getElementById('sessions')

    if (hrs>=12){
        sessions.innerHTML = 'PM'
    }else{
        sessions.innerHTML = 'AM'
    }
    


 document.getElementById('hours').innerHTML = hrs
 document.getElementById('minutes').innerHTML = mins.toString().padStart(2, '0')
 document.getElementById('seconds').innerHTML = secs.toString().padStart(2, '0')

}
setInterval(time, 1000)
