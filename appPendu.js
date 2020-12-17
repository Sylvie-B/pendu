// table of words
let word = [
    'ELEPHANT',
    'MAISON',
    'DEVINETTE',
    'VOITURE',
    'ORDINATEUR',
    'FORMATION'
]

// random on table
let w = Math.ceil(Math.random() * word.length-1);
let result = word[w];
console.log(result);

// letter to table & hollow display
let hollow = document.getElementById('hollow');
for (let i = 0 ; i < result.length; i++){
    console.log(result[i]);
    // display hollow word
    let eachLetter = document.createElement('div');
    eachLetter.innerHTML = result[i];
    eachLetter.style.border = '1px dashed gray';
    eachLetter.style.width = '2vw';
    eachLetter.style.margin = '5px';
    hollow.appendChild(eachLetter);
    console.log(hollow);
}

// get user letter
let inputLetter = document.getElementById('letter');
inputLetter.focus();
// button
let submit = document.getElementById('submit');
submit.addEventListener('click', function (){
    let letter = inputLetter.value.toUpperCase();
    inputLetter.value = "";
    inputLetter.focus();
    console.log(letter);
    testLetter(letter);
})

// function testLetter
function testLetter (letter){
    if(word[w].includes(letter)){
        console.log("la lettre se trouve dans le mot");
    }
    else{
        console.log("la lettre ne se trouve pas dans le mot");
    }
}

// is the letter in the word ?   ! is it more than one ?
function where (letter){

}
// display right letter(s)

// say user if not

// win : say user find the good word & random on table

// loose : display word & say game over     ! count test

// bonus : display pendu
