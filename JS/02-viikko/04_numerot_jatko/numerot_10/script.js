//1. Luo muuttuja num ja aseta sille arvoksi 5.67.
//Käytä Math.round() metodia sen pyöristämiseen lähimpään kokonaislukuun. 
// Käytä Math.floor() metodia sen pyöristämiseen alaspäin edelliseen lähimpään kokonaislukuun.
// Käytä Math.ceil() metodia sen pyöristämiseen ylöspäin seuraavaan lähimpään kokonaislukuun.
// Tulosta kaikki saamasi tulokset console.log() avulla ja lisää jokaiselle selittävät teksti.

let num = 5.67;
let rounded = Math.round(num);
let floored = Math.floor(num);
let ceiled = Math.ceil(num);
// let num = 4.6. -->  Math.round(num)
console.log(Math.round(rounded));
console.log(Math.floor(floored));
console.log(Math.ceil(ceiled));