const bouton = document.querySelector('.bouton');
bouton.addEventListener('click', () => {
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
});