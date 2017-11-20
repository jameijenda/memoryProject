




/***********************************************************************

 Taken from: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript 
  
  Submitted by "Yusuf"

*************************************************************************/




var stop = true;


var totalSeconds = 0;
function countTimer() {
     if (!stop) {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
  }
};












