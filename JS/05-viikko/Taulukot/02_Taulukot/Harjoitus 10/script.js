// Harjoitus 10: Korvaa "Kirahvi" sanalla "Alpakka" zooAnimals-taulukossa
/*
Odotettu tulos: ["Elefantti", "Alpakka", "Panda", "Kettu", "Kenguru"]
*/
// Kirjoita koodisi tähän

let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
zooAnimals.splice(1,1,"Alpakka");
console.log(zooAnimals);