// Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
// Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
// Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.


function FahrenheitToCelsius(Fahrenheit){
    let Celsius = ((Fahrenheit - 32) * 5 / 9);
return Celsius.toFixed(1);

}
let Fahrenheit = 21;
let Celsius = FahrenheitToCelsius(Fahrenheit);
console.log(`Fahrenheit ${Fahrenheit}: Celsius ${Celsius}`);

///////WAY 2

Farrenheit = 21;
Celsius = ((Farrenheit - 32) * 5 / 9);
Celsiustemp = Celsius.toFixed(1);
console.log("Celsiustemp", Celsiustemp);