TweenLite.defaultEase = Expo.easeOut;
const toggleParagraph = () => {
    //let btz = document.getElementById('btn');
    //btz.addEventListener('click', (e) => {
    //e.preventDefault();
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        const btn = box.querySelector('.readmore');
        const para = box.querySelector('p');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            //btn.style.color = 'red';
            //para.style.display = 'none';
            if (btn.textContent === "Read more") {
                btn.textContent = "Read less";
            } else {
                btn.textContent = "Read more";
            }

            const height = getComputedStyle(para).getPropertyValue('max-Height');
            if (height == "70px") {
                TweenMax.fromTo(para, 0.2, { maxHeight:"70px", opacity:0.8, y:100}, {maxHeight:'100%', opacity:1, y:0, yoyo:true});
            }

            if (height == "100%") {
                TweenMax.fromTo(para, 0.1, { maxHeight:"100%", opacity:0.8, y:-100}, {maxHeight:'70px', opacity:1, y:0, yoyo:true});
            }
            if (btn.getAttribute('aria-expanded') === 'true') {
                btn.setAttribute('aria-expanded', false);
            } else {
                setAttribute('aria-expanded', true);
            }
            
        })    
    });

    const org = document.querySelectorAll('.org__article');
    org.forEach(org__article => {
        const button = org__article.querySelector('.see_more');
        const pa = org__article.querySelector('p');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const height_1 = getComputedStyle(pa).getPropertyValue('max-Height');
            if (height_1 == '50px') {
                TweenMax.fromTo(pa, 0.2, { maxHeight: '50px', y: 100 }, { maxHeight: '100%', y: 0, yoyo: true });
            }
            if (height_1 == '100%') {
                TweenMax.fromTo(pa, 0.1, { maxHeight: '100%', y: -100 }, { maxHeight: '50px', y: 0, yoyo: true });
            }

            if (button.textContent == 'See more...') {
                button.textContent = 'See less...';
            } else {
                button.textContent = 'see more...';
            }
        })
    });
}

toggleParagraph();

const toggleIcon = () => {
    const icons = document.querySelectorAll('.fa');
    icons.forEach(icon => {
        icon.addEventListener('mouseover', (e) => {
            e.preventDefault();
            TweenLite.to(icon, 1, { rotation: 360 });
        })
        icon.addEventListener('mouseout', (e) => {
            TweenLite.to(icon, 1, { rotation: -360 });
        })
    });
}

toggleIcon();