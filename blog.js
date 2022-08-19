TweenLite.defaultEase = Expo.easeOut;
const toggleBlog = () =>{

    const blogs = document.querySelectorAll('.blog');
    blogs.forEach(blog => {
        const btn = blog.querySelector('.read-more');
        const par = blog.querySelector('p');
        
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            
            if (btn.textContent === 'read more') {
                btn.textContent = 'intro...';
            } else {
                btn.textContent = 'read more'
            }

            const h = getComputedStyle(par).getPropertyValue('max-Height');
            if (h == '50px') {
                TweenMax.fromTo(par, 5, {maxHeight:'50px', opacity:0.8, y: 100 }, {maxHeight:'100%', opacity:1, y:0});
            }
            if (h == '100%') {
                TweenMax.fromTo(par, 2, {maxHeight:'100%', opacity:0.8, y: -100 }, {maxHeight:'50px', opacity:1, y:0});
            }
            if (btn.getAttribute('aria-expanded') === 'true') {
                btn.setAttribute('aria-expanded', false);
            } else {
                setAttribute('aria-expanded', true);
            }

            

            
        });
    });
}
toggleBlog();