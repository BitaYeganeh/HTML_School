

    const typeChoosing = document.getElementById('type');
    const toppingChoosing = document.querySelectorAll('.topping');
    const extraChoosing = document.querySelectorAll('.extra');
    const totalPriceDisplay = document.getElementById('totalPriceDisplay');
    const totalPriceBanner = document.getElementById('totalPriceBanner');
    


    function calculateTotal(){
        let total = parseFloat(typeChoosing.value);

        let toppingsTotal = 0;
        toppingChoosing.forEach(function(checkbox) {
            if (checkbox.checked){
                toppingsTotal = toppingsTotal + 1;
            }
        });

        total = total + toppingsTotal;

        extraChoosing.forEach(function(checkbox) {
            if (checkbox.checked) {

        total = total + parseFloat(checkbox.value);


            }


        });

        totalPriceDisplay.textContent = `${total}€`;
        totalPriceBanner.textContent = `${total}€`;


        totalPriceBanner.classList.add('animate-price');

        setTimeout(function () {
        totalPriceBanner.classList.remove('animate-price');
        }, 300);
        
        }

        
        typeChoosing.addEventListener('change', calculateTotal);
        toppingChoosing.forEach(function(checkbox){
            checkbox.addEventListener('change', calculateTotal);
        });
        extraChoosing.forEach(function(checkbox){
            checkbox.addEventListener('change', calculateTotal);
        });
        calculateTotal();

        
    


