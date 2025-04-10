/* 
Muokkaa harjoituksen 4 (tehty opettajan kanssa) ohjelmaa niin, että 
ohjelma laskee KAIKKIEN annettujen matkojen keskinopeuden. 

Luo funktio allTripsAverageSpeed, joka pyytää jatkuvasti käyttäjää syöttämään 
etäisyyden (kilometreinä) ja ajan (tunteina). 
Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
Silloin ohjelma tulostaa kaikkien matkojen yhteenlasketun keskinopeuden. 
 */
function averageSpeed() {
    while(true) {
let distance = parseFloat(prompt("Anna etäisyys."))
//ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi.
    if(distance == 0) {
        break;
    }
    //ei ole luku tai on negatiivinen
if (isNaN(distance) || distance < 0) {
    continue;
}

let time = parseFloat(prompt("Anna aika."))
    //ei ole luku tai on negatiivinen
if(isNaN(time)|| time < 0) {
    // palaa silmukan alkuun
    continue;
}

let average = distance / time;
alert("Average speed is " + average);
    }