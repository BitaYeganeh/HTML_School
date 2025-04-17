/* 
Luo lomake, jossa on pakolliset nimi- ja sähköpostikentät.
Kirjoita JavaScript-koodi, joka:
- Estää lomakkeen lähetyksen, jos jompikumpi kenttä on tyhjä.
- Näyttää virheilmoituksen, jos kenttiä on tyhjänä.
*/
document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputEmail").value;

    if (name === "" || email === "") {
        alert("Please fill in both name and email.");
    } else {
        alert("The form is submitted successfully!");
    }
});