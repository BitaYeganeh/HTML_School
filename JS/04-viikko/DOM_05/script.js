/*
Luo HTML-tiedosto, joka sisältää:
- <button> taustavärin vaihtamiseen.
- <input>-kenttä, johon käyttäjä voi syöttää värin.
- <p>-elementti, jonka tekstin väri muuttuu
 syötetyn värin mukaan.

Kirjoita JavaScript-koodi, joka:
- Vaihtaa taustavärin satunnaiseksi, 
kun painiketta klikataan.
- Päivittää kappaleen tekstivärin vastaamaan 
käyttäjän syöttämää arvoa.
*/
document.getElementById("click").addEventListener("click", function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

    const userColor = document.getElementById("inputColor").value;

    document.getElementById("textOutput").style.color = userColor;
});


// Generate a random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);  // Random value for red (0-255)
    const g = Math.floor(Math.random() * 256);  // Random value for green (0-255)
    const b = Math.floor(Math.random() * 256);  // Random value for blue (0-255)
    return `rgb(${r}, ${g}, ${b})`;  // Return color in 'rgb' format.
}
