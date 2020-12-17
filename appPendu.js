// table of words
let word = [
    'elephant',
    'maison',
    'devinette',
    'voiture',
    'ordinateur',
    'formation'
]

// random on table
let w = Math.ceil(Math.random() * word.length-1);
let result = word[w];
console.log(result);

// display hollow word


// get user letter
let inputLetter = document.getElementById('letter');
inputLetter.focus();
let letter;

let submit = document.getElementById('submit');
submit.addEventListener('click', function (){
    letter = inputLetter.value;
    inputLetter.value = "";
    inputLetter.focus();
    console.log(letter);
})


// is the letter in the word ?   ! is it more than one ?

// display right letter(s)

// say user if not

// win : say user find the good word & random on table

// loose : display word & say game over     ! count test

// bonus : display pendu
