// Simple smooth scroll
const links = document.querySelectorAll('nav a');

for(const link of links){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute('href');
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    });
}
