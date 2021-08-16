import { DragDropClass } from './letter-script-class.js'
import { createWordList, createDragLetter } from './letter-script.js'
import { pageInitial, gameInitial, selectPhase, phase1, phase2, victoryScreen,  } from './pages.js'

const dragDropWords = new DragDropClass;
let wordsSelected;

const words = ["abelha", "navio", "vaca"];
const animals = ["pato", "sapo", "jacare", "cachorro", "arara", "gato","coelho"];

const musicGame = new Audio("./music/theme-music.mp3");
const feedbackGame = new Audio("./music/feedback-game.mp3");
const pointAudio = "./music/points-audio.mp3";

const music = new Audio();
musicGame.play()

let score = 0;
let scorePlayer = {};

$(document).ready(() => {

    // --------------------------------- CREATE DRAG & DROP ---------------------------------
    function createDropAndDrag(_arrayWords, _phase) {

        // --------------------------------- DRAG ---------------------------------
        $(".drag").draggable({
            cursor: "grabbing",
            revert: "invalid",
            snap: ".drop",
            snapMode: "inner",
            snapTolerance: 40,
            tolerance: "touch"
        });

        _arrayWords.forEach((elements) => {
            // --------------------------------- DROP ---------------------------------
            $(`.drop_${elements}`).droppable({
                accept: `.${elements}`,
                // ----------- EVENT DURING DRAG -----------
                activate: function (event, ui) {
                },
                // ----------- EVENT THAT OCCURS WHEN THE DRAG IS RELEASED -----------
                drop: function (event, ui) {

                    //  ----------- RIGHT POSITION ------------------
                    ui.draggable.css({ "left": "0px", "top": "0px" })
                    $(event.target).append(ui.draggable)
                    //  ---------------------------------------------

                    //  ----------- CHANGE THE BACKGROUND -----------
                    $(this).css("background", "#728C0B");
                    //  ---------------------------------------------

                    //  ----------- SCORE ---------------------------
                    $(".score").show()
                        .animate({ top: '35px' }, "slow")
                        .animate({ bottom: '100px' }, "fast")
                        .hide(1000);
                    //  ---------------------------------------------

                    //  ----------- CHECKING THE PHASE --------------
                    _phase == 1 ? score += 30 : score += 15;
                    //  ---------------------------------------------

                    //  ----------- CHECKING THE SCORE --------------
                    if (score >= 90) {
                        score = 100;
                        feedbackGame.play();
                        // ------- UPDATE SCORE ---------------------
                        sendInfoUser(score, _phase);
                        scoreUpdate(score);

                        // ------- CREAT SCREEN VICTORY -------------
                        victory(_phase);
                        return;
                    } else {
                        sound(pointAudio);
                        scoreUpdate(score);
                    };
                    //  --------------------------------------------
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


    // --------------------------------- CREATE WIN SCREEN ---------------------------------
    function victory(_phase) {
        $("body").append(victoryScreen);
        $("#character").hide(1000);

        //  ----------- NEXT PHASE -----------
        $("body").on("click", "#next", () => {
            score = 0;
            $(`.phase-${Number(_phase)}`).hide();
            $("#feedback-user").hide();
            _phase == 1 ? createSecondPhase() : createThirdPhase();
        });
        //  ----------------------------------
    };
    // ---------------------------------------------------------------------------------------------


    // ---------------------------------  CREATE SECOND PHASE HTML ---------------------------------
    function createSecondPhase() {
        $("main").html(phase2);
        scoreUpdate(score);

        dragDropWords.setWordList = animals;
        wordsSelected = dragDropWords.getWordListSelected()[0];

        createDropAndDrag(wordsSelected, 2);
    };
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  CREATE FIRST PHASE HTML ---------------------------------
    $("main").on("click", "#start-game", () => {

        dataUser();
        $("main").html(phase1);
        musicGame.play();
        musicGame.loop = true;

        dragDropWords.setWordList = words;
        //dragDropWords.setExtraLetter = 3;        
        wordsSelected = dragDropWords.getWordListSelected();

        scoreUpdate(score);
        createDragLetter(wordsSelected[1]);
        createWordList(wordsSelected[0]);
        createDropAndDrag(wordsSelected[0], 1);
    });
    // ---------------------------------------------------------------------------------------------

    // ---------------------------------  BACK FUNCTION ----------------------------------
    $("main").on("click", ".back", () => {
        $("main").html(pageInitial);
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
        scorePlayer.score = _score;
        scorePlayer.phase = _phase;
      
        $.post(("/score"), scorePlayer, (_data) => {
        });
    };

    // -------------------------------------------------------------------------

    // -------------------------------- AUDIO ----------------------------------
    function sound(_music) {
        music.src = _music;
        music.play();
    };
    // -------------------------------------------------------------------------

    function dataUser(){
        scorePlayer = {
            name: `${$("#name-user").val()}`
        }
        console.log(scorePlayer.name);
        $.post(("/playersearch"), scorePlayer, (data) => {
            if (data != false) {
                scorePlayer = data;
            }
        });
    };

});

