/* 
Kirjota funktio nimeltä findMinMax:
- Kysy käyttäjältä kuinka monta numeroa he haluavat antaa. 
- Sen jälkeen pyydä käyttäjältä heidän haluamansa määrä numeroita. 
- Kun numerot on syötetty päättele ja tulosta konsoliin:
    - Pienin numero.
    - Suurin numero. 
*/
function findMinMax(){
    let numeroita = parseFloat(prompt("kuinka monta numeroa haluat?"));
    console.log(numeroita);
    let min ;
    let max ;

    //kysytään (numeroita) verran kertoja
    for (let i = 0; i < numeroita; i++){
        let newValue = parseFloat(prompt("Anna uusi arvo"));
        if (i == 0) {
            min = newValue;
            max = newValue;
        }

        //verrataan maksimiin
        if (newValue > max){
            max = newValue;
        }
        //verrataan minimiin
        if (newValue < min) {
            min = newValue;
        }
    }
console.log("Min is: ", min);
console.log("Max is: ", max)
}
findMinMax();