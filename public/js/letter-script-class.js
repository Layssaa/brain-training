export class DragDropClass {
    #wordList;
    #letterAlphabet;

    #wordListQtd;
    #letterExtra;
    #letterTotal;

    #wordListSelected;
    #letterListSelected;

    constructor() {
        this.#wordList = [];
        this.#letterAlphabet = "abcdefghijklmnopqrstuvwxyz";

        this.#wordListQtd = 0;
        this.#letterExtra = 0;
        this.#letterTotal = 0;

        this.#wordListSelected = [];
        this.#letterListSelected = [];

    }

    // return random letterlist(Array), no repeat letter
    randomLetterList() {
        let randomLetterPosition;
        let randomLetterQtd = 0;

        do {
            // fazer um splice da letra selecionada
            if (this.#letterListSelected[randomLetterQtd] == undefined && randomLetterQtd < this.#wordListQtd) {
                this.#letterListSelected[randomLetterQtd] = this.#wordListSelected[randomLetterQtd][0];
                console.log(this.#wordListSelected);
                console.log(this.#letterListSelected[randomLetterQtd]);
                console.log("(3 <) Pos: ", randomLetterQtd, "LS: ", this.#letterListSelected[randomLetterQtd]);
                randomLetterQtd++;
            }

            randomLetterPosition = Math.floor(Math.random() * this.#letterTotal);
            if (this.#letterListSelected[randomLetterPosition] == undefined && randomLetterQtd >= this.#wordListQtd) {
                let letterSelected = this.#letterAlphabet[Math.floor(Math.random() * this.#letterAlphabet.length)];
                if (this.#letterListSelected.indexOf(letterSelected) == -1) {
                    this.#letterListSelected[randomLetterPosition] = letterSelected;
                    randomLetterQtd++;
                    console.log("(3 >=) Pos: ", randomLetterPosition, "LS: ", this.#letterListSelected[randomLetterPosition]);
                }
            }
        }
        while (randomLetterQtd < this.#letterTotal);
        console.log(this.#letterListSelected);
        return this.#letterListSelected;
    }
    // return random wordlist(Array), no repeat word
    randomWordListSelect() {
        let randomWordPosition;
        let randomWordQtd = 0;
        let wordSelected;
        do {
            randomWordPosition = Math.floor(Math.random() * this.#wordListQtd);
            if (this.#wordListSelected[randomWordPosition] == undefined) {
                wordSelected = this.#wordList[Math.floor(Math.random() * this.#wordList.length)];
                console.log("Pos: ", randomWordQtd, "WS: ", wordSelected);

                if (this.#wordListSelected.indexOf(wordSelected) == -1) {
                    this.#wordListSelected[randomWordPosition] = wordSelected;
                    randomWordQtd++
                };

            };
        }
        while (randomWordQtd < this.#wordListQtd);
        return this.#wordListSelected;
    }

    // set list of words, receive "Array"
    set setWordList(_wordList) {
        if (Array.isArray(_wordList)) {
            this.#wordList = _wordList;
            this.#wordListQtd = 0;
            this.#letterExtra = 0;
            this.#letterTotal = 0;
            this.#wordListSelected = [];
            this.#letterListSelected = [];
            console.log("SetWordList: ", this.#wordList);
            console.log("SetWordListLength: ", this.#wordList.length);

        } else {
            return "erro: parametro deve ser um array";
        }
    }

    // get all words inserted in wordlist, return "Array"
    get getWordList() {
        return this.#wordList;
    }

    // set extra letter for show in html
    set setExtraLetter(_letterExtraValue) {
        if (Number.isInteger(_letterExtraValue)) {
            this.#letterExtra = _letterExtraValue;
            console.log("SetExtraNumber: ", this.#letterExtra);
        } else {
            return "erro: parametro deve ser um 'Number'";
        }
    }

    getWordListSelected(_qtd) {

        _qtd == undefined ? this.#wordListQtd = this.#wordList.length : this.#wordListQtd = this.#wordList.length > _qtd ? _qtd : this.#wordList.length;
        this.#letterTotal = (this.#wordListQtd + this.#letterExtra) <= this.#letterAlphabet.length ? (this.#wordListQtd + this.#letterExtra) : 25;
        this.randomWordListSelect();
        this.randomLetterList();

        return [this.#wordListSelected, this.#letterListSelected];
    }
}