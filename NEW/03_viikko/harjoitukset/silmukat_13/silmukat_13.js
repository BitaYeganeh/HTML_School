/* 
Kirjoita funktio nimeltä validatePassword:
- Käytä silmukkaa salliaksesi käyttäjän syöttää salasana.
- Jos salasana on "oikein123", tulosta: "Salasana oikein!" ja poistu silmukasta.
- Jos salasana on väärä, pyydä käyttäjää uudelleen viestillä: "Yritä uudelleen!".
*/
function validatePassword(){
    
    while (true){
        let password = prompt ("enter password")
        if (password.toLowerCase() === "oikein123") {
        alert("password is correct");
        break;
    }else {
    alert("The password is wrong, please try again!");
    }
}
}
validatePassword();