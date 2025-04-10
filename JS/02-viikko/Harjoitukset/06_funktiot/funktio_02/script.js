/* Luo funktio nimeltä isEven, joka:
Ottaa yhden parametrin, num.
Palauttaa true, jos num on parillinen, muuten palauttaa false.
Kutsu funktiota arvoilla 4 ja 7.
Tulosta tulokset käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
function isEven(num){
    if (num % 2 === 0){
    return "true";
} else {
    return "false";
}
}
console.log(isEven(4));
console.log(isEven(7));