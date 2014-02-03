function sleep(seconds) {
  var start = new Date().getTime();
  while (new Date() < start + seconds * 1000) {}
  return 0;
}

var context = new webkitAudioContext();
var oscillator = context.createOscillator();
oscillator.type = 1;


function run(oscillator, context, note) {
    oscillator.connect(context.destination);
    oscillator.frequency.value = 50 * note;
    oscillator.noteOn(0);
    sleep(0.1);
    oscillator.disconnect();
    sleep(0.0);
}
run(oscillator, context, 5);
