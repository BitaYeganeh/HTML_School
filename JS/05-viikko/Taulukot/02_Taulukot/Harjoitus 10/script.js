// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
// Kirjoita koodisi tähän

let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
zooAnimals.splice(1,1,"Alpakka");
console.log(zooAnimals);


//way2:

let KirahviIndex = zooAnimals.indexOf("Kirahvi");
//jos löytyy
if (KirahviIndex !== -1) {
    zooAnimals[KirahviIndex] = "Alpakka";
}
console.log(zooAnimals);