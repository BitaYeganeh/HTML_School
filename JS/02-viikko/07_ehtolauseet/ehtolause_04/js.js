/* 
Kirjoita funktio nimeltä canVote:
Ota ikä parametrina.
Palauta true, jos ikä on 18 tai enemmän, muuten false.
Tulosta "Saat äänestää" tai "Et saa vielä äänestää" funktion palauttaman tuloksen perusteella.
*/
function canVote(Age) {
    if (Age >= 18 ) {
        return "Saat äänestää";
} else {
    return "Et saa vielä äänestää";
}
}
console.log(canVote(20));
console.log(canVote(16))