/* Luo muuttuja nimeltä longText ja anna sille arvoksi "The quick brown fox jumps over the lazy dog."
Käytä .slice()-menetelmää erottaaksesi "quick brown fox".
Tulosta erotettu osa käyttäen console.log().

Esimerkkituloste:
"Sliced text: quick brown fox"
*/

longText = "The quick brown fox jumps over the lazy dog.";
result = longText.slice(4, 19);
console.log(`${"Sliced text:"}`, result);