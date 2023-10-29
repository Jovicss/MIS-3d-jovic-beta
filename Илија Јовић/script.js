const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

const products = document.getElementById("products");
let currentClicks = 0;





// -------------------- slider ----------------------------------------//
function changeSlide(index) {
    currentIndex = index;
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

const slideInterval = setInterval(nextSlide, 4000); 


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 7000);
    });
});


updateSlider();

// --------------------------------------------------------------//

//-------------------------------- gallery-----------------------------------//

function showGallery() {

    products.style.display = "grid"
    currentClicks++;

    if(currentClicks%2 === 0) {
        products.style.display = "none"
    }
    
}
//------------------------------------------------------------------------------//

//----------------------------------- contact -------------------------------------//

function messageSend() {
    
    let regName = /^[A-Z][a-z]{2,15}$/
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // verifikacija za email, nasao na internetu

    let validation = 0;

    if(regName.test(document.getElementById("user-name").value)) {
        validation++;
    } else  {
        alert("Molim Vas unesite validno ime")
        validation--;
    }

    if(regEmail.test(document.getElementById("user-email").value)) {
        validation++;
    } else {
        alert("Došlo je do greške sa unosom e-mail adrese")
        validation--;
    }

    if(document.getElementById("user-message").value === '') {
        alert("Prostor za Vaš komentar ne sme ostati prazan")
        validation--;
    } else {
        validation++;
    }

    // console.log(validation)

    if(validation === 3) {
        alert("Primili smo Vašu poruku, odgovor očekujte u kratkom roku")
        document.getElementById("user-name").value = "";
        document.getElementById("user-email").value = "";
        document.getElementById("user-message").value = "";
        validation = 0;
    } else if(validation < 3) {
        validation = 0;
    }

    // console.log(validation)

}

//---------------------------------------------------------------------------//
