/* Taken from: https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript */


/*  var sec = 0;
	function pad ( val ) { return val > 9 ? val : "0" + val; }
    var timer = function(){setInterval( function(){
        $("#seconds").html(pad(++sec%60));
        $("#minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);
};*/




////// Probar con este!!!  //////

/*<div id="timer"></div>
<div id ="stop_timer" onclick="clearInterval(timerVar)">Stop time</div>*/

/*var timerVar = setInterval(countTimer, 1000);*/

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


/* Use this!!!!     timerStop = !timerStop  --- Click event handler?*/









