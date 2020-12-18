// table of words
let allWord = [
    'ELEPHANT',
    'MAISON',
    'DEVINETTE',
    'VOITURE',
    'ORDINATEUR',
    'FORMATION',
    'DISPARITION'
]

let chance = 8;
document.getElementById('nbr').innerHTML = chance.toString();

// get infos
let wrong = document.getElementById('wrongLetter');
let answer = document.getElementById('answer');
let nbr = document.getElementById('nbr');

// random on table = 1 of allWord
let w = Math.ceil(Math.random() * allWord.length-1);

// letter to table & hollow display
let hollow = document.getElementById('hollow');

for (let i = 0 ; i < allWord[w].length; i++){
    // display hollow letters
    let eachLetter = document.createElement('div');
    eachLetter.innerHTML = allWord[w][i];
    eachLetter.style.backgroundColor = 'gray';
    eachLetter.style.width = '3vw';
    eachLetter.style.margin = '5px';
    hollow.appendChild(eachLetter);
    console.log(allWord[w][i]);
}

// get user letter & word
let inputLetter = document.getElementById('letter');
inputLetter.focus();
let inputWord = document.getElementById('word');

//  submit letter
let submit = document.getElementById('submit');
submit.addEventListener('click', function (){
    let letter = inputLetter.value.toUpperCase();
    inputLetter.value = "";
    inputLetter.focus();
    console.log(letter);
    testLetter(letter);
})

// submit word
let submitWord = document.getElementById('submitWord');
submitWord.addEventListener('click', function (){
    // account
    chance --;
    document.getElementById('nbr').innerHTML = chance.toString();
    // test word
    let test = inputWord.value.toUpperCase();
    if(allWord[w] === test){
        console.log("you win");
    }
    else{
        console.log("you loose")
    }
    inputWord.value = "";
})

// function testLetter
function testLetter (letter){
    // is the letter in the word ?
    if(allWord[w].includes(letter)){
        answer.innerHTML = "la lettre se trouve dans le mot";
        // if true, where ?
        let spell = document.getElementById('hollow').getElementsByTagName('div');
        // console.log("spell = " + spell[0].innerHTML);
        for (let s = 0; s < allWord[w].length; s++){
            if (letter === allWord[w][s]){
                spell[s].style.color = 'black';
            }
        }
    }
    else{   // say user if not
        answer.innerHTML = "la lettre ne se trouve pas dans le mot";
    }
}

// win : say user find the good word & random on table

// loose : display word & say game over     ! count test

// bonus : display pendu

