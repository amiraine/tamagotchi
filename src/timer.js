
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let totalSeconds = 0;

function timer(){
  totalSeconds ++;
  seconds.innerHTML = (totalSeconds % 60);
  minutes.innerHTML = (parseInt(totalSeconds/60));
}
setInterval(timer, 1000);


export { minutes, seconds, totalSeconds, timer };
