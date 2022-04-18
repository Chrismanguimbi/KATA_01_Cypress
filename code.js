function questionRadio(){
    let choice = document.getElementsByName("qradio");
    for(let i = 0; i < choice.length; i++){
        if(choice[i].checked){
            let value = choice[i].value;
            if(value === "Paris"){
                document.getElementById("reponseradio").innerHTML = "Bonne reponse";
            }
            else{
                document.getElementById("reponseradio").innerHTML = "Mauvaise reponse";
            }
        }
    }
}

function questionCheckBox(){
    let choice = document.getElementsByName("qcheckbox");
    for(let i = 0; i < choice.length; i++){
        if(choice[i].checked){
            let value = choice[i].value;
            if(value === "Citroen"){
                document.getElementById("reponsecheckbox").innerHTML = "Bonne reponse";
            }
            else if(value === "Peugeot"){
                document.getElementById("reponsecheckbox").innerHTML = "Bonne reponse";
            }
            else{
                document.getElementById("reponsecheckbox").innerHTML = "Mauvaise reponse";
            }
        }
    }
}

/*
function questionCheckBox(){
    let choice1 = document.getElementsByName("qcheckbox");
    let choice2 = document.getElementsByName("qcheckbox");
    for(let i = 0; i < 4; i++){
        for(let j = 3; j > -1; j--){
            if(choice1[i].checked){
                let value1 = choice1[i].value;
                let value2 = choice2[j].value;
                if(value1 === "Peugeot" && value2 === "Citroen"){
                    document.getElementById("reponsecheckbox").innerHTML = "Bonne reponse";
                }
                else{
                    document.getElementById("reponsecheckbox").innerHTML = "Mauvaise reponse";
                }
            }
        }
    }
}
*/
