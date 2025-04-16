/* 
Kirjoita JavaScript-koodi, joka valitsee sisällön tunnuksen käyttämällä getElementById-metodia.
Kirjoita funktio, joka päivittää valitun elementin 
tekstisisällön painamalla nappia tekstiksi "Hei, maailma!".
*/



  // Valitaan nappi ja lisätään kuuntelija
  document.getElementById("press").addEventListener("click", function () {
    // Valitaan sisältö ja päivitetään sen teksti
    document.getElementById("content").textContent = "Hei, maailma!";
  });