// Harjoitus 5: Etsi yleiset eläinlajit elainvarasto1 ja elainvarasto2 taulukoista

/*
Tunnista ja tulosta eläinlajit, jotka löytyvät molemmista taulukoista.
Odotettu tulos:
"Yhteinen laji: Kettu"
"Yhteinen laji: Karhu"
*/
// Kirjoita koodisi tähän

let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];

   for (let i = 0; i < elainvarasto1.length; i++ ) {

    let current=elainvarasto1[i];
    if (elainvarasto2.includes(current)){
        console.log("Yhteinen laji:" + current);

    }
    
    }


    //way 2:
    elainvarasto1.forEach((elain)=> {
        if (elainvarasto2.includes(elain)){
            console.log("Yhteinen laji" + elain);
        }
    })
        
    



