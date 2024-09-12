const phrases = [
    "snow is white",
    "greece is sunny",
    "programming is fun",
    "javascript is handy",
    "hello world"
];
const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');
const phraseDisplay = document.querySelector('#phrase ul');
const startButton = document.querySelector('.btn__reset');
let missed = 0;
const maxGuesses = 5;
let activePhrase = '';


// Pick a random phrase


const getRandomPhraseAsArray = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].split('');
}

// Adds the letters of a string to the display

const addPhraseToDisplay = arr => {
    phraseDisplay.innerHTML = '';
    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        li.textContent = arr[i];
        if(arr[i] === ' ') {
            li.classList.add('space');
        } else {
            li.classList.add('letter');
        }
        phraseDisplay.appendChild(li);
    }
}

// Check if a letter is in the phrase

// Check if the game has been won or lost

// Hide the overlay and reset game

const hideOverlay = () => {
    overlay.style.display = 'none';
}

// Listen for the start game button to be pressed

startButton.addEventListener('click', () => {
    hideOverlay();
    activePhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(activePhrase);
});

// Listen for the onscreen keyboard to be clicked