// function spellIt() {
    // I can't use .textContent becouse $('#myH1') returnjQuety object not a HTML node.
//     let txt = $('#myH1').textContent;
    
//     console.log(txt);
// }

// spellIt();

function spellIt() {
    let txt = document.querySelector('#myH1').textContent;
    
    console.log(txt);
}

spellIt();



function spellItWithJQuery() {
    let txt = $('#myH1').text();
    
    console.log(txt);
}

spellItWithJQuery();

