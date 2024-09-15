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
const hearts = document.querySelectorAll('.tries img'); 
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

const checkLetter = button => {
    let match = null; 
    const letters = document.querySelectorAll('.letter'); 
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].textContent.toLowerCase() === button.textContent.toLowerCase()) {
            letters[i].classList.add('show'); 
            match = button.textContent; 
        }
    }
    
    return match; 
};


// Listen for the onscreen keyboard to be clicked

keyboard.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON' && !e.target.disabled){ // Check if the clicked element is a button
        const button = e.target;   // Get the clicked button
        // Add 'chosen' class to the button
        button.classList.add('chosen');
        // Disable the button to prevent it from being clicked again
        button.disabled = true;
        // Pass the button to the checkLetter function
        const letterFound = checkLetter(button);

        // Check if the letter was not found
        if(letterFound === null) {
            missed++;
            updateHearts();
        }
        checkWin();  
    }
});

// Function to replace liveHeart with lostHeart
function updateHearts() {
    hearts[maxGuesses - missed].src = 'images/lostHeart.png'; 
}

// Check if the game has been won or lost

function checkWin() {
    const revealedLetters = document.querySelectorAll('.show').length;
    const totalLetters = document.querySelectorAll('.letter').length;

    if (revealedLetters === totalLetters) {
        showOverlay('win', 'Congratulations, You Win!');
    } else if (missed >= maxGuesses) {
        showOverlay('lose', 'Sorry, You Lost!');
    }
}

// Function to show the overlay with win/lose message
function showOverlay(className, message) {
    setTimeout(() => {
        overlay.classList.add(className);
        overlay.style.display = 'flex'
        overlay.querySelector('.title').textContent = message;
        startButton.textContent = 'Reset Game';
    }, 600); // 0.6-second delay
}

// Hide the overlay

function hideOverlay() {
    overlay.style.display = 'none';
    overlay.classList.remove('win', 'lose', 'start'); 
}

// Listen for the start game button to be pressed

startButton.addEventListener('click', () => {
    hideOverlay();
    resetGame();
    activePhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(activePhrase);
});

// Reset game

function resetGame() {
    missed = 0;
    phraseDisplay.innerHTML = '';
    hearts.forEach(heart => heart.src = 'images/liveHeart.png');
    const buttons = keyboard.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = false;
        button.classList.remove('chosen');
    });
}
