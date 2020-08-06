var timeInner = document.getElementById('time');
setInterval(setTime,1000);
function setTime(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    hour = update(hour);
    minute = update(minute);
    second = update(second);
    var system, current;
    var value = document.querySelector('input[name="time-sel"]:checked').value;
  
    if(value === '12'){
        [hour, system] = (hour === 0) ? [12,'AM'] : (hour > 12) ? [(hour - 12),'PM'] : [hour, 'AM'];
        current = `${hour} : ${minute} : ${second} ${system}`;
        timeInner.innerHTML = current;
    }else{
        current = `${hour} : ${minute} : ${second}`;
        timeInner.innerHTML = current;
    }
    document.getElementsByName('time-sel').forEach((time) => {
        time.addEventListener('click', (e) => {
            value = e.target.value;
            if(value === '12'){
                let system;
                [hour, system] = (hour === 0) ? [12,'AM'] : (hour > 12) ? [(hour - 12),'PM'] : [hour, 'AM'];
                current = `${hour} : ${minute} : ${second} ${system}`;
                timeInner.innerHTML = current;
            }else{
                current = `${hour} : ${minute} : ${second}`;
                timeInner.innerHTML = current;

             }
        });
    });
}


function update(time){
    return (time < 10) ? "0"+time : time;
}
