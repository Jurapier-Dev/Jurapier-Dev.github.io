console.log("connect!")
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('view_active')
        } else {
            entry.target.classList.remove('view_active')
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

const element = document.querySelectorAll('.view_form_left');
const elementsecond = document.querySelectorAll('.view_form_bottom');
element.forEach((el) => observer.observe(el));
elementsecond.forEach((el) => observer.observe(el));

function navmenu() {
    let logoDom = document.getElementById('logo_text')
    let menuDom = document.getElementById('menu')
    let showDom = document.getElementById('show')
    if (menuDom.innerText === "Menu") {
        menuDom.innerText = "Close"
        showDom.style.display = "block"
        // logoDom.style.display = "none"
    } else {
        menuDom.innerText = "Menu"
        showDom.style.display = "none"
        // logoDom.style.display = "block"
    }
}   
