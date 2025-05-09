/* Tehtävä 1
Luo konstruktori-funktio `User`, joka ottaa parametreina `username` ja `email`.
Sen tulee luoda olio, jolla on nämä ominaisuudet sekä metodi `showInfo`, joka tulostaa käyttäjän tiedot.
Luo uusi käyttäjä ja kutsu `showInfo()`.
*/
/* Tehtävä 2
Muokkaa tehtävää 1: Käytä ES6 `class`-syntaksia `User`-luokan määrittelyyn.
Lisää metodi `changeEmail(newEmail)`, joka päivittää käyttäjän sähköpostiosoitteen.
*/

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    showInfo(){
        console.log(`Username: ${this.username}, Email: ${this.email}`)
    }
    changeEmail (newEmail){
        //muutetaan email:
        this.email = newEmail;
    }

    }
    const user1 = new User ("Mia", "email@bc.fi");
    user1.showInfo();
    user1.changeEmail("newEmail@bc.fi");
    user1.showInfo();
    console.log(user1.email);


/* Tehtävä 3
Luo olio `theme`, jolla on ominaisuudet `name` (light tai dark) ja `isActive`.
Lisää HTML:ään painike. Kun sitä klikataan, vaihdetaan teema light ↔ dark ja päivitetään `isActive`-arvo.
*/

const theme = {
name:"light",
isActive: true,

}
document.getElementById("themeBtn").addEventListener("click", () => {
    if (theme.name === "light") {
        theme.name = "dark";

    }else{
        theme.name = "light"
    }

    if (theme.name === "dark") {
        theme.isActive = true;
    }else {
        theme.isActive = false;
    }
    
    document.body.setAttribute("data-theme", theme.name);
    });
    


/* Tehtävä 4
Luo olio `counter`, jolla on ominaisuus `value`.
Lisää HTML:ään kaksi painiketta: toinen kasvattaa `value`, toinen pienentää.
Näytä `value` HTML-elementissä ja päivitä se reaaliaikaisesti painikkeiden avulla.
*/

const counter = {
    value: 0
}
const val = document.getElementById("val");
document.getElementById("inc").addEventListener("click", ()=>{
    console.log("Increase number");
    counter.value++;
    val.textContent = counter.value;


});
document.getElementById("dec").addEventListener("click", ()=>{
    console.log("Decrease number");
    counter.value --;
    val.textContent = counter.value;
});





/* Tehtävä 5
Luo olio `product`, jolla on `name`, `price` ja `quantity`.
Lisää HTML:ään syöttökenttä, johon käyttäjä voi syöttää ostettavan määrän.
Päivitä `quantity` ja näytä kokonaishinta dynaamisesti.
*/

const product = {
    name:"Tuote",
    price: 10.0,
    quantity: 1,
};
document.getElementById("itemName").textContent = product.name;
document.getElementById("itemPrice").textContent = product.price;

const qtyInput = document.getElementById("qty");
const total =document.getElementById("total");

const updateTotal = ()=> {
    product.quantity = parseInt(qtyInput.value);
    total.textContent = `Yhteensä €${product.price * product.quantity}`;
};

qtyInput.addEventListener("input", updateTotal);
updateTotal();



/* Tehtävä 6
Määrittele konstruktori `Task`, joka ottaa `title`, `description` ja `completed`.
Lisää HTML:ään painike, jota painamalla lisätään uusi `Task`-olio `tasks`-taulukkoon ja näytetään se sivulla.
*/

class Task{
    constructor (title, description, completed){
        this.title=title;
        this.description=description;
        this.completed=completed;
    }
}
const tasks = [];
document.getElementById("addTask").addEventListener('click', ()=>{
    const title = document.getElementById("title").value;
    const description = document.getElementById("desc").value;
    const completed =document.getElementById("completed").checked


    const task = new Task (title, description, completed);
    tasks.push(task);

    const li = document.createElement("li");
    li.textContent = `${task.title} - ${task.description} (${
        task.completed ? "completed" : "not finished yet"
    })`;
    document.getElementById("taskList").appendChild(li);

});


/* Tehtävä 7
Luo konstruktori-funktio `Car`, joka ottaa `brand`, `model` ja `year`.
Lisää konstruktoriin metodi `age()`, joka laskee auton iän.
Luo uusi `Car`-olio ja näytä sen ikä verkkosivulla.
*/

// Kirjoita koodisi tähän


class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        
    }
    getAge () {
        let age = new Date().getFullYear() - this.year;
        return age;
    }

}

const myCar = new Car ("Toyota", "Corolla", 2015);
console.log(myCar.getAge());

document.getElementById("carInfo").textContent = `Auto: ${myCar.brand} ${myCar.model}, Ikä: ${myCar.getAge()} vuotta`;




/* Tehtävä 8
Luo taulukko `users`, jossa jokaisella käyttäjällä on `name` ja `score`.
Lisää HTML:ään painike, joka lajittelee käyttäjät pistemäärän mukaan laskevasti ja päivittää näkyvän listan.
*/

const users = [
    {name: "Anna", score: 90 },
    {name: "Mikko", score: 75 },
    {name: "Tiina", score: 85 },

];

const userList = document.getElementById("userList")

const renderSortedUsers = () => {
    //sort users based on scores
    users.sort ((a, b) => b.score - a.score);

    //render users
    userList.innerHTML = "";
    users.forEach ((u)=> {
        const li = document.createElement("li");
        li.textContent =`${u.name} - ${u.score}`;
        userList.appendChild(li);
    });
};
    renderSortedUsers();
    



/* Tehtävä 9
Luo olio `shoppingList`, jolla on taulukko `items`.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia tuotteita `items`-taulukkoon ja päivittää näkyvän listan.
*/


const shoppingList = {
    items: [],
};

const listElement = document.getElementById("list");

document.getElementById("addItem").addEventListener("click", ()=> {
    const item = document.getElementById("itemInput").value;
    if (item) {
        shoppingList.items.push(item);
        const li = document.createElement ("li");
        li.textContent = item;
        listElement.appendChild(li);
        document.getElementById("itemInput").value = "";
    }
});




/* Tehtävä 10
Luo taulukko `posts`, jossa jokaisella postauksella on `title`, `content` ja `likes`.
Lisää jokaisen postauksen viereen "Tykkää"-painike, joka kasvattaa `likes`-määrää ja päivittää näkymän.
*/

const posts = [
    {title: "Aaaaa", content: "Bbbbbbb", likes: 0 },
    {title: "Cccccccc", content: "Ddddddd", likes: 0 },
    {title: "Eeeeeee", content: "Ffffffff", likes: 0 },
];
const postElement = document.getElementById("posts");

posts.forEach((post, index) => {
    const li = document.createElement("li");

    const postText = document.createElement("p");
    postText.textContent = `${post.title}: ${post.content} (Likes: ${post.likes})`;

    const likeButton = document.createElement("button");
    likeButton.textContent = "Tykkää";
    likeButton.addEventListener("click", () => {
        post.likes++;
        postText.textContent = `${post.title}: ${post.content} (Likes: ${post.likes})`;
    });

    li.appendChild(postText);
    li.appendChild(likeButton);
    postElement.appendChild(li);
});


/* Tehtävä 11
Luo konstruktori-funktio `Employee`, jolla on `name`, `position` ja `salary`.
Lisää metodi `increaseSalary(percent)`, joka kasvattaa palkkaa annetulla prosentilla.
Luo työntekijä ja nosta hänen palkkaansa dynaamisesti.
*/

function Employee(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary= salary;



this.increaseSalary = function (percent) {
    this.salary += this.salary * (percent / 100);
    console.log(`${this.name} 's new salary is: ${this.salary}`);
};
}

const Employee1 = new Employee ("Bita", "QC", 3500);
const Employee2 = new Employee ("Sarah", "HR", 3200);

Employee1.increaseSalary(30);
Employee2.increaseSalary(5);




/* Tehtävä 12
Luo olio `timer`, jolla on `seconds` ja metodi `start()`, joka laskee sekunteja ylöspäin.
Näytä ajastin HTML-elementissä ja päivitä se sekunnin välein.
*/

const timer = {
    seconds: 0,
    intervalId: null,
    

    start() {
        if(this.intervalId !== null) return;

        this.intervalId = setInterval(() => {

        this.seconds++;
        document.getElementById("timer").textContent = this.seconds;


        }, 1000);
        
           },

           stop(){
            clearInterval(this.intervalId);
            this.intervalId=null;
           },

    };
    document.getElementById("start").addEventListener("click", () =>{
        console.log("Start button clicked");
        timer.start();
    
    });

    document.getElementById("stop").addEventListener("click", () =>{
        console.log("Stop button clicked");
        timer.stop();
    
    });



/* Tehtävä 13
Luo konstruktori-funktio `Book`, joka ottaa parametreina `title`, `author` ja `pages`.
Luo yksinkertainen kirjastosovellus, jonka avulla käyttäjät voivat lisätä kirjoja HTML-lomakkeen kautta ja näyttää ne dynaamisesti.
*/
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    // Further code will go here

const title = document.getElementById("t").value;
const author = document.getElementById("a").value;
const pages = document.getElementById("p").value;


const newBook = new Book (title, author, pages);

//Create a New List Item (<li>) Element to display the book's information:
const li = document.createElement("li");
li.textContent =`${newBook.title} by ${newBook.author}- ${newBook.pages} pages`;

//Append the New List Item to the Books List

document.getElementById("books").appendChild(li);

    // Clear the form inputs
    document.getElementById("bookForm").reset();

});



/* Tehtävä 14
Luo olio `foxTracker`, jolla on `foxes`-taulukko.
Lisää syöttökenttä ja painike, joiden avulla käyttäjät voivat lisätä uusia kettuja (nimi ja sijainti) taulukkoon.
Näytä kettujen lista dynaamisesti HTML-elementissä.
*/

const foxTracker = {
    foxes: []
  };

document.getElementById("addFox").addEventListener("click", ()=>{
    const name = document.getElementById("name").value;
    const location = document.getElementById("loc").value;

    if (name && location) {

        foxTracker.foxes.push({ name, loc })

        const li = document.createElement("li");
        li.textContent = `${name} @ ${location}`;
        document.getElementById("foxes").appendChild(li);


        // nyt kenttä tyhjenee visuaalisesti
        document.getElementById("name").value = "";
        document.getElementById("loc").value = "";

    }
});