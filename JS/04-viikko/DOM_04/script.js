/*
Luo HTML tiedosto, jossa on <p> elementti
 ja nappi. 
Kirjoita JavaScript-koodi, 
joka vaihtaa tekstiosion näkyvyyttä - 
päälle ja pois - nappia painamalla.
 */

document.getElementById("click").addEventListener("click", function(event) {
    const text = document.getElementById("tekstiInput");

    if (text.style.display === "none") {
        text.style.display = "block"; // Show the paragraph
    } else {
        text.style.display = "none";  // Hide the paragraph
    }
});

/*toinen way*/ 

function toggle(){
    let element = document.getElementById("hideShow");
    if(element.style.display === "none"){
        element.style.display ="block";

    }else{
        element.style.display = "none";
    }
}
document.getElementById("toggleVisibility").addEventListener("click", toggle);

