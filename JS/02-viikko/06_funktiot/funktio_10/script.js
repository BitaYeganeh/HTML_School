/* Luo funktio nimeltä cleanAndTransform, joka:
Ottaa yhden parametrin, str.
Poistaa ylimääräiset välilyönnit, muuntaa merkkijonon pieniksi
 kirjaimiksi ja korvaa sanan "powerful" sanalla "amazing".
Palauttaa muunnetun merkkijonon.
Kutsu funktiota merkkijonolla " JavaScript is powerful! ".
Tulosta tulos käyttäen console.log().
*/
function cleanAndTransform(str){
    return str.toLowerCase()
              .trim()
              .replace("powerful", "amazing")
              .replace(/\s/g, "")
}
console.log(cleanAndTransform("Javascript is powerful"));