// function spellIt() {
    // I can't use .textContent becouse $('#myH1') return jQuety object not a HTML node.
//     let txt = $('#myH1').textContent;
    
//     console.log(txt);
// }

// spellIt();


function spellItWithJQuery() {
    let txt = 'This is text to print letter by letter';
    // let lettersArray = [];
    

    for(let i = 0; i <= txt.length; i++){
        let letter = txt[i];

        let myH1 = document.createElement('h1');
        myH1.classList.add('.myH1');

        let myDiv = document.createElement('div');
        myDiv.classList.add('.letterDiv');

        let myLetter = document.createTextNode(letter);

        myDiv.appendChild(myLetter);
        myH1.appendChild(myDiv);

        console.log(myDiv);


    }

    
}

spellItWithJQuery();

