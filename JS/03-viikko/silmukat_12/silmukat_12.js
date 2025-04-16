/* 
Kirjoita funktio nimeltä buildGroceryList:
- Pyydä käyttäjää syöttämään ruokakauppaostoksia yksi kerrallaan.
- Lopeta, kun käyttäjä kirjoittaa "valmis".
Tulosta koko ostoslista konsoliin.
*/

function buildGroceryList(){
    let groceryList = [];  // Oikea muuttujan nimi ja tyhjä lista

    while (true) {
        let item = prompt("What do you need to buy? (write 'Ready' when you dont need anything else.)");

        // Jos käyttäjä kirjoittaa 'valmis', lopetetaan silmukka
        if (item === null || item.toLowerCase() === "ready" || item.toLowerCase() === "valmis") {
            break;
        }

        // Lisätään syötetty tuote listalle
        groceryList.push(item);
    }
    console.log("Grocery list:");
    for (let i = 0; i < groceryList.length; i++) {
        console.log("- " + groceryList[i]);
    
}}
buildGroceryList();
