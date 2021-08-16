import { DragDropClass } from "./letter-script-class.js";
import { createWordList, createDragLetter, createdAnimal } from "./letter-script.js";
import { pageInitial, gameInitial, selectPhase, phase1, phase2, victoryScreen, theEnd } from "./pages.js";

const dragDropWords = new DragDropClass;
let wordsSelected;

const words = ["abelha", "navio", "vaca", "arroz", "macaco", "baleia", "casa", "carro", "onibus", "urso"];
const animals = ["pato", "sapo", "jacare", "cachorro", "arara", "gato", "coelho"];
const characters = ["girl-1", "boy-1", "girl-2", "boy-2"];

const musicGame = new Audio("./music/theme-music.mp3");
const feedbackGame = new Audio("./music/feedback-game.mp3");
const pointAudio = "./music/points-audio.mp3";
const erroAudio = "./music/erro-1.mp3";

const music = new Audio();
musicGame.autoplay = true;
musicGame.load();
musicGame.volume = 0.3;
feedbackGame.volume = 0.4;

let score = 0;
let scorePlayer = {};
let nameImage = 0;
let scoreTotal = 0;
let countPage = 0;

$(document).ready(() => {

    // --------------------------------- CREATE DRAG & DROP ---------------------------------
    function createDropAndDrag(_arrayWords, _phase) {

        // --------------------------------- DRAG ---------------------------------
        $(".drag").draggable({
            cursor: "grabbing",
            revert: function (_drop) {
                // if the drag is not placed in a valid location 
                if (_drop == false) {
                    return "invalid";
                } else {
                    const classDragg = $(this).attr("element");
                    const classDrop = _drop.attr("element");

                    // if they are different
                    if (classDragg != classDrop) {
                        return true;
                    }
                }
            },
            zIndex: 100,
            snap: ".drop",
            snapMode: "inner",
            snapTolerance: 40,
            tolerance: "touch",
            containment: ".dashboard"
        });

        _arrayWords.forEach((elements) => {
            // --------------------------------- DROP ---------------------------------
            $(`.drop_${elements}`).droppable({

                // ----------- EVENT THAT OCCURS WHEN THE DRAG IS RELEASED -----------
                drop: function (event, ui) {

                    //  ---------------------------------------------

                    // take "element" of drag and drop
                    let elementDropp = $(this).attr("element");
                    let elementDragg = $(ui.draggable).attr("element");

                    // if drag is different from drop
                    if (elementDragg != elementDropp) {
                        $(this).animate({ "background-color": "#FF3333" }, 200, function () {
                            $(this).animate({ "background-color": "#F6FED5" }, 200)
                        });
                        score >= 0 ? score = score - 3 : score = 0;
                        sound(erroAudio);

                    } else {
                        $(this).droppable("disable");
                        $(ui.draggable).draggable("disable");
                        sound(pointAudio);
                        //  ----------- RIGHT POSITION ------------------
                        ui.draggable.css({ "left": "0px", "top": "0px" })
                        $(event.target).append(ui.draggable);

                        //  ----------- CHANGE THE BACKGROUND -----------
                        $(this).css("background", "#728C0B");
                        //  ---------------------------------------------

                        //  ------------------ SCORE --------------------
                        $(".score").show()
                            .animate({ top: '35px' }, "slow")
                            .animate({ bottom: '100px' }, "fast")
                            .hide(1000);
                        //  ---------------------------------------------

                        //  ----------- CHECKING THE PHASE --------------
                        _phase == 1 ? score += 35 : score += 17;
                        //  ---------------------------------------------
                    }

                    //  ----------- CHECKING THE SCORE --------------
                    if (score >= 90) {
                        feedbackGame.play();
                        // ------- UPDATE SCORE ---------------------
                        sendInfoUser(score, _phase);
                        scoreUpdate(score);

                        // ------- CREAT SCREEN VICTORY -------------
                        victory(_phase);
                        return;
                    } else {
                        // sound(pointAudio);
                        scoreUpdate(score);
                    };
                    //  --------------------------------------------
                },
                out: function (event, ui) {
                    $(this).css("background", "#F6FED5");
                }
                // ---------------------------------------------------------------------
            });
        });
    };


    // --------------------------------- UPDATE PROGRESS BAR ---------------------------------
    function scoreUpdate(_score) {
        $(".progressbar").progressbar({
            value: _score
        });
    };
    // ---------------------------------------------------------------------------------------
    // --------------------------------- VERIFY UNLOCK PHASE ---------------------------------
    function verifyUnlockPhase() {
        console.log(scorePlayer.phase)
        if (scorePlayer.phase == undefined) {
            $("main").html(selectPhase);
            $("#game-initial").append(`
              <img id="character-choice" src="./images/${characters[nameImage]}-cut.png">
             `);
            $("#block").hide();
        } else if (scorePlayer.phase == 1) {
            $("main").html(selectPhase);
            $("#game-initial").append(`
              <img id="character-choice" src="./images/${characters[nameImage]}-cut.png">
             `);
            $("#block").hide();
            $("#lock-2").hide();
        } else if (scorePlayer.phase == 2) {
            $("main").html(theEnd);
        }
    };
    // ---------------------------------------------------------------------------------------



    // --------------------------------- CREATE WIN SCREEN ---------------------------------
    function victory(_phase) {
        $("main").append(victoryScreen);
        $("#feedback-user").append(`
             <img id="character-feedback" src="../images/${characters[nameImage]}.png" />
        `);
        $("#character").hide(1000);

        //  ----------- NEXT PHASE -----------
        $("body").on("click", "#next", () => {
            score = 0;
            verifyUnlockPhase();
            countPage = 2;
        });
        //  ----------------------------------
    };
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE FIRST PAGE HTML - SELECT CHARACTER ---------------------------------
    $("main").on("click", "#start-game", () => {
        musicGame.play();
        musicGame.loop = true;
        dataUser();
        $("main").html(gameInitial);
        countPage = 1;
        $("#overlay-ranking").css("display", "none");
        $("#players-space").html("");
    });
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CHOICE CHARACTER ---------------------------------
    $("main").on("click", ".arrow-left", () => {
        if (nameImage == 0) {
            nameImage = 3;
        } else {
            nameImage--
        }
        $("#character-person").attr("src", `../images/${characters[nameImage]}.png`);
    })
    $("main").on("click", ".arrow-right", () => {
        if (nameImage == 3) {
            nameImage = 0;
        } else {
            nameImage++
        }
        $("#character-person").attr("src", `../images/${characters[nameImage]}.png`);
    })
    // ---------------------------------------------------------------------------------------------

    // --------------------------------- CREATE FIRST PAGE HTML - SELECT PHASE --------------------------
    $("main").on("click", "#button-initial", () => {
        $("main").html(selectPhase);
        scorePlayer.character = characters[nameImage];
        $("#game-initial").append(`
        <img id="character-choice" src="./images/${characters[nameImage]}-cut.png">
        `);
        if (scorePlayer.phase == 1) {
            $("#block").hide();
            $("#lock-2").hide();
        }
        countPage = 2;

    });
    // --------------------------------------------------------------------------------------------

    // ----------------------------------- CREATE FIRST PHASE -------------------------------------
    $("main").on("click", "#phase1", () => {
        $("main").html(phase1);
        $(".phase-1").append(`
        <img id="character" src="./images/${characters[nameImage]}.png" alt="">
        `)

        dragDropWords.setWordList = words;
        dragDropWords.setExtraLetter = 3;        //---------------------
        wordsSelected = dragDropWords.getWordListSelected(3);
        scoreUpdate(score);
        createDragLetter(wordsSelected[1], wordsSelected[0]);
        createWordList(wordsSelected[0]);
        createDropAndDrag(wordsSelected[0], 1);
        countPage = 3;
    });

    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE SECOND PHASE HTML ---------------------------------
    $("main").on("click", "#phase2", () => {
        $("main").html(phase2);
        scoreUpdate(score);

        dragDropWords.setWordList = animals;
        wordsSelected = dragDropWords.getWordListSelected()[0];

        createdAnimal(wordsSelected);
        createDropAndDrag(wordsSelected, 2);
        countPage = 4;
    });
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  BACK FUNCTION ----------------------------------
    $("main").on("click", ".back", () => {
        switch (countPage) {
            case 1:
                countPage = 0;
                $("main").html(pageInitial);
                break;
            case 2:
                countPage = 1;
                $("main").html(gameInitial);
                break;
            case 3:
                countPage = 2;
                verifyUnlockPhase();
                break;
            case 4:
                countPage = 2;
                verifyUnlockPhase();
                break;

        }
        score = 0;
        scoreUpdate(score);

        musicGame.pause();
        musicGame.currentTime = 0;
    });
    // -----------------------------------------------------------------------------------


    // ---------------------------------  AUDIO CONTROLS ----------------------------------

    // ---------------------------------  EFFECTS CONTROLS ----------------------------------
    $("#audio-effects").click(() => {
        if (music.muted) {
            music.muted = false;
            feedbackGame.muted = false;
            $("#audio-effects").attr("src", "./images/mute.png");
        } else {
            music.muted = true;
            feedbackGame.muted = true;
            $("#audio-effects").attr("src", "./images/muted.png");
        }
    });
    // -----------------------------------------------------------------------------------

    // ---------------------------------  MUSIC CONTROLS ----------------------------------
    $("#music-theme").click(() => {
        if (musicGame.muted) {
            musicGame.muted = false;
            $("#music-theme").attr("src", "./images/music.png");
        } else {
            musicGame.muted = true;
            $("#music-theme").attr("src", "./images/no-sound.png");
        }
    });
    // -----------------------------------------------------------------------------------

    // -------------------------------- AJAX ----------------------------------

    function sendInfoUser(_score, _phase) {
        scoreTotal += _score;
        scorePlayer.score = scoreTotal;
        scorePlayer.phase = _phase;

        $.post(("/score"), scorePlayer, (_data) => {
        });
    };

    // -------------------------------------------------------------------------

    // -------------------------------- AUDIO ----------------------------------
    function sound(_music) {
        music.src = _music;
        music.volume = 0.3;

        music.play();
    };
    // -------------------------------------------------------------------------

    // ----------------------------- SEARCH USER ------------------------------

    function dataUser() {
        let namePlayer = $("#name-user").val();

        if (namePlayer == "") {
            return
        } else {
            scorePlayer = {
                name: `${namePlayer}`
            };

            $.post(("/playersearch"), scorePlayer, (data) => {
                if (data != false) {
                    scorePlayer = data[0];

                };
            });
        };
    };
    // -------------------------------------------------------------------------

    // ----------- ranking -----------------
    $("main").on("click", "#ranking", () => {
        $("#overlay-ranking").css("display", "flex");

        $.get("/ranking", function (data) {

            data.forEach((playerUser) => {
                if (playerUser.name == "") {
                    playerUser.name = "Desconhecido"
                };
                $("#players-space").append(
                    ` <div>
                             <p>${playerUser.name}</p>
                             <p>${playerUser.score} .pts</p>
                     </div>`
                );
            });
        });

    });

    $("#close-overlay").on("click", () => {
        $("#overlay-ranking").css("display", "none");
        $("#players-space").html("");
    });

    // ----------------------------------

});

