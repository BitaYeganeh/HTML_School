/* Tehtävä 1
Tallenna merkkijono `"Hello, LocalStorage!"` LocalStorageen avaimella `"message"`.
Hae se ja tulosta konsoliin.
*/

localStorage.setItem("message",  "Hello, LocalStorage");
const message = localStorage.getItem("message");
console.log(message);

/* Tehtävä 2
Luo olio `userSettings`, jossa on:
- `theme` ("dark" tai "light")
- `language` ("English", "Spanish" jne.)

Muunna se JSON-merkkijonoksi ja tallenna LocalStorageen.
Hae se, pura JSON ja tulosta `theme`-ominaisuus.
*/



const userSettings = {
    theme:"dark",
    language:"English",
};

// Muunnetaan JSON-merkkijonoksi ja tallennetaan
localStorage.setItem("userSettings", JSON.stringify(userSettings));

// Hae ja pura JSON
const data = JSON.parse(localStorage.getItem("userSettings"));

// Tulosta theme-ominaisuus
console.log(data.theme);



/* Tehtävä 3
Määrittele taulukko `favoriteBooks`, jossa on vähintään kolme kirjaoliota (`title` ja `author`).
Tallenna taulukko LocalStorageen.
Hae ja pura se, sitten tulosta kaikkien kirjojen nimet.
*/
const favoriteBooks = [
    { title: "AAA", author:"aaa" },
    { title: "BBB", author:"bbb" },
    { title: "CCC", author:"ccc" },
];
// Tallenna localStorageen
localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

// Hae ja pura JSON
const data1 = JSON.parse(localStorage.getItem("favoriteBooks"));

// tulosta kaikkien kirjojen nimet
data1.forEach(book => {
    console.log(book.title);
});




/* Tehtävä 4
Kirjoita funktio `saveToLocalStorage(key, object)`, joka:
- Muuntaa olion JSONiksi.
- Tallentaa sen LocalStorageen annetulla avaimella.
Testaa tallentamalla olio ja hakemalla se.
*/

function saveToLocalStorage(key, object){
   const json = JSON.stringify(object);
  localStorage.setItem(key, json);
  
  // Esimerkkiolion tallennus ja haku
const exampleObj = { foo: "bar", count: 42 };
saveToLocalStorage("myExample", exampleObj);
// Tarkistus
const retrieved = JSON.parse(localStorage.getItem("myExample"));
console.log(retrieved); // { foo: "bar", count: 42 }


};



/* Tehtävä 5
Kirjoita funktio `getFromLocalStorage(key)`, joka:
- Hakee arvon LocalStoragesta.
- Purkaa sen jos se on JSON.
- Tulostaa haetun arvon.
*/

function getFromLocalStorage(key){
  const value = localStorage.getItem(key);

  try{
    //jos JSON


   const parsed= JSON.parse(value);
   console.log(parsed);
   return parsed;


  }catch (e){

    //jos ei ole JSON
    
console.log(value);

  return value;
}
}
 //testaus
 getFromLocalStorage("message");
 getFromLocalStorage("userSettings");





/* Tehtävä 6
Luo olio `userProfile`, jossa on:
- `username`
- `email`
- `preferences` (olio, jossa on `theme` ja `notifications`)

Tallenna se LocalStorageen.
Hae se ja päivitä `theme` arvoksi `"dark mode"`, sitten tulosta päivitetty olio.
*/

// Luo olio
const userProfile = {
    username: "bitaYeganeh",
    email: "b.yeganeh85@gmail.com",
    preferences: {theme: "light", notificatios: "on" },
};

// Tallenna LocalStorageen

localStorage.setItem("userProfile", JSON.stringify(userProfile));


//hae ( haku ja purku)
const storedProfile = JSON.parse(localStorage.getItem("userProfile"));

//päivitä `theme` arvoksi `"dark mode"
storedProfile.preferences.theme = "dark mode";


//// Tallennetaan päivitetty profiili takaisin
localStorage.setItem("userProfile", JSON.stringify(storedProfile));


// Tulosta päivitetty olio
console.log(storedProfile);





/* Tehtävä 7
Määrittele olio `shoppingList`, jossa on taulukko `items` (merkkijonoja).
Tallenna se LocalStorageen.
Kirjoita funktio `addItemToList(item)`, joka:
- Hakee `shoppingList` LocalStoragesta.
- Lisää uuden tuotteen.
- Tallentaa päivitetyn listan takaisin LocalStorageen.
- Tulostaa päivitetyn listan.
*/

shoppingList={
    items: ["maito", "voi", "leipä"]
};

// Tallenna LocalStorageen

    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item){

    // Hae ja pura ostoslista
    const data=JSON.parse(localStorage.getItem("shoppingList"));

    // add new item:
    data.items.push(item);

    // tallenna päivitetty lista

    localStorage.setItem("shoppingList", JSON.stringify(data));

    // tulosta konsoliin
    console.log("updated list:", data.items);
}

//testaus:

addItemToList("omena");




/* Tehtävä 8
Luo olio `counter`, jossa on:
- `count` (alkaa arvosta 0)
Tallenna se LocalStorageen.
Kirjoita funktio `incrementCounter()`, joka:
- Hakee counterin.
- Kasvattaa `count` arvoa yhdellä.
- Tallentaa päivitetyn counterin.
- Tulostaa uuden arvon.
*/

const counter = { count: 0 };
//Tallenna se LocalStorageen.
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter (){

    // haku ja purku 
    const data = JSON.parse(localStorage.getItem("counter"));

    // Kasvattaa `count` arvoa yhdellä.
    data.count +=1;

    //- Tallentaa päivitetyn counterin.
    console.log("updated counter:", data.count);

};

//testaus:
incrementCounter();



/* Tehtävä 9
Luo taulukko `tasks`, jossa jokainen tehtävä on olio (`id`, `description`, `completed`).
Tallenna se LocalStorageen.
Kirjoita funktio `markTaskComplete(taskId)`, joka:
- Hakee `tasks` LocalStoragesta.
- Etsii annetulla ID:llä olevan tehtävän ja asettaa `completed` arvoksi `true`.
- Tallentaa päivitetyt tehtävät.
- Tulostaa päivitetyn listan.
*/


const tasks = [ 
    {id:1, description:"AAAA", status:"true"},
    {id:11, description:"BBB", status:"false"},
    {id:111, description:"CC", status:"false"},
];
//Tallennus LocalStorageen
localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId){
//hakee `tasks` LocalStoragesta

const data =JSON.parse(localStorage.getItem("tasks"));


 // Etsi tehtävä ja päivitä completed-arvo
 const Bita=data.find((t)=>t.id===taskId);

 if(Bita){
    Bita.status = true;

      // Tallenna takaisin
localStorage.setItem("tasks", JSON.stringify(data));
    console.log("Update is:", data);


 }else{
    console.warn(`Thetävä id:lla ${taskId} ei löytynyt`);

 }

};

// testikutsu

markTaskComplete(2);
markTaskComplete(11);






/* Tehtävä 10
Kirjoita funktio `clearLocalStorage()`, joka poistaa kaiken LocalStorageen tallennetun datan.
Kutsu funktiota ja varmista että LocalStorage on tyhjä.
*/

function clearLocalStorage(){
    localStorage.clear();
    console.log("localStorage is now empty!");

}
// Kutsutaan funktiota
clearLocalStorage();

//varmistus :
console.log(localStorage);