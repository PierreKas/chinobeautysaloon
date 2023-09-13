
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('.retour a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('.hero a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
// Sélectionnez toutes les images de la classe "service"
const images = document.querySelectorAll('.service img');

// Parcourez les images et ajoutez un gestionnaire d'événements de clic
images.forEach(image => {
    image.addEventListener('click', () => {
        // Récupérez le prix à partir de l'attribut "data-price"
        const price = image.getAttribute('data-price');
        
        // Affichez le prix (par exemple, dans une boîte de dialogue)
        alert(`Prix : ${price} FC`);
    });
});

/*const tresses = document.querySelectorAll('.Images-Tresses img');
function animateImage(image) {
    image.style.transform = 'translateY(-20px)'; 
    setTimeout(() => {
        image.style.transform = 'translateY(0)';
    }, 2000); 
}

tresses.forEach((image, index) => {
    setTimeout(() => {
        animateImage(image);
    }, index * 250); 
});*/
