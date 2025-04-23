// Harjoitus 3: Tulosta taulukon alkioiden tyypit käyttäen mixedValues-taulukkoa


/*
Käy läpi mixedValues-taulukko ja tulosta jokainen alkio, sen indeksi ja tietotyyppi.
Odotettu tulos:
"Alkio: 42, Indeksi: 0, Tyyppi: number"
...
"Alkio: undefined, Indeksi: 5, Tyyppi: undefined"
*/
// Kirjoita koodisi tähän

const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];
for (let i = 0; i < mixedValues.length; i++ ) {
console.log(`Alkio: ${mixedValues[i]}, Indeksi: ${i}, Tyyppi: ${typeof mixedValues[i]}`);
    }