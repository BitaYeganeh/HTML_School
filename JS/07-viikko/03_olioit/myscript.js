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



/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

// create theme obj.
const theme = 
    { name: "light", isActive: true};

    // find the button from HTML:
    const button = document.getElementById("themeButton");
   
// when click the button:
button.addEventListener("click", () => {
    if (theme.name === "light"){
        theme.name = "dark";
        theme.isActive= false;
        document.body.className = "dark";
        button.textContent = "Switch to Light Theme";
    }else{
        theme.name="light";
        theme.isActive=true;
        document.body.className = "light";
        button.textContent = "Switch to Dark Theme";

    }
    console.log(theme);
})


/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter= {
    value:0
};

 // find the button from HTML:
const display = document.getElementById("valueDisplay");
const increaseValue = document.getElementById("increaseValue");
const decreaseValue = document.getElementById("decreaseValue");


//when the button is clicked:
function updateValue(){
    display.textContent = counter.value;
}
increaseValue.addEventListener('click',()=>{
    counter.value++;
    updateValue();
});

decreaseValue.addEventListener('click', ()=>{
    counter.value --;
    updateValue();
});

/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = {
    name: "maito",
    price: 1.89,
    quantity: 3,
};
// get the inputs and buttons from the HTML:

const itemInput = document.getElementById("item");
const quantityInput = document.getElementById("quantity");
const submit = document.getElementById("submit");
const totalOutput = document.getElementById("totalOutput");

// function to calculate total price:

function totalPrice () {
   return (product.price * product.quantity).toFixed(2);
    
}

//when button is clicked:
submit.addEventListener('click',() => {

    //get the name from input
    product.name=itemInput.value;

    // get quantity from the input
    product.quantity=Number(quantityInput.value);
   
    // calculate total
    const total = totalPrice();
    

   //show the result in console
    console.log(`Product: ${product.name}`);
    console.log(`Quantity: ${product.quantity}`);
    console.log(`Total price: €${total}`);

    totalOutput.textContent = `You ordered ${product.quantity} * ${product.name}. Total price: €${total}`;
});



/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

function Task (title, description, completed) {
this.title = title;
this.description = description;
this.completed = completed;
}

// an array to store all tasks:
const taskList = [];

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const completedInput = document.getElementById("completed");
const addTaskButton = document.getElementById("uusi-task");




addTaskButton.addEventListener('click', () => {
    const task = new Task(
        titleInput.value,
        descriptionInput.value,
        completedInput.checked
    );
    taskList.push(task);



//show pop-up
alert(`New task added: \nTitle: ${task.title}, \nDescription:${task.description}, \nCompleted: ${task.completed}`);


});



/* Tehtävä 7
Luo olio `weatherApp`, jossa on metodi `fetchWeather(city)`.
Käytä `fetch`-funktiota hakeaksesi säätietoja API:sta ja näytä ne HTML-elementissä.
(API: OpenWeather tai jokin muu ilmainen sää-API)
*/

const weatherApp = {
    name:"WeatherChange",
    fetchWeather(city) {

    }

}

/* Tehtävä 8
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

// Kirjoita koodisi tähän

/* Tehtävä 9
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

// Kirjoita koodisi tähän

/* Tehtävä 10
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/

// Kirjoita koodisi tähän

/* Tehtävä 11
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

// Kirjoita koodisi tähän

/* Tehtävä 12
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

// Kirjoita koodisi tähän

/* Tehtävä 13
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

// Kirjoita koodisi tähän

/* Tehtävä 14
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/

// Kirjoita koodisi tähän

/* Tehtävä 15
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

// Kirjoita koodisi tähän