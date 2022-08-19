TweenLite.defaultEase = Expo.easeOut;
const Blog = () =>{

    const blogs = document.querySelectorAll('.blog');
    blogs.forEach(blog => {
        const btn = blog.querySelector('.read-more');
        const pa = blog.querySelector('p');
        
        btn.addEventListener('click', (e)=>{
            e.preventDefault();
            if (btn.textContent === 'read more') {
                btn.textContent = 'intro...';
            } else {
                btn.textContent = 'read more'
            }
            
            const h = getComputedStyle(pa).getPropertyValue('max-Height');
            if (h == '80px') {
                TweenMax.fromTo(pa, 0.2, {maxHeight: '80px', y: 100 }, {maxHeight: '100%', y:0});
            }
            if (h == '100%') {
                TweenMax.fromTo(pa, 0.2, {maxHeight: '100%', y: -100 }, {maxHeight: '80px', y:0});
            }

            
        });
    });
}
Blog();