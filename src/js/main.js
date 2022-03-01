console.log("cargado");

const numbersLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//TODO: I got this from the var_dump of my implementation on php, do a dinamic array flip to object! this is so ugly!
const lettersNumbers = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25
}

const results = [4, 12, 9, 23, 15, 22];


window.onload = function () {
    document.getElementById('boton').onclick = solve;
}

function calculateResults() {
    const testEncrypt = 'wordle';
    const testResult = 'aaaaaa';
}

function solve(e) {
    const worldeUrl = document.forms[0]['url'].value;
    console.log(worldeUrl);
    const word = getWordParameter(worldeUrl);
    console.log(word);
    e.preventDefault();
}

function getWordParameter(url) {

    var regex = new RegExp('[?&]word(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}