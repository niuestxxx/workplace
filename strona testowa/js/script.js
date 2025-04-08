document.querySelector('.bo').addEventListener('click', function() {
   
    window.scrollTo({
    
        top: window.innerHeight, 
        behavior: 'smooth' 
        
    });
});
document.querySelector('.slide').addEventListener('click', function() {
   
    window.scrollTo({
    
        top: window.innerHeight, 
        behavior: 'smooth' 
        
    });
});
var page = document.getElementById("blured");
var menu = document.getElementById("menuu1");
var ham = document.getElementById("ham");
document.querySelector('.tog').addEventListener('click', function() {
    menu.classList.add("transition")
    ham.classList.add("transition")
   menu.classList.toggle("wysun")
   ham.classList.toggle("przesun")
   page.classList.toggle("blur")  
});
var m1 = document.getElementById("mm1");
var m2 = document.getElementById("mm2");
var line = document.getElementById("line1");
var line2 = document.getElementById("line2");
window.addEventListener("scroll", function scrollHandler() {
    // Obliczanie wysokości przewijania
    var wysokoscPrzewijania = window.scrollY || window.pageYOffset;
 
    if (wysokoscPrzewijania >= 550) {
        console.log("Aktualna wysokość przewijania: " + wysokoscPrzewijania + " pikseli.");
        m1.classList.add("marginleft")
        line.classList.add("ukrcie")
        // Usunięcie nasłuchiwania zdarzenia po wykonaniu się warunku
     
    }
    if (wysokoscPrzewijania >= 600) {
        console.log("Aktualna wysokość przewijania: " + wysokoscPrzewijania + " pikseli.");
        m2.classList.add("marginleft")
        line2.classList.add("ukrcie2")
        // Usunięcie nasłuchiwania zdarzenia po wykonaniu się warunku
    }
});
var zdjcss =  document.getElementById("zdjcss");
var textcss = document.getElementById("tekstslide");

var zdjhtml =  document.getElementById("zdjhtml");
var zdjreact =  document.getElementById("zdjreact");
var zdjsql =  document.getElementById("zdjsql");
var zdjjs =  document.getElementById("zdjjs");
var code = document.getElementById("leangues1")
zdjcss.addEventListener('click', function() {
    textcss.classList.remove("transthml");
    textcss.classList.remove("transjs");
    textcss.classList.remove("transsql");
    textcss.classList.remove("transreact");
 textcss.classList.add("transcss");
 var currentRotation = parseFloat(this.style.transform.replace('rotateY(', '').replace('deg)', '')) || 0;
 var newRotation = currentRotation + 360;
 this.style.transform = "rotateY(" + newRotation + "deg)";

 code.classList.add("bgcss");
 code.classList.remove("bghtml");
 code.classList.remove("bgsql");
 code.classList.remove("bgreact");
 code.classList.remove("bgjs");
    });
zdjhtml.addEventListener('click', function() {
    textcss.classList.remove("transcss");
    textcss.classList.remove("transjs");
    textcss.classList.remove("transsql");
    textcss.classList.remove("transreact");
 textcss.classList.add("transhtml");
 var currentRotation = parseFloat(this.style.transform.replace('rotateY(', '').replace('deg)', '')) || 0;
 var newRotation = currentRotation + 360;
 this.style.transform = "rotateY(" + newRotation + "deg)";

 code.classList.add("bghtml");
 code.classList.remove("bgcss");
 code.classList.remove("bgsql");
 code.classList.remove("bgreact");
 code.classList.remove("bgjs");

    });
zdjjs.addEventListener('click', function() {
    textcss.classList.remove("transcss");
    textcss.classList.remove("transhtml");
    textcss.classList.remove("transsql");
    textcss.classList.remove("transreact");
    textcss.classList.add("transjs");

    var currentRotation = parseFloat(this.style.transform.replace('rotateY(', '').replace('deg)', '')) || 0;
    var newRotation = currentRotation + 360;
    this.style.transform = "rotateY(" + newRotation + "deg)";
   

    code.classList.add("bgjs");
    code.classList.remove("bgcss");
    code.classList.remove("bgsql");
    code.classList.remove("bgreact");
    code.classList.remove("bghtml");
   });

   zdjsql.addEventListener('click', function() {
    textcss.classList.remove("transcss");
    textcss.classList.remove("transjs");
    textcss.classList.remove("transhtml");
    textcss.classList.remove("transreact");
    textcss.classList.add("transsql");
    var currentRotation = parseFloat(this.style.transform.replace('rotateY(', '').replace('deg)', '')) || 0;
    var newRotation = currentRotation + 360;
    this.style.transform = "rotateY(" + newRotation + "deg)";
   
    code.classList.add("bgsql");
    code.classList.remove("bgcss");
    code.classList.remove("bghtml");
    code.classList.remove("bgreact");
    code.classList.remove("bgjs");
   });
   zdjreact.addEventListener('click', function() {
    textcss.classList.remove("transcss");
    textcss.classList.remove("transjs");
    textcss.classList.remove("transsql");
    textcss.classList.remove("transhtml");
    textcss.classList.add("transreact");
    var currentRotation = parseFloat(this.style.transform.replace('rotateY(', '').replace('deg)', '')) || 0;
    var newRotation = currentRotation + 360;
    this.style.transform = "rotateY(" + newRotation + "deg)";
   
    code.classList.add("bgreact");
    code.classList.remove("bgcss");
    code.classList.remove("bgsql");
    code.classList.remove("bghtml");
    code.classList.remove("bgjs");
   });

   const elements = document.querySelectorAll('.col');
  
   window.addEventListener("scroll", function scrollHandler() {
    const scrollPosition = window.scrollY;
    elements.forEach(element => {
        // Generowanie nowego koloru na podstawie pozycji przewijania
        const hue = (scrollPosition/4) % 360;
        element.style.filter = `hue-rotate(${hue}deg)`;
    });
});
const txtanim = document.getElementById("txtanim");
const array = ["życie", "pieniądze", "warunki pracy","doświadczenia"," jutro"];
let index = 0;

function displayNextWord() {
    txtanim.innerText = array[index];
    index = (index + 1) % array.length;
    
}


setInterval(displayNextWord, 4000);
displayNextWord();
document.querySelector('.submit').addEventListener('click', function(event) {
    event.preventDefault();

    // wyczyszczenie bledow
    clearErrors();

    let valid = true;

    // walidacja imienia
    const firstName = document.getElementById('firstName').value;
    if (!/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/.test(firstName)) {
        document.getElementById('firstNameError').textContent = 'Imię powinno zaczynać się z dużej litery i składać się tylko ze znaków alfabetu.';
        valid = false;
    }

    // walidacja naziwska
    const lastName = document.getElementById('lastName').value;
    if (!/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]*$/.test(lastName)) {
        document.getElementById('lastNameError').textContent = 'Nazwisko powinno zaczynać się z dużej litery i składać się tylko ze znaków alfabetu.';
        valid = false;
    }

    // walidacja maila
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Podaj prawidłowy adres email.';
        valid = false;
    }

    // walidacja plci
    const genderFemale = document.getElementById('genderFemale').checked;
    const genderMale = document.getElementById('genderMale').checked;
    if (!genderFemale && !genderMale) {
        document.getElementById('genderError').textContent = 'Proszę wybrać płeć.';
        valid = false;
    }

    // submit jesli przeszlo walidacje
    if (valid) {
        document.querySelector('form').submit();
    }
});

function clearErrors() {
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('capsLockWarningFirstName').textContent = '';
    document.getElementById('capsLockWarningLastName').textContent = '';
    document.getElementById('capsLockWarningEmail').textContent = '';
}

function checkCapsLock(event, warningId) {
    const isCapsLock = event.getModifierState && event.getModifierState('CapsLock');
    document.getElementById(warningId).textContent = isCapsLock ? 'Caps Lock jest włączony' : '';
}


document.getElementById('firstName').addEventListener('keyup', function(event) {
    checkCapsLock(event, 'capsLockWarningFirstName');
});
document.getElementById('lastName').addEventListener('keyup', function(event) {
    checkCapsLock(event, 'capsLockWarningLastName');
});
document.getElementById('email').addEventListener('keyup', function(event) {
    checkCapsLock(event, 'capsLockWarningEmail');
});