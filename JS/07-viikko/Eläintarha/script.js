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
    { name: "Tursas", type: "Nilviäinen" },
    { name: "Ampiainen", type: "Hyönteinen" },
    { name: "Pöllö", type: "Lintu" },
];
// 2. Funktio listan näyttämiseen
function showAnimals(list) {
    const animalListElement = document.getElementById("animalList");
    animalListElement.innerHTML ="" // making the list empty first

    list.forEach(animal => {
        const li = document.createElement("li");
        li.textContent =`${animal.name} ${animal.type}`;
        animalListElement.appendChild(li);
    });
}

//show the animlas when the page loads:
document.addEventListener("DOMContentLoaded", ()=>{
    showAnimals(eläinlista);
});