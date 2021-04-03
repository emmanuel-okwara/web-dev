
// scroll = window.requestAnimationFrame || function() {window.setTimeout(callback,1000/60)};
elements = document.querySelectorAll('#story-animation')
function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}
num = 0;
img_bck = () => {
    bdy_1_imgs = ["./img/chad-montano-MqT0asuoIcU-unsplash.jpg",
    "./img/emerson-vieira-Qi7NlvF-ZsY-unsplash.jpg",
    "./img/courtney-cook-eNhZ5BTwmyQ-unsplash.jpg",
    "./img/jon-parry-C8eSYwQkwHw-unsplash.jpg",
    "./img/jona-friedri-o2hRqvFYJWY-unsplash.jpg",
    "./img/pradnyal-gandhi-1MqDCpA-2hU-unsplash.jpg",
    "./img/amna-akram-KIL9suHFp6s-unsplash.jpg"
];
img_div = document.querySelectorAll('.bdy-img');
img_div.forEach(element =>{
    element.style.cssText = `background-image:url("${bdy_1_imgs[num++]}");
    background-size: cover;
    background-position: center;`
})
}
bdy1_background_change = () => {
img_div = document.querySelectorAll('.bdy-img');
    img_div.forEach(img =>{
        img.addEventListener('click',()=>{
            document.querySelector('.bdy-1').style.cssText = `background-image:url("${img.children[0].getAttribute('src')}");
            background-size:cover; background-position: center;`;
        })
    })
}

animate = () => {
    elements.forEach(element => {
        elementNode = element.children
        if (isElementInViewport(elementNode[0])){
            elementNode[0].classList.add('h1-vis')
        }
        if (isElementInViewport(elementNode[1])){
            elementNode[1].classList.add('p-vis')
        }
        // else {
            
        //     elementNode[0].classList.remove('h1-vis');
        //     elementNode[1].classList.remove('p-vis');
        // }
    })
}

var count = 0;
changebackground =() => {
    bdy5_pic = ['./img/chad-montano-MqT0asuoIcU-unsplash.jpg',
                './img/shaian-ramesht-exSEmuA7R7k-unsplash.jpg',
                './img/markus-spiske-q0UBzw-FKE4-unsplash.jpg'];
    bdy3_pic = ['./img/jona-friedri-o2hRqvFYJWY-unsplash.jpg',
                './img/jon-parry-C8eSYwQkwHw-unsplash.jpg',
                './img/pradnyal-gandhi-1MqDCpA-2hU-unsplash.jpg'];
            
        document.querySelector('.bdy-3').style.cssText = `background : url("${bdy3_pic[count]}");
        background-size : cover; background-position : center;`;
    
        document.querySelector('.bdy-5').style.cssText = `background : url("${bdy5_pic[count]}");
        background-size : cover; background-position : center;`;
        count++;
        if (count == bdy5_pic.length){
            count= 0;
        }
        
}
document.body.onload = () => {
    setTimeout(img_bck(),1000/60);
    setInterval(changebackground,10000);
    setTimeout(bdy1_background_change(),2000);
    setTimeout(window.addEventListener('scroll',animate),5000);
};


