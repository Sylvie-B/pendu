// table of words
let allWord = [
    'ELEPHANT',
    'MAISON',
    'DEVINETTE',
    'VOITURE',
    'ORDINATEUR',
    'FORMATION'
]

// random on table = 1 of allWord
let w = Math.ceil(Math.random() * allWord.length-1);

// letter to table & hollow display
let hollow = document.getElementById('hollow');
for (let i = 0 ; i < allWord[w].length; i++){
    // display hollow word
    let eachLetter = document.createElement('div');
    eachLetter.innerHTML = allWord[w][i];
    eachLetter.style.border = '1px dashed gray';
    eachLetter.style.width = '3vw';
    eachLetter.style.height = '3vh';
    eachLetter.style.margin = '5px';
    hollow.appendChild(eachLetter);
    console.log(hollow);
}

// get user letter
let inputLetter = document.getElementById('letter');
inputLetter.focus();

//  submit button
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
        where(letter, word[w])
    }
    else{
        console.log("la lettre ne se trouve pas dans le mot");
    }
}

// is the letter in the word ?   ! is it more than one ?
function where (letter, result){
    for (let l = 0 ; l < word[w].length ; l++){
        if(result[l] === letter){
            eachLetter.style.color = 'black';
        }
    }
}
// display right letter(s)

// say user if not

// win : say user find the good word & random on table

// loose : display word & say game over     ! count test

// bonus : display pendu
