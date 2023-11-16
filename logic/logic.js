const secondTimer= document.getElementById("second-stop")
const hourStop= document.getElementById("hour-stop")
const minutesTimer=document.getElementById("minutes-stop")

let second= 2;
let hour=5;
let minutes=0;
minutesTimer.innerText= minutes
hourStop.innerText=hour;

setInterval(()=>{
      if(second>=0){
        secondTimer.innerText=second;
        second=second-1
      }
      else if(minutes!=0 || hour!=0 ){
          secondTimer.innerText=59
          second=second+59
          if(minutes>0){
              minutesTimer.innerText= minutes-1
              minutes= minutes-1
          }
          
          

        }

        if(minutes==0 && second==-1 && hour!==0 ) {
            hourStop.innerText=hour-1
            hour=hour-1
            minutesTimer.innerText= 59            
            minutes=minutes+60
          }
        if(minutes<0 && second<0 && hour!=0) {
            hourStop.innerText=hour-1
            hour=hour-1
          }
     
     
},1000)
