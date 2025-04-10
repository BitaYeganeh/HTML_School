/* Kopioi tähän koodi edellisestä tehtävästä. 
Kopioi myös tekemäsi HTML tiedosto tähän samaan kansioon. 

Lisää sivulle toinen nappi, jota klikkaamalla laskurin arvo vähenee yhdellä. 

Muista lisätä uudelle napille oma id ja sille oma tapahtumankuuntelija.
Tee kaksi funktiota, jotka muuttavat saman muuttujan arvoa. 
*/
function increaseNumber() {
    const numberElement = document.getElementById("number");
    let currentNumber = parseInt(numberElement.textContent);
    numberElement.textContent = currentNumber + 1;
  }

  function decreaseNumber() {
    const numberElement = document.getElementById("number");
    let currentNumber = parseInt(numberElement.textContent);
    numberElement.textContent = currentNumber - 1;

  }

  
document.getElementById("increase").addEventListener("click", increaseNumber);
document.getElementById("decrease").addEventListener("click", decreaseNumber);