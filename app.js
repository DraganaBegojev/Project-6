const phrases = [
    "swedes are one of the biggest consumers of candy in the world",
    "norway has a rich viking history",
    "sweden has more moose per square kilometre than any other country",
    "the sauna is an integral part of finnish life",
    "the first ice hotel was built in sweden"
];
const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');
const phraseDisplay = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

//Start game


startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Pick a random phrase


const getRandomPhraseAsArray = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].split('');
}

// Adds the letters of a string to the display

// Check if a letter is in the phrase

// Check if the game has been won or lost

// Hide the overlay and reset game

// Listen for the start game button to be pressed

// Listen for the onscreen keyboard to be clicked