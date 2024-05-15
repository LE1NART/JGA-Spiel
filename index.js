const fragen = [{
    "fragenId":1,
    "fragenText":"Dies das",
    "fragenAntwort":"Haha jaja"
},
{
    "fragenId":2,
    "fragenText":"Dies und jenes",
    "fragenAntwort":"Haha neenee"
}];


function button(id){

    let popup = document.getElementById("popUp");
    popup.style.visibility = 'visible';

    let qText = document.getElementById("questionText");
    let abut = document.getElementById("awnserButton");
    abut.awnserId = id;

    for(let y of fragen){
        if(y.fragenId == id){
            qText.innerHTML = y.fragenText;
        }       
    }
}

function solutionShow(id){
    let aText = document.getElementById("awnserText");
    aText.style.visibility = 'visible';

    for(let y of fragen){
        if(y.fragenId == id){
            aText.innerHTML = y.fragenAntwort;
        }       
    }

}

function hidePopup(){
    let popup = document.getElementById("popUp");
    popup.style.visibility = 'hidden';

    let aText = document.getElementById("awnserText");
    aText.style.visibility = 'hidden';

}
