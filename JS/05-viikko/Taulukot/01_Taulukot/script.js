


//1. Käy `teamMembers`-taulukko läpi ja tulosta jokainen nimi konsoliin.//

let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];
teamMembers.forEach((name) => {
    console.log(name);

}); 
//way ß2
teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];
console.log(teamMembers);

//2. Poista taulukon ensimmäinen jäsen.  

teamMembers.shift();
console.log(teamMembers);

//3. Poista taulukon viimeinen jäsen.  
teamMembers.pop();
console.log(teamMembers);

//4. Lisää uusi jäsen "Alex" taulukon alkuun.  
teamMembers.splice(0,0,"Alex");
console.log(teamMembers);

//4. Lisää uusi jäsen "Alex" taulukon alkuun.  
teamMembers.unshift("Alex");
console.log(teamMembers);

//5. Lisää uusi jäsen "Linda" taulukon loppuun.  
teamMembers.splice(3,0,"Linda");
console.log(teamMembers);

//5. Lisää uusi jäsen "Linda" taulukon loppuun.  
teamMembers.push("Linda");
console.log(teamMembers);



//6. Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä ja jätä alkuperäinen muuttumattomaksi.  
let Members = ['Joni', 'Emilia', 'Mikko', 'Sade'];
let newTeam = Members.slice(2);
console.log(newTeam);


//7. Etsi "Mikko":n indeksi taulukossa.  

console.log(newTeam.indexOf("Mikko"));

//8. Yritä etsiä "Jake":n indeksi (ei ole taulukossa).  
console.log(newTeam.indexOf("Jake"));

//9. Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta". 

let Team= ['Joni', 'Emilia', 'Mikko', 'Sade'];
if(mikkoIndeksi !== -1){
Team.splice(mikkoIndeksi, 1, 'Maria', 'Netta');
}
console.log(Team);

//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.  
Team.splice(0,0,'Ahmad');
console.log(Team);

//10. Liitä "Ahmad" taulukkoon ja tallenna tulos uuteen taulukkoon, alkuperäistä muuttamatta.  
let newlist =  [...Team, "Ahmad"];
console.log(newlist);


//11. Kopioi koko `teamMembers`-taulukko `slice`-metodilla ja tallenna se uuteen muuttujaan.  
let Team2=[ 'Ahmad', 'Joni', 'Emilia', 'Maria', 'Netta', 'Sade' ];
const newTeam2 = Team2.slice();
console.log(newTeam2);

//12. Luo `newMembers`-taulukko, jossa on "Tiina" ja "Myrsky", ja yhdistä se `teamMembers`-taulukkoon uuteen taulukkoon.  

let group = [ 'Ahmad', 'Joni', 'Emilia', 'Maria', 'Netta', 'Sade' ]
let newMembers = ['Tiina', 'Myrsky'];
let combinedTeam = [...group, ...newMembers];
console.log(combinedTeam);

//13. Etsi kaikki "Joni":in esiintymät ja tallenna niiden indeksit uuteen taulukkoon.  
console.log(combinedTeam.indexOf("Joni"));

//14. Muunna kaikki nimet taulukossa isoiksi kirjaimiksi, muuttamatta alkuperäistä taulukkoa.  
let isoKirjaimiksi = combinedTeam.map(name => name.toUpperCase());
console.log(isoKirjaimiksi);

//15. Lajittele `teamMembers` aakkosjärjestykseen.  
console.log(combinedTeam.sort());

//16. Käännä `teamMembers`-taulukon järjestys päinvastaiseksi. 
console.log(combinedTeam.reverse());

//17. Tarkista, onko ainakin yksi jäsen nimeltään "Joni".  
let checkName = combinedTeam.some(name => name === "Joni");
console.log(checkName);

//18. Tarkista, onko kaikilla nimillä yli kolme kirjainta.
const kolmeKirjaintaNimia = combinedTeam.every(name =>name.length > 3);
console.log("Kaikilla on yli 3 ", kolmeKirjaintaNimia);
