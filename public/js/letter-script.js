//------------- the function receives by parameter an array with the amount of words that will be inserted in the html. -------------
export function createWordList(_word) {
    const words = _word;

    // ------------- receive array with words -------------
    const wordList = words;
    wordList.forEach(element => {
        //------------- creates HTML from word line -------------
        // ------------- variable that stores the html that will be inserted in the page.-------------
        let wordHTML = `
        <div class="words">
              <div element="${element[0]}" class="letters-words ui-widget-header drop_${element}" id="${element}"></div>
        `;
        for (let w = 1; w < element.length; w++) {
            // ------------- creates the HTML of the letters of the word -------------
            wordHTML += `
                <div class="letters-words">
                            <img element="${element}" src="./images/letter-${element[w]}.png" alt="">
                 </div>
                `;
        };
        wordHTML += `<img class="object" src="./images/${element}.png" alt=""></img>`;
        wordHTML += `</div>`;
        //------------- insert words in html. -------------
        $("#words-space").append(wordHTML);
    });
};

export function createDragLetter(_letters, _names) {
    let letters = _letters;
    letters.sort();
    let letterHTML = "";

    for (let l = 0; l < letters.length; l++) {
            letterHTML += `
        <div class="letters letters-drop">
            <img element="${_letters[l]}" class="letters-object drag ${_letters[l]}" src="./images/letter-${letters[l]}.png" alt="">
        </div>
        `;
    };
    $("#letters-space").append(letterHTML);
};

export function createdAnimal(_animals) {
    const animals = _animals;

    for (let a = 0; a< animals.length; a++) {
        $(".figures").append(`
        <div class="figures-animals">
                <img element="${animals[a]}" class="drag ${animals[a]}" src="./images/${animals[a]}.png" />
        </div>
        `);
    };
};