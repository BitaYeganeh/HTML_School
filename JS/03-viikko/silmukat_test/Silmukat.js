
/* tulosta luvut 1-10 */

let laskuri = 1;
while(laskuri <= 10){
    console.log(laskuri);
    laskuri++;  // sama kuin laskuri = laskuri + 1
}
/* sama for-lauseella */
for(let laskuri = 1; laskuri <= 10; laskuri++){
    console.log(laskuri);
}
while(true){
    let salasana = prompt("Anna salasana.")
    if(salasana == "sala"){
        alert("Oikein!");
        //break "rikko" eli lopettaa silmukan
        break;
    }
}