// Harjoitus 9: Yritä etsiä eläin, jota ei ole zooAnimals-taulukossa
/*
Etsi "Pingviini":n indeksi zooAnimals-taulukosta.
Jos sitä ei löydy, tulosta "Pingviini ei ole eläintarhassa."
Odotettu tulos: -1
*/
// Kirjoita koodisi tähän
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
let indeksi= zooAnimals.indexOf("pingviini");

if (indeksi === -1) {
    console.log("Pingviini ei ole eläintarhassa.");
} else {
    console.log("Pingviini:n indeksi on:", indeksi);
}
