/* Luo funktio nimeltä containsWord, joka:
Ottaa kaksi parametria, sentence ja word.
Palauttaa true, jos sentence sisältää sanan word, muuten false.
Kutsu funktiota lauseella "JavaScript is fun!" ja sanalla "fun".
Tulosta tulos käyttäen console.log().

Bonus: Muokkaa funktiota käyttämään implisiittistä palautusta.
*/
function containsWord(sentence,word){
    if (sentence.includes(word)){
    return true;
}else{
    return false;
}
}
containsWord("javascript is fun", "fun");
console.log(containsWord("javascript is fun", "fun"));
console.log(containsWord("javascript is borng", "fun"));

