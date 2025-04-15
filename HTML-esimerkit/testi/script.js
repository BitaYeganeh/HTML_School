document.getElementById("nappi").addEventListener("click", function (){
    document.getElementById("tekstiOutput").textContent =
    document.getElementById("tekstiInput").value;
});
    


 // ylempi tekee saman kuin tämä alempi koodi
 function naytaSyote() {
    // asetetaan muuttujan arvo silloin, kun nappia on painettu
 const kayttajaInput = document.getElementById("tekstiInput").value;
   //korvataan olemassa oleva teksti muuttujan arvolla
 document.getElementById("tekstiOutput").textContent = kayttajaInput;

 }

 //kutsutaan funktiota, kun nappia painetaan
 document.getElementById("nappi").addEventListener("click", naytaSyote);