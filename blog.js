const p = document.querySelector('.btn');
p.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('p').style.backgroundColor = 'yellow';
})