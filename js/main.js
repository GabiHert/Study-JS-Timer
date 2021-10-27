
function Myclock()
{
    const Timer = document.querySelector('.timer');
    const Start = document.querySelector('.start');
    const Stop = document.querySelector('.stop');
    const Reset = document.querySelector('.reset');
    
    var clock = ["00","00","00"];
    
    class TimerClock    
    {
        add()
        {
            var sec = Number(clock[2]);
            var min = Number(clock[1]);
            var hour = Number(clock[0]);
    
            sec++;
    
            if(sec > 60)
            {
                sec = 0;
                min++;
            }
            if(min > 60)
            {
                min = 0;
                hour++;
            }
    
            (sec >= 10)?(clock[2] = sec.toString()):(clock[2] = "0" + sec.toString());
            (min >= 10)?(clock[1] = min.toString()):(clock[1] = "0" + min.toString());
            (hour >= 10)?(clock[0] = hour.toString()):(clock[0] = "0" + hour.toString());
    
            return clock[0] + ':' + clock[1] + ':' + clock[2];
            
        }
    
        clear()
        {
            clock[2] = "00";
            clock[1] = "00";
            clock[0] = "00";
            return clock[0] + ':' + clock[1] + ':' + clock[2];
        }
    }
    
    const timer = new TimerClock();
    let time;
    
    document.addEventListener("click",function(event){
    
        const element =  event.target;
    
        if(element.classList.contains("start"))
        {
            Timer.classList.remove("stoped");
            clearInterval(time);
            console.log("Start Pressed");
            time = setInterval(function(){Timer.innerHTML = timer.add()},1000); 
        }
        if(element.classList.contains("stop"))
        {
            Timer.classList.add("stoped");
            console.log("Stop Pressed");
            clearInterval(time);
        }
        if(element.classList.contains("reset"))
        {
            Timer.classList.remove("stoped");
            Timer.innerHTML = timer.clear();
        }
    })

}

Myclock();
