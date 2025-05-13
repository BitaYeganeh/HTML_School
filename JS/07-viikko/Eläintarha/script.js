



const eläinlista = [
    { name: "Kettu", type: "Nisäkäs" },
    { name: "Karhu", type: "Nisäkäs" },
    { name: "Kotka", type: "Lintu" },
    { name: "Sammakko", type: "Sammakkoeläin" },
    { name: "Käärme", type: "Matelija" },
    { name: "Hai", type: "Kala" },
    { name: "Leijona", type: "Nisäkäs" },
    { name: "Papukaija", type: "Lintu" },
    { name: "Kilpikonna", type: "Matelija" },
    { name: "Pöllö", type: "Lintu" },
];
///////-----------SORTING PART-----------
document.getElementById("sortAnimals").addEventListener("click", () => {
    const sorted = [...eläinlista].sort((a, b) => 
        a.name.localeCompare(b.name, 'fi', { sensitivity: 'base' })
    );
    showAnimals(sorted);
});

// 2. Funktio listan näyttämiseen
function showAnimals(list) {
    const animalListElement = document.getElementById("animalList");
    animalListElement.innerHTML ="" // making the list empty first




    list.forEach((animal, index) => {
        const li = document.createElement("li");
        li.textContent =`${animal.name} - ${animal.type}`;


        // remove button for each animal:
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Poista";
        removeBtn.addEventListener("click", () => {
            // find the correct index from the original list:
            const actualIndex = eläinlista.findIndex(el => el.name === animal.name && el.type === animal.type);
            
            // if it was in the list
            if (actualIndex !== -1) {
                // Remove animal from the list
                eläinlista.splice(actualIndex, 1)
                // refresh the list
                showAnimals(eläinlista);
            }
        });
        li.appendChild(removeBtn);


        animalListElement.appendChild(li);
    });
}

//show the animlas when the page loads:
document.addEventListener("DOMContentLoaded", ()=>{
    showAnimals(eläinlista);
});


//////////////------- ADD ANIMAL ---------///////


document.getElementById("addAnimal").addEventListener("click", () => {
const name = document.getElementById("newAnimalName").value.trim();
const type = document.getElementById("newAnimalType").value;    

if (name && type){
    eläinlista.push({name, type});//show them in the array
    showAnimals(eläinlista);//update the list

    //clear the input field:
    document.getElementById("newAnimalName").value = "";// clear the field
    document.getElementById("newAnimalType").value ="Nisäkäs"; // reset the field to the default one
}else{
    alert ("You need to add name and type of the new animal to the fields");
}

});

////////--------- FILTER PART ---------//////////


document.getElementById("filterType").addEventListener("change", () => {
    const selectedType = document.getElementById("filterType").value;

    if (selectedType === "Kaikki") {
        showAnimals(eläinlista); // show all animals

    } else {
        //filter animals by only the selected type:
        const filtered = eläinlista.filter (animal => animal.type ===selectedType);
    
        showAnimals(filtered);
    }

});
document.getElementById("searchAnimal").addEventListener("input", () => {
   const searchText = document.getElementById("searchAnimal").value.toLowerCase();
   const selectedType = document.getElementById("filterType").value;

   let filtered = eläinlista.filter ( animal => 
    animal.name.toLowerCase().includes(searchText)
   );

   if ( selectedType !== "Kaikki"){
    filtered = filtered.filter(animal => animal.type === selectedType);
   }
   // If the filtered array has no items (is empty):
   if (filtered.length === 0) {
    alert("Eläimiä ei löytynyt");
  }

   showAnimals(filtered);
})


 