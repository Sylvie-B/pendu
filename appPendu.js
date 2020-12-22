
// table of words
let allWord = ['ELEPHANT', 'MAISON', 'DEVINETTE', 'VOITURE', 'ORDINATEUR', 'FORMATION', 'DISPARITION']

// object word
let wordToFind = function (noun) {

    this.word = noun;

    this.getLetter = function () {
        let allLetter = Array.from(this.word);
        for (let i = 0; i < allLetter.length; i++) {
            // display hollow letters
            let letterCase = document.createElement('div');
            letterCase.innerHTML = allLetter[i].toString();
            hollow.appendChild(letterCase);
            console.log(letterCase);
        }
        return allLetter;
    }

    this.setLetter = function () {
        // this.word = this.word.toUpperCase();
        // find & replace é, è, ê, î
        this.word = this.word.replaceAll('é', 'e');
        this.word = this.word.replaceAll('è', 'e');
        this.word = this.word.replaceAll('ê', 'e');
        this.word = this.word.replaceAll('î', 'i');
        this.word = this.word.replaceAll('â', 'a');
        this.word = this.word.replaceAll('ô', 'o');
        this.word = this.word.toUpperCase();
    }
}

// new random word
let w = Math.ceil(Math.random() * allWord.length-1);
let theWord = new wordToFind(allWord[w]);

// hollow display
let hollow = document.getElementById('hollow');
// display hollow letters
theWord.getLetter();

// number of chance
let chance = 5;
document.getElementById('nbr').innerHTML = chance.toString();

// get infos
let wrong = document.getElementById('wrongLetter');
let answer = document.getElementById('answer');
let nbr = document.getElementById('nbr');

// get form letter & form word
let inputLetter = document.getElementById('letter');
inputLetter.focus();
let inputWord = document.getElementById('word');

//  submit button letter
let submit = document.getElementById('submit');
submit.addEventListener('click', function (){
    let letter = inputLetter.value.toUpperCase();
    inputLetter.value = "";
    inputLetter.focus();
    testLetter(letter);
})

// function testLetter
function testLetter (letter){
    if (chance > 0){
        // is the letter in the word ?
        if(theWord.word.includes(letter)){
            answer.innerHTML = "la lettre se trouve dans le mot";
            // if true, where ?
            let spell = document.getElementById('hollow').getElementsByTagName('div');
            // console.log("spell = " + spell[0].innerHTML);
            for (let s = 0; s < theWord.word.length; s++){
                if (letter === theWord.word[s]){
                    spell[s].style.color = 'black';
                }
            }
        }
        else{   // say user if not
            answer.innerHTML = "la lettre ne se trouve pas dans le mot";
            chance --;
            nbr.innerHTML = chance.toString();
            wrong.innerHTML += letter;
        }
    }
    else {
        // loose : display word & say game over     ! count test
        answer.innerHTML = "Il n'y a plus de chance, vous avez perdu";
    }
}

// submit word
let submitWord = document.getElementById('submitWord');
submitWord.addEventListener('click', function (){
    // test word
    let userWord = new wordToFind(inputWord.value);
    userWord.setLetter();
    console.log(userWord);
    if(userWord.word === theWord.word){
        // win : say user find the good word & random on table
        console.log("you win");
        answer.innerHTML = "Bravo, vous avez trouvé le mot";
    }
    else{
        // account
        chance --;
        nbr.innerHTML = chance.toString();
        console.log("you loose")
        answer.innerHTML = "ce n'est pas le bon mot, vous avez perdu";
    }
    inputWord.value = "";
})

// // bonus : display pendu
// let imgFond = document.createElement('div');
// imgFond.innerHTML = '<img src="pendu-3.png" alt="pendu" height="393" width="356"/>'
// document.getElementById('frame').prepend(imgFond);
//
