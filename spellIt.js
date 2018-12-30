// function spellIt() {
    // I can't use .textContent becouse $('#myH1') return jQuety object not a HTML node.
//     let txt = $('#myH1').textContent;
    
//     console.log(txt);
// }

// spellIt();

//1.Stworzyć kontener w którym zostanie wyświetlony text.
//2.Każdą z liter ze zmiennej txt umieścić w divie o classie letterDiv
//3.Po kolei rozszeżać kontener o kolejne divy z literami. -
//to zadanie dla pętli która wykona się tyle razy ile liter zawiera zmienna txt
// w każdej iteracji pętli, kontener będzie rozszeżany o litere o indeksie i 


function spellItWithJQuery() {

    let txt = 'This is text to print letter by letter';
    
    

    for(let i = 0; i < txt.length; i++){

        let mainContainer = document.getElementById('mainContainer');
        let letter = txt[i];
        let myLetter = document.createTextNode(letter);

        let span = document.createElement('span');
        span.classList.add('.letterDiv');

        span.appendChild(myLetter);
        mainContainer.appendChild(span);


    }

    console.log(mainContainer);
    
    
}

spellItWithJQuery();

