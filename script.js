// Code goes here


var AudioContext = window.AudioContext || window.webkitAudioContext;
var myAudioContext = new AudioContext();


var source = myAudioContext.createOscillator();
var gainNode = myAudioContext.createGain();
var finish = myAudioContext.destination;

source.type = 0; // sine wave

source.connect(myAudioContext.destination);
// play right now (0 seconds from now)
function playBeat () {
  var time = arguments[0];
  source.start(time);
  source.stop(time + 1/32);
}

function playBeats (){
  var num = arguments[0];
  var currentTime = myAudioContext.currentTime;
  var step = 1/16;
  for (var i = 0; i < num ; i++) {
    source.start(currentTime);
    source.stop(currentTime + step);
    currentTime = currentTime + 1;
  }
}

$('#myButton').on('click', function () {
  var $btn = $(this).button('loading')
  //playBeat();
  beep();

  // business logic...
//  $btn.button('reset')
})
//playBeats(10)
//playBeat(0);
//playBeat(1);
