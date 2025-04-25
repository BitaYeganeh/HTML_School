// Harjoitus 7: Suodata vain positiiviset lämpötilat temperatures-taulukosta

/*
Suodata ja tulosta vain positiiviset arvot temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita koodisi tähän

/*
Kirjoita funktio getPositiveTemperatures, joka palauttaa uuden taulukon,
joka sisältää vain lämpötilat, jotka ovat suurempia kuin 0 temperatures-taulukosta.
Odotettu tulos: [5, 15, 20, 2]
*/
// Kirjoita funktiosi tähän
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
function getPositiveTemperatures(lampötilä){
    let positiveTemp = [];
    for(let i=0; i<lampötilä.length; i++){
        if (lampötilä [i] > 0){
            positiveTemp.push(lampötilä[i]);
        }
    }
    return positiveTemp;
}
 console.log(getPositiveTemperatures(temperatures));


 //way 2:
 let positiveTemps = [...temperatures].filter((temp)=> temp>0);
 console.log(positiveTemps);
