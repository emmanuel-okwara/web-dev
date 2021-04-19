//section 1 data[structure]
// model class
// window.onload = function() {
async function load() {
    data = await fetch('../src/data.json')
    newData = await data.json();
    return newData;
}


// animating the icons on
function icons() {
    // Getting the buttons
    back_icon = document.querySelector('.back-icon-button');
    buttonOne = document.querySelector('.button-one');
    buttonTwo = document.querySelector('.button-two');
    arrow1 = document.querySelector('.previous-button');
    arrow = document.querySelector('.next-button');

    // Dropdown animations
    // Add the new class to the element we want to animate.
    buttonOne.classList.add('dropdown-btn-one');
    buttonTwo.classList.add('dropdown-btn-two');
    // slide right animation
    back_icon.classList.add('slideRight-back-button');
    arrow1.classList.add('slideRight-previous-button');

    // Slide left animation
    arrow.classList.add('slideLeft-next-button');
}


//changing the content dymamiclly
let cntr = 0;
let current = []
async function dynamicChange() {
    new_data = await load();
    new_models = new_data.Model;

    model_image_viewer_container = document.querySelector('.model-image-viewer-container');
    model_name = document.querySelector('.model-name');
    model_city = document.querySelector('.model-city');
    model_background = document.querySelector('.model-background');
    mdl_number = document.querySelector('.mdl-number');



    document.querySelector('.next-button').addEventListener('click', () => {
        if (cntr === new_models.length - 1) {
            cntr = 0;
        }
        model_image_viewer_container.style.cssText = `background-image: url(${new_models[cntr].imglocation});`;
        model_name.innerHTML = `<h1 class="model-name model-name-animation" style = "font-size: 48px;">${new_models[cntr].name}<br/>${new_models[cntr].surname}</h1>`;
        model_city.innerHTML = `<p class="model-city model-city-animation">${new_models[cntr].city}</p>`;
        model_background.innerHTML = `<p class="model-background model-background-animation" style="font-size:1.2em;">${new_models[cntr].description}</p>`;
        mdl_number.innerHTML = `<span class="mdl-number mdl-number-animation">${cntr}/${new_models.length-1}</span>`;
        current[0] = new_models[cntr];

        cntr++;
    })
    document.querySelector('.previous-button').addEventListener('click', () => {
        if (cntr === 0) {
            cntr = new_models.length - 1;
        }
        model_image_viewer_container.style.cssText = `background-image: url(${new_models[cntr].imglocation});`;
        model_name.innerHTML = `<h1 class="model-name model-name-animation" style = "font-size: 48px;">${new_models[cntr].name}<br/>${new_models[cntr].surname}</h1>`;
        model_city.innerHTML = `<p class="model-city model-city-animation">${new_models[cntr].city}</p>`;
        model_background.innerHTML = `<p class="model-background model-background-animation" style="font-size:1.2em;">${new_models[cntr].description}</p>`;
        mdl_number.innerHTML = `<span class="mdl-number mdl-number-animation">${cntr}/${new_models.length-1}</span>`;
        current[0] = new_models[cntr];
        cntr--;
    });
}
Icon_Change = setTimeout(icons, 14000);

Icon_Change;
dynamicChange();




// this is the script for the navigation container.
// This will be used to change the navigation icon
let counter = 0;

change_nav_icon = () => {
    nav_icon = document.querySelector('.nav-bar-button');
    let nav_links_cnt = document.querySelector('.nav-links');
    let nav_cnt = document.querySelector('.nav-cnt');

    nav_icon.addEventListener('mouseover', function() {
        if ((nav_icon.getAttribute('src') === './img/icons-buttons/burger-icon.png') && (nav_cnt.offsetWidth < 400)) {
            nav_icon.setAttribute('src', './img/icons-buttons/drp-down.png');
        }
        if ((nav_icon.getAttribute('src') === './img/icons-buttons/go-up.png') && (nav_cnt.offsetWidth > 400)) {
            nav_icon.setAttribute('src', './img/icons-buttons/top-icon.png');
        }
    })
    nav_icon.addEventListener('mouseleave', () => {
        if ((nav_icon.getAttribute('src') === './img/icons-buttons/drp-down.png') && (nav_cnt.offsetWidth < 400)) {
            nav_icon.setAttribute('src', './img/icons-buttons/burger-icon.png')
        }
        if ((nav_icon.getAttribute('src') === './img/icons-buttons/top-icon.png') && (nav_cnt.offsetWidth > 400)) {
            nav_icon.setAttribute('src', './img/icons-buttons/go-up.png');
        }
    })
    nav_icon.addEventListener('click', () => {
        if ((nav_cnt.offsetWidth < 400) && (nav_icon.getAttribute('src') === './img/icons-buttons/drp-down.png')) {
            nav_icon.setAttribute('src', './img/icons-buttons/go-up.png')
            nav_links_cnt.classList.add('links-body');
            nav_icon.classList.add('nav-icon-trans');
            nav_cnt.classList.add('nav-cnt-down');
        }
        if ((nav_cnt.offsetWidth > 400) && (nav_icon.getAttribute('src') === './img/icons-buttons/top-icon.png')) {
            nav_icon.setAttribute('src', './img/icons-buttons/burger-icon.png');
            nav_links_cnt.classList.remove('links-body');
            nav_icon.classList.remove('nav-icon-trans');
            nav_cnt.classList.remove('nav-cnt-down');
        }
    })


}
change_nav_icon();

// This is where the readmore functionality goes

readmore = () => {
    let readmore_button = document.querySelector('.more-info');
    let model_display = document.createElement('div');
    //setting up the div for css styling ;
    model_display.classList.add('model-display', 'model-display-animation');

    // button functionality
    readmore_button.addEventListener('click', () => {
        document.querySelector('.bdy-cnt').prepend(model_display);
        container = document.querySelector('.model-display');
        // adding information to the container

    })

}

// readmore();