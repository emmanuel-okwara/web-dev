let word = `You can use it for many word games: to create or to solve crosswords, arrowords (crosswords with arrows), word puzzles, to play Scrabble, Words With Friends, hangman, the longest word, and for creative writing: rhymes search for poetry, and words that satisfy constraints from the Ouvroir de Potentielle (OuLiPo: workshop of potential litterature) such as lipograms,k`.toLocaleLowerCase();
class stringWorkspace {
    constructor(words) {
        this.words = words.split('');
        this.currchar = 0;
        this.wordcontainer = document.querySelector('.cnt');
    }
    addwords() {
        // cleaning the words
        this.words.forEach((el) => {
            this.wordcontainer.innerHTML += `<span class="inwrd">${el}</span>`;
        })
    }
    cursors(num) {
        this.wordcontainer.children[num].classList.add('active');
        this.remove = this.currchar > 0 ? this.wordcontainer.children[num - 1].classList.remove('active') : false;
        return this.wordcontainer.children[num];
    };
    movecursor() {
        document.onkeypress = (el) => {
            if(el.key == this.cursors(this.currchar).textContent){
            this.active = el.key == this.wordcontainer.children[this.currchar].textContent ? this.currchar++ :false;
            document.querySelector('.cnt').style.transform += `translateX(-${this.cursors(this.currchar).getBoundingClientRect().width+3}px)`;
        }
        else{
            this.cursors(this.currchar).outerHTML = `<span class="inerr">${el.key}</span><span class="inwrd">${this.cursors(this.currchar).innerHTML}</span>`;
            this.currchar +=1;
            this.cursors(this.currchar);
        }
        }
    }
}
let workspace = new stringWorkspace(word);
workspace.addwords();
workspace.cursors(0);
workspace.movecursor();