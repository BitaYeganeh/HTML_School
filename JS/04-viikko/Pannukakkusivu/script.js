

    const typeChoosing = document.getElementById('type');
    const toppingChoosing = document.querySelectorAll('.topping');
    const extraChoosing = document.querySelectorAll('.extra');
    const deliveryChoosing = document.querySelectorAll('.delivery');    
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    const totalPriceBanner = document.getElementById('totalPriceBanner');
    const pancakeForm = document.getElementById('pancakeForm');
    


    function calculateTotal() {
        // Base choosing
        let total = parseFloat(typeChoosing.options[typeChoosing.selectedIndex].getAttribute('data-price'));
    

        //topping add :

        toppingChoosing.forEach(function (checkbox) {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute('data-price'));
            }
        });

        // Extra adding:


        extraChoosing.forEach(function (checkbox) {
            if (checkbox.checked) {
                total += parseFloat(checkbox.getAttribute('data-price'));
            }
        });
        
        //Delivery Fee Adding:
        const selectedDelivery = document.querySelector('input[name="delivery"]:checked');
    if (selectedDelivery) {
        total += parseFloat(selectedDelivery.getAttribute('data-price'));
    }
        
        
        // Updating total price:

        totalPriceDisplay.textContent = `${total}€`;
    totalPriceBanner.textContent = `${total}€`;

    totalPriceBanner.classList.add('animate-price');

    setTimeout(function () {
        totalPriceBanner.classList.remove('animate-price');
    }, 300);
}
        
        //pancake form:
        pancakeForm.addEventListener('change', function(event){
            if (event.target.matches('select, input')) {
                calculateTotal();
            }
        });



    

       

        
    const seeOrderButton = document.getElementById('seeOrder');
    const summaryBox = document.getElementById('summaryText');

    seeOrderButton.addEventListener('click', function(){

        // customer name
        const name = document.getElementById('customerName').value;
        

    // selected pancake
    const selectedType = typeChoosing.options[typeChoosing.selectedIndex].text;



    //selected topping
    const selectedToppings =[];
    toppingChoosing.forEach(function (checkbox){
        if (checkbox.checked){
            selectedToppings.push(checkbox.parentElement.textContent);
        }
    });

    // selected extras

    const selectedExtras =[];
    extraChoosing.forEach(function (checkbox){
        if (checkbox.checked){
            selectedExtras.push(checkbox.parentElement.textContent);
        }
    });


    // selected delivery method
    const selectedDelivery = document.querySelector('input[name="delivery"]:checked').parentElement.textContent;



    // final price show:
    const total = totalPriceDisplay.textContent;


//summary
const summary = [
    "Nimi: " + name,
    "Tyyppi: " + selectedType,
    "Täytteet: " + selectedToppings.join(', '),  // Join toppings with commas if there are multiple
    "Lisukkeet: " + selectedExtras.join(', '),   // Join extras with commas
    "Toimitus: " + selectedDelivery,
    "Hinta: " + total
];

// Show the summary with each item on a new line in the alert box
alert(summary.join('\n'));
    });