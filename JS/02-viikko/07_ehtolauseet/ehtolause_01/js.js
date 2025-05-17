//Kirjoita funktio nimeltä checkAdult:
//Ota ikä parametrina.
//Jos ikä on 18 tai enemmän, palauta "Olet aikuinen."
//Muussa tapauksessa älä palauta mitään.
//Kutsu funktiota eri ikäarvoilla ja tulosta tulos.
function checkAdult(Age) {
    if(Age >= 18)
    return "Olet aikuinen.";
};
    console.log(checkAdult(19));
    console.log(checkAdult(5));
