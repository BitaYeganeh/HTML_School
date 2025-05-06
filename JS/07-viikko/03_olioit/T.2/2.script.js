/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class User1{
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    showInfo() {
        console.log(`username: ${this.username}, Email: ${this.email}`);
    }

    changeEmail(newEmail){
        this.email = newEmail;
        console.log(`Email is updated to : ${this.email}`);
    }
}

// add a new user to test it:
const user3 = new User1("Bita", "b.yeganeh@gmail.com");
user3.showInfo();
// change email:
user3.changeEmail("gh.yahoo.com");
user3.showInfo();

