// Welcome animation
window.onload = function() {
    // adding tiles to the body
    function tile() {
        tiles = document.createElement("div");
        tiles.classList.add("tiles");
        tiles.style.cssText += `
            width: 6.6%;
            background-color: rgb(246, 250, 232);
            height: 0vh;
        `;
        return tiles;
    };
    // Adding tile to the curtain div
    add_tiles = (tile_) => {
        curtainBody = document.querySelector('.curtain-animation');
        curtainBody.parentNode.style.cssText =
            `
            width : 100vw;
            height: 100vh;
        `;
        curtainBody.style.cssText += `
            display:flex;
            justify-content: space-between;
        `
        let count = 0;
        for (count; count < 15; count++) {
            curtainBody.appendChild(tile_());
        }
    }

    // animating the tiles
    animate_tiles = () => {
        add_tiles(tile);
        num = 0
        tiles_container = document.querySelector('.curtain-animation').children;
        let count = 0;
        for (count; count < tiles_container.length; count++) {
            tiles_container[count].style.cssText += `
            animation: inview 4s ${count*0.04}s cubic-bezier(0,.5,0,1) forwards; color: black;`;
        }
    }
    animate_tiles();

    //animating text
    function animate_text() {
        let el = document.querySelector('.text-animation > h1 > span');
        let ele = document.querySelector('.text-animation > h1');
        ele.style.cssText += `transform: translate(${(document.body.clientWidth)/2-200}px,${(document.body.clientHeight)/2}px);`;
        h1_text = el.innerText;
        el.style.cssText = 'display: none;';
        for (let count = 0; count < h1_text.length; count++) {
            ele.innerHTML += `<span class="animate-text" style='animation: anim 4s ${count*0.1}s cubic-bezier(0,.4,0,1) forwards;'>${h1_text[count]}</span>`;
        }
    }
    call = setTimeout(animate_text, 4000)
    call

    removing = () => {
        let el = document.querySelector('.welcome-animation')
        document.body.removeChild(el);
        clearTimeout(call)
    }

    function display_body() {
        document.querySelector('.bdy-cnt').classList.add('body-animation');
    }
    setTimeout(removing, 10000)
    setTimeout(display_body, 11000)
}