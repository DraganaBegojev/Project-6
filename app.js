const phrases = [
    "swedes are one of the biggest consumers of candy in the world",
    "norway has a rich viking history",
    "sweden has more moose per square kilometre than any other country",
    "the sauna is an integral part of finnish life",
    "the first ice hotel was built in sweden"
];
const overlay = document.getElementById('overlay');
const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let missed = 0;

//Start game


startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Pick a random phrase

function getRandomPhrase(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].split('');
}

console.log(getRandomPhrase(phrases));