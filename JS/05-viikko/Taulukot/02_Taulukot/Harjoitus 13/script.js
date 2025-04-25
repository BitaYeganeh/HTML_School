// Harjoitus 13: Tarkista sisältääkö zooAnimals "Tiikeri":n
/*
Odotettu tulos:
true (jos sisältää)
false (jos ei sisällä)
*/
// Kirjoita koodisi tähän

let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
let indeksi = zooAnimals.indexOf("Tiikeri");
if(indeksi >= 0) {
    console.log("true");

} else{
    console.log("false");
}

//way 2:
let onTiikeri = zooAnimals.includes("Tiikeri");
console.log(onTiikeri);