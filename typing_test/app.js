let word = `You can use it for many word games: to create or to solve crosswords, arrowords (crosswords with arrows), word puzzles, to play Scrabble, Words With Friends, hangman, the longest word, and for creative writing: rhymes search for poetry, and words that satisfy constraints from the Ouvroir de Potentielle (OuLiPo: workshop of potential litterature) such as lipograms,k`;

class stringWorkspace{
    constructor(){
        this.new_string = word;
    };S
    stringarray(){
        return (this.new_string.split('           '));
    }
}

class insertWorkspace extends stringWorkspace{
    constructor(){
        super();
        this.body = document.querySelector(".cnt");
        this.body.innerHTML = '';
        this.stringarray = this.stringarray();
    }
    addToBody(){ 
        this.stringarray.forEach(el=>{
            el+=' ';
            this.body.innerHTML += `<span class="inwrd">${el.split('').map(ele=> `<span class="characters">${ele}</span>`).join("")}</span>`;
        })
    
}
}

class clickingFunctions {
    constructor() {
    this.wordcnt = document.querySelector('.cnt').children;
    this.wordcn = document.querySelector('.cnt');
    this.currwrd = 0;
    this.currchar = 0;
    this.translate = 30;
    }

    keycontrolling() {
        document.body.addEventListener('keypress',(e) => {
            console.log(e.keyCode);
            if (e.key === this.wordcnt[this.currwrd].children[this.currchar].textContent) {

                // add the changing of the color and the indicator
                this.wordcnt[this.currwrd].children[this.currchar].classList.add('right', "gray");

                // This is for the removing the indicator that show the current character
                if(this.currchar > 0){
                this.wordcnt[this.currwrd].children[this.currchar].previousElementSibling.classList.remove('right');
                }
                this.currchar++;

                // this is for the changing to the next word
                if((this.currchar === this.wordcnt[this.currwrd].children.length)){
                    this.currwrd ++;
                    this.currchar = 0;
                }
                //this removes the pointer from the last character of the last word
                if (this.currwrd > 0 && this.currchar == 0){
                    this.wordcnt[this.currwrd-1].lastElementChild.classList.remove('right');
                }

                // this moves the words to the left side.
                this.wordcn.style.cssText += `transform: translateX(${-this.translate}px);`;
                this.translate+= 27;

            }
            else if (e.key != this.wordcnt[this.currwrd].children[this.currchar].textContent)
            {
                this.wordcnt[this.currwrd].children[this.currchar].className += 'wrong';
                this.wordcnt[this.currwrd].children[this.currchar].before(e.key)
                
            }
            
        })
    }

}

let string = new insertWorkspace().addToBody();
let clicks = new clickingFunctions().keycontrolling();
string;
clicks;

