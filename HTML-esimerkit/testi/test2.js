// id="tekstiInput" id="tekstiOutput"

document.getElementById("tekstiInput").addEventListener("input", function (event){
document.getElementById("tekstiOutput").textContent = event.target.value;
});

// ylempi tekee saman kuin alla
function liveUpdate(event){
    //muokataan käyttäjän syöte sivun p- elementtin
    document.getElementById("tekstiOutput").textContent = event.target.value;

}
//funktiota kutsutaan, kun kenttään syötetään tekstiä
document.getElementById("tekstiInput")