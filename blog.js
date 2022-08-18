const btn = document.querySelectorAll('.blog');
btn.forEach(blogz => {
    const more = blogz.querySelector('.read-more');
    const pp = blogz.querySelector('p');
    more.addEventListener('click', (e)=>{
        e.preventDefault();
        pp.style.backgroundColor = 'navy';
    })
});