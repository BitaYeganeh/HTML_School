/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/

function User(username, email) {
    this.username = username;
    this.email = email;
    
    this.showInfo = function () {
        console.log(`Username: ${this.username}, Email: ${this.email}`);
    };
    }
    const user1 = new User ("Bita", "bita.yeganeh@gmail.com");
    user1.showInfo();
    