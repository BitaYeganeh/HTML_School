// Harjoitus 6: Tulosta jokaisen eläinnimen kirjaimet animalNames-taulukosta

/*
Tulosta jokaisen animalNames-taulukon alkion kaikki kirjaimet.
Odotettu tulos:
"Kirjaimet sanassa 'Leijona': L, e, i, j, o, n, a"
...
"Kirjaimet sanassa 'Panda': P, a, n, d, a"
*/
// Kirjoita koodisi tähän

let animalNames = ["Leijona", "Tiikeri", "Panda"];
for ( let i = 0; i < animalNames.length; i++ ) {
    let nimi = animalNames[i];
    let letters = nimi.split("");// ← split into characters
    
    
    console.log(`Kirjaimet sanassa '${nimi}': ${letters}`);

}
