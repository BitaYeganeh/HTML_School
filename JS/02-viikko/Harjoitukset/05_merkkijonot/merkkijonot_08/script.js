/* Luo muuttuja nimeltä sentence ja anna sille arvoksi "Learning JavaScript is fun!".
Käytä .substring()-menetelmää erottaaksesi sanan "JavaScript" lauseesta.
Tulosta erotettu sana käyttäen console.log().

Esimerkkituloste:
"Extracted word: JavaScript"
*/
let sentence = ("Learning JavaScript is fun!");
result = sentence.substring(9,20);
console.log("Extracted Word:", result);
