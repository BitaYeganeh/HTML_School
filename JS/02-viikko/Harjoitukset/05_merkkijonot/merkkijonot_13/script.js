/* Luo muuttuja nimeltä description ja anna sille arvoksi " JavaScript is Fun and powerful! ".
Tee seuraavat toimenpiteet:
- Poista ylimääräiset välilyönnit käyttäen .trim().
- Muunna merkkijono pieniksi kirjaimiksi.
- Tarkista, sisältääkö se sanan "fun".
- Korvaa "powerful" sanalla "amazing".
- Tulosta lopullinen merkkijono ja tieto siitä, sisältääkö se sanan "fun" käyttäen console.log().

Esimerkkituloste:
"Final description: javascript is fun and amazing!"
"Does it include 'fun'? true"
*/

const description = "JavaScript is Fun and powerful!";
text1 = description.trim();
text2 = text1.toLowerCase();
text3 = text2.includes("fun");
text4 = text2.replace("powerful", "amazing");
console.log("Final description:", text4);
console.log(`Does it include 'fun'? ${text3}`);

