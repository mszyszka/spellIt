// function spellIt() {
    // I can't use .textContent becouse $('#myH1') return jQuety object not a HTML node.
//     let txt = $('#myH1').textContent;
    
//     console.log(txt);
// }

// spellIt();


function spellItWithJQuery() {
    let txt = $('#myH1').text();
    let lettersArray = [];
    

    for(let i = 0; i <= txt.length; i++){
        let letter = txt[i];

        let myDiv = document.createElement('div');
        myDiv.addClass(divWithLetter);
        let myLetter = document.createTextNode(letter);

        myDiv.appendChild(myLetter);

        console.log(myDiv);


        // lettersArray.push(letter);
    }

    // $.each(lettersArray, function() {
    //     this.
    // });
    
}

spellItWithJQuery();

