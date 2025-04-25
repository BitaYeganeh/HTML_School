// Harjoitus 14: Etsi kaikki "Jonna":n esiintymät attendees-taulukossa

/*
Etsi kaikki kohdat, joissa "Jonna" esiintyy attendees-taulukossa.
Odotettu tulos: [0, 2, 4]
*/
// Kirjoita koodisi tähän
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];
let indeksi = [];

for (let i = 0; i < attendees.length; i++) {
  if (attendees[i] === "Jonna") {
    indeksi.push(i);
  }
}

console.log(indeksi); // [0, 2, 4]


//way 2:
let jonnaIndexes= [];
attendees.forEach((name, index)=> {
  if (name == "Jonna"){
    jonnaIndexes.push(index);
    //console.log(index)
  }
});
console.log(jonnaIndexes);

