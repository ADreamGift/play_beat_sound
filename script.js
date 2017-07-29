// Code goes here


if('webkitAudioContext' in window) {
    var myAudioContext = new webkitAudioContext();
}

var source = myAudioContext.createOscillator();
source.type = 0; // sine wave

source.connect(myAudioContext.destination);
// play right now (0 seconds from now)
source.noteOn(0);
// play 8 notes evenly spaced over the course of a half-second
for (var i = 0; i < 8; i++) {
    var rest = i / 16;
    source.noteOn(myAudioContext.currentTime + rest);
}