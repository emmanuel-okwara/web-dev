//section 1 data[structure]
// model class
// window.onload = function() {
async function load() {
    data = await fetch('../src/data.json')
    newData = data.json();

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

var cntr = 0;
async function dynamicChange() {
    new_data = await load();
    new_models = new_data.Model;

    model_image_viewer_container = document.querySelector('.model-image-viewer-container');
    model_name = document.querySelector('.model-name');
    model_city = document.querySelector('.model-city');
    model_background = document.querySelector('.model-background');

    document.querySelector('.next-button').addEventListener('click', () => {
        if (cntr === new_models.length - 1) {
            cntr = 0;
            model_image_viewer_container.style.cssText = `background-image: url(${new_models[cntr].imglocation});`;
            model_name.innerText = `${new_models[cntr].name}\n ${new_models[cntr].surname}`;
            model_city.innerText = `${new_models[cntr].city}`;
            model_background.innerText = `${new_models[cntr].description}`;
        } else {
            model_image_viewer_container.style.cssText = `background-image: url(${new_models[cntr].imglocation});`;
            model_name.innerText = `${new_models[cntr].name}\n ${new_models[cntr].surname}`;
            model_city.innerText = `${new_models[cntr].city}`;
            model_background.innerText = `${new_models[cntr].description}`;
        }
        cntr++;
    })
    document.querySelector('.previous-button').addEventListener('click', () => {
        if (cntr === 0) {
            cntr = new_models.length - 1;
            model_image_viewer_container.style.cssText = `background-image: url(${new_models[cntr].imglocation});`;
            model_name.innerText = `${new_models[cntr].name}\n ${new_models[cntr].surname}`;
            model_city.innerText = `${new_models[cntr].city}`;
            model_background.innerText = `${new_models[cntr].description}`;
        } else {
            model_image_viewer_container.style.cssText = `background-image: url(${new_models[cntr].imglocation});`;
            model_name.innerText = `${new_models[cntr].name}\n ${new_models[cntr].surname}`;
            model_city.innerText = `${new_models[cntr].city}`;
            model_background.innerText = `${new_models[cntr].description}`;
        }
        --cntr;


    });
}
setTimeout(icons, 14000);
setInterval(dynamicChange, 1000);