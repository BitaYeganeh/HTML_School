// Harjoitus 2: Käy läpi planets-taulukko ja tulosta jokainen planeetta ja sen indeksi

/*
Tulosta jokainen planeetta planets-taulukosta ja sen indeksi.
Odotettu tulos:
"Planeetta: Merkurius, Indeksi: 0"
...
"Planeetta: Jupiter, Indeksi: 4"
*/
// Kirjoita koodisi tähän

const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
for (let i =0; i< planets.length; i++) {
    console.log(`Planeetta: ${planets[i]}, indeksi: ${i}`);
}

