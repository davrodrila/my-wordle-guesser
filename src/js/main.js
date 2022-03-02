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



window.onload = function () {
    document.getElementById('boton').onclick = solve;
}

function solve(e) {
    const results = [4, 12, 9, 23, 15, 22];
    const maxSize = numbersLetters.length;
    const worldeUrl = document.forms[0]['url'].value;
    const word = getWordParameter(worldeUrl);
    if (typeof word !== "string" || word.length <= 0) {
        alert("URL invalida");
        return false;
    }
    let solvedWord = '';
    let resultOffset = 0;
    console.log(results);
    try {
        for (let i = 0; i < word.length; i++) {
            console.log(i);
            console.log(word);
            let encryptedCharacter = word[i];
            let attemptedDistance = results[resultOffset] + lettersNumbers[encryptedCharacter];
            console.log(encryptedCharacter);
            console.log(attemptedDistance);
            if (attemptedDistance > maxSize) {
                attemptedDistance = attemptedDistance % maxSize;
            } else if (attemptedDistance === maxSize) {
                attemptedDistance = 0;
            }

            solvedWord += numbersLetters[attemptedDistance];
            console.log(solvedWord);
            resultOffset++;
            if (resultOffset >= results.length) {
                resultOffset = 0;
            }
        }
    } catch (e) {
        console.log(e);
        return false;
    }

    document.getElementById('palabra').innerHTML = solvedWord;
    let contenedor = document.getElementById('contenedorAdivinacion');
    contenedor.classList.remove('hide');
    contenedor.classList.add('show');

    e.preventDefault();
}

function getWordParameter(url) {
    var regex = new RegExp('[?&]word(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}