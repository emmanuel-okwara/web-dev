/// Scripts for the homepage page 
// navbar navBarContent
pic_array = [
    './img/models/blake-cheek-kOFVHMRqCBI-unsplash.jpg',
    "./img/models/jude.jpg",
    "./img/models/megan.jpg",
    "./img/models/prov.jpg",
    "./img/models/rebecca.jpg"
];
let navBarIcon = document.querySelector(".nav-icon");
let navBarContainer = document.querySelector(".nav-bar-cnt");
let navElementContainer = document.querySelector(".navbar-cnt");
let navList = document.querySelector(".nav-list");
let navListref = document.querySelectorAll(".nav-list > li");

navfunc = () => {
    navBarIcon.addEventListener('click', () => {
        if (navBarIcon.getAttribute('src') === './img/icons-buttons/burger1.png') {
            navBarIcon.setAttribute('src', './img/icons-buttons/top-icon.png')
            navElementContainer.classList.add('nav-cnt-click');
            navBarContainer.classList.add('navBar-click');
            navListref.forEach(el => {
                el.classList.add('hme-anchor-animation')
            });


        } else if (navBarIcon.getAttribute('src') === './img/icons-buttons/top-icon.png') {
            navElementContainer.classList.remove('nav-cnt-click')
            navBarContainer.classList.remove('navBar-click')
            navBarIcon.setAttribute('src', './img/icons-buttons/burger1.png')
            navListref.forEach(el => {
                el.classList.remove('hme-anchor-animation')
            });

        }
    })

}
navfunc();
let pic_counters = 0;

function back_change() {
    if (pic_counters === pic_array.length) {
        pic_counters = 0;
    }
    document.querySelector('.img-cnt').style.cssText = `
        background-image: url("${pic_array[pic_counters]}");
        background-size: cover;
        `;
    pic_counters++;


}

function changePage() {
    let btncnt;
    btncnt = document.querySelector('.btn')
    btncnt.addEventListener('click', () => {
        document.location.replace('http://127.0.0.1:5500/app.html')
    })
}
setInterval(back_change, 5000)
changePage();