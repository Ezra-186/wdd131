const btn = document.getElementById('hamburger');
const nav = document.querySelector('.navigation');

btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
});


document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;











