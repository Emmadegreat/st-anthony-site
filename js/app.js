
// initializing the aos animation.

/*navToggler = document.querySelector(".menu__button");
navToggler.onclick = function navToggle() {
    navbar = document.querySelector(".nav__bar");
    navbar.classList.toggle("active");
    
}*/


const inputs = document.getElementsByClassName("input");
  for (let i = 0; i < inputs.length; i++) {
    background = inputs[i].style.background = "red";
}

function navToggle() {
    navbar = document.querySelector(".nav__bar");
    navbar.classList.toggle("active");
}

const div = document.createElement("div");
const p = document.createElement("p");
const text = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eaque quisquam esse officiis veritatis quibusdam, delectus ab praesentium assumenda omnis excepturi atque tempore sequi, sint dolorem! Cumque obcaecati porro, atque est dignissimos debitis pariatur accusantium molestias excepturi repellat quibusdam doloremque earum repudiandae dolore tenetur corporis cupiditate totam nisi voluptate optio fugiat quidem nostrum iusto? Enim minus exercitationem delectus, impedit nostrum hic officiis iure porro provident ipsam incidunt eius blanditiis aut molestiae aliquam nihil officia rem recusandae sint voluptatem mollitia. Maiores quo alias architecto, dolor nihil, consequuntur repellendus possimus temporibus veniam doloribus quibusdam est dolores, quis perferendis officiis sapiente? Vel, consectetur.");
p.appendChild(text);
div.appendChild(p);
div.removeChild(p);

div.setAttribute("class", "row");
div.setAttribute("id", "footer__row");
const element = document.getElementById("footer");
element.appendChild(div);

//2nd row
const div2 = document.createElement("div");
div2.setAttribute("class", "row");
div2.setAttribute("id", "footer__bottom__row");
const hr = document.createElement("hr");
const p2 = document.createElement("p");
const txt = document.createTextNode("EMFCONZULT - Copyright 2022 - All Right Reserved");
p2.appendChild(txt);
div2.appendChild(p2);
element.appendChild(hr);
element.appendChild(div2);

//1st column
const first__column = document.createElement("div");
first__column.setAttribute("class", "column");
first__column.setAttribute("id", "first__column");


const p__1 = document.createElement("p");
para = document.createTextNode("paragraph one in column one");
p__1.appendChild(para);
p__1.removeChild(para);

const ul = document.createElement("ul");
ul.setAttribute("id", "social__links")
ul.innerHTML = `

<li><a href="">facebook</a></li>
<li><a href="">twitter</a></li>
<li><a href="">google plus</a></li>
<li><a href="">skype</a></li>

`
const heading__1 = document.createElement("h2");
h1 = document.createTextNode("Social links");
heading__1.appendChild(h1);

first__column.append(heading__1);
first__column.append(p__1)
first__column.appendChild(ul);
div.append(first__column);


//2nd column
const second__column = document.createElement("div");
second__column.setAttribute("class", "column");
second__column.setAttribute("id", "second__column");

const p__2 = document.createElement("p");
para__2 = document.createTextNode("234 Awolowo Street Ikeja Lagos");
p__2.appendChild(para__2);
//p__2.removeChild(para__2);

const heading__2 = document.createElement("h2");
h2 = document.createTextNode("Address");
heading__2.appendChild(h2);

second__column.append(heading__2);
second__column.append(p__2)
div.append(second__column);

//3nd column
const third__column = document.createElement("div");
third__column.setAttribute("class", "column");
third__column.setAttribute("id", "third__column");

const p__3 = document.createElement("p");
para__3 = document.createTextNode("+234-703-453-4697");
p__3.appendChild(para__3);
//p__3.removeChild(para__3);

const heading__3 = document.createElement("h2");
h3 = document.createTextNode("Contact");
heading__3.appendChild(h3);

third__column.append(heading__3);
third__column.append(p__3)
div.append(third__column);



function Team() {
    team = document.getElementById("img");
    team.style.display = 'none';
    
    team1 = document.getElementById("img2");
    team1.style.display = 'block';
}

function Teamout() {
    team = document.getElementById("img");
    team.style.display = 'block';

    team1 = document.getElementById("img2");
    team1.style.display = 'none';
}
function mouseEnter() {
    document.getElementById('hero__section');
    document.getElementById('h2').innerHTML = 'Deo Gratia!'
}
function mouseLeave() {
    document.getElementById('hero__section');
    document.getElementById('h2').innerHTML = 'Lumen Christi!'
}


/*
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const para = document.getElementsByTagName('p');
    for (let i = 0; i < para.length; i++) {
        const pp = para[i];
        pp.style.color = 'red';
    }

})
*/






/*const cc = document.getElementById('btn');
cc.addEventListner('click', (e) => {
    e.preventDefault();

    if (cc.getAttribute('aria-expanded') === 'true') {
        cc.setAttribute('aria-expanded', false);
    } else {
        cc.setAttribute('aria-expanded', true);
    }
});

const toggleButton = () => {
    if (cc.textContent === 'readmore') {
        cc.textContent = 'readless';
    } else {
        cc.textContent = 'readmore';
    }
}
function Read() {
    if (cc.textContent === 'readmore') {
        cc.textContent = 'readless';
    } else {
        cc.textContent = 'readmore';
    }
}*/

    
    




//registration form page validation
/*
let name = document.getElementById("name");
let password = document.getElementById("password");
let email = document.getElementsByTagName("email");
let address = document.getElementsByTagName("address");
let course = document.getElementsByTagName("course");
let phone__number = document.getElementsByTagName("phone__number");
let confirm__password = document.getElementsByTagName("confirm__password");
let form = document.querySelector("form");

function validateInput() {
    if (Name.value.trim() === "") {
        onError(input, "name cannot be empty");
    } else {
        onSuccess(Name);
    }
}


document.querySelector("button")
    .addEventListener("click", (event) => {
    event.preventDefault();

        validateInput();
});

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector(small);
    messageEle.style.visibility = "hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector(small);
    messageEle.style.visibility = "visible";
    messageEle.innerText = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}


TweenLite.defaultEase = Expo.easeOut;
class Event__section{
    constructor(domEL){
        this.element = (domEL)
        this.toggleParagraph()
        this.animateBtn()
        this.animateIcon()
    }
    toggleParagraph=()=> {
        const boxes = this.element.querySelector('.box');
        boxes.forEach(box => {
            const para = box.querySelector('p');
            const btn = box.querySelector('.readmore');
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const height = getComputedStyle(para).getPropertyValue('max-height');
                if (height == '100px') {
                    TweenMax.fromTo(para, 0.2, { maxHeight: '100px', opacity: 0.5, y: 100 }, { maxHeight: '100%', opacity: 1, y: 0, yoyo: true });
                }
                if (height == '100%') {
                    TweenMax.fromTo(para, 0.2, { maxHeight: '100%', opacity: 0.5, y: -100 }, { maxHeight: '100px', opacity: 1, y: 0, yoyo: true });
                }
                this.toggleText(btn);

                if (btn.getAttribute('aria-expanded') === 'true') {
                    btn.setAttribute('aria-expanded', false);
                } else {
                    setAttribute('aria-expanded', true);
                }
            })
        })
    }

    toggleText=(btn) => {
        if (btn.textContent === 'readmore') {
            btn.textContent = 'readless';
        } else {
            btn.textContent = 'readmore';
        }
    }
}


*/