// Harjoitus 1: Määritä taulukon pituus ja tarkista ehto
/*
Luo funktio nimeltä myAlphabetLength, joka tulostaa myAlphabet-taulukon pituuden.
Jos pituus on 5 tai enemmän, tulosta: "Taulukon pituus on riittävä".
Muussa tapauksessa tulosta: "Taulukon pituus on liian lyhyt."
*/
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function myAlphabetLength() {
    let myAlphabetLength = myAlphabet.length;
    if (myAlphabetLength >= 5) {
      console.log("Taulukon pituus on riittävä.");
    } else {
        console.log("Taulukon pituus on liian lyhyt.");

    }
}
myAlphabetLength();
        

//way 2:
let ans = myAlphabet.length > 5 ? "Riittävä" : "Ei Riittävä";
console.log("Tama on vastaus:", ans);

    


