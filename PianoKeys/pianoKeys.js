// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
//Step 1
function keyPlay() {
  event.target.style.backgroundColor = 'blue';
}

//Step 2
function keyReturn() {
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
//Step 3
function handle(note) {
  //Step 4
  note.addEventListener('mousedown', keyPlay);
  //Step 5
  note.addEventListener('mouseup', keyReturn);
}


// Write a loop that runs the array elements through the function
//Step 6
notes.forEach(handle);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
//Step 8
nextOne.addEventListener('click', function() {
  //Step 9.1
  nextTwo.hidden = false;
  //Step 9.2
  nextOne.hidden = true;

  //Step 10.1
  document.querySelector('letter-note-five').innerHTML = 'D';
  //Step 10.2
  document.querySelector('letter-note-six').innerHTML = 'C';
});

// Write anonymous event handler property and function for the second progress button
//Step 11
nextTwo.addEventListener('click', function() {
  //Step 12.1
  nextThree.hidden = false;
  //Step 12.2
  nextTwo.hidden = true;

  //Step 13.1
  document.querySelector('word-five').innerHTML = 'DEAR';
  //Step 13.2
  document.querySelector('word-six').innerHTML = 'FRI-';

  //Step 14
  lastLyric.style.display = 'inline-block';

  //Step 15.1
  document.querySelector('letter-note-three').innerHTML = 'G';
  //Step 15.2
  document.querySelector('letter-note-four').innerHTML = 'E';
  //Step 15.3
  document.querySelector('letter-note-five').innerHTML = 'C';
  //Step 15.4
  document.querySelector('letter-note-six').innerHTML = 'B';
});

// Write anonymous event handler property and function for the third progress button
//Step 16
nextThree.addEventListener('click', function() {
  //Step 17.1
  startOver.hidden = false;
  //Step 17.2
  nextThree.hidden = true;

  //Step 18.1
  document.getElementById('word-one').innerHTML = 'HAP-';
  //Step 19.1
  document.getElementById('letter-note-one').innetHTML = 'F';
  //Step 18.2
  document.getElementById('word-two').innerHTML = 'PY';
  //Step 19.2
  document.getElementById('letter-note-two').innetHTML = 'F';
  //Step 18.3
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  //Step 19.3
  document.getElementById('letter-note-three').innetHTML = 'E';
  //Step 18.4
  document.getElementById('word-four').innerHTML = 'DAY';
  //Step 19.4
  document.getElementById('letter-note-four').innetHTML = 'C';
  //Step 18.5
  document.getElementById('word-five').innerHTML = 'TO';
  //Step 19.5
  document.getElementById('letter-note-five').innetHTML = 'D';
  //Step 18.6
  document.getElementById('word-six').innerHTML = 'YOU!';
  //Step 19.6
  document.getElementById('letter-note-six').innetHTML = 'C';

  //Step 20
  lastLyric.style.display = 'none';
});

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
