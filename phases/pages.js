export const phase1 = `
            <div class="phase-1">
            <p class="instruction">AJUDE A COMPLETAR A PALAVRA!</p>
            <div class="dashboard">
                <div id="letters-space">
                    <div class="letters">
                        <img class="letters-object drag vaca" src="./images/letter-V.png" alt="">
                    </div>
                    <div id="letters-middle">
                        <img class="letters-object ui-widget-content draggable drag abelha" src="./images/letter-A.png"
                            alt="">
                    </div>
                    <div class="letters">
                        <img class="letters-object drag navio" src="./images/letter-N.png" alt="">
                    </div>

                </div>
                <div id="words-space">
                </div>
            </div>
            <img class="back" src="./images/back.png" alt="">
            <img id="character" src="./images/character.png" alt="">
            <p class="score">+1</p>
            <div id="score-bar "> 
            <img id="coin" src="./images/coin-1.png" />
            <div class="progressbar"></div>
            </div>
            </div>
`

export const phase2 = `
    <div class="phase-2">
            <p class="instruction">AJUDE A ENCONTRAR O ANIMAL!</p>
            <div class="container">
                <div class="figures">
                    <div class="figures-animals">
                        <img class="drag pato" src="./images/pato-2.png" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag gato" src="./images/gato.png" style="width: 80%;" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag cachorro" src="./images/cachorro.png" />
                    </div>
                    <div class="figures-animals ">
                        <img class="drag coelho" src="./images/coelho.png" />
                    </div>
                    <div class="figures-animals ">
                        <img class="drag jacare" src="./images/jacare.png" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag sapo" src="./images/sapo2.png" />
                    </div>
                    <div class="figures-animals">
                        <img class="drag arara" src="./images/arara.png" />
                    </div>
                </div>
                <div class="space-animals">
                    <div id="space-one">
                        <div class="spaces">
                            <div class="drop-animal drop_pato"></div>
                            <p class="animal">PATO</p>
                        </div>
                        <div class="spaces">
                            <div class="drop-animal drop_cachorro"></div>
                            <p class="animal">CACHORRO</p>
                        </div>
                    </div>
                    <div id="space-two">
                        <div class="spaces">
                            <div class="drop-animal drop_sapo"></div>
                            <p class="animal">SAPO</p>
                        </div>
                        <div class="spaces">
                            <div class="drop-animal drop_arara"></div>
                            <p class="animal">ARARA</p>
                        </div>
                    </div>
                    <div id="space-three">
                        <div class="spaces">
                            <div class="drop-animal drop_jacare"></div>
                            <p class="animal">JACARÉ</p>
                        </div>
                        <div class="spaces">
                            <div class="drop-animal drop_gato"></div>
                            <p class="animal">GATO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="progressbar"></div>
            <img id="coin" src="./images/coin-1.png" />
            <img class="back" src="./images/back.png" alt="">
        </div>

`

export const victoryScreen = `
        <div id="feedback-user">
        <div id="result">
            <p>VITÓRIA!!!</p>
            <div id="stars">
                <img src="./images/star.png" width="80px" />
                <img src="./images/star.png" width="80px" />
                <img src="./images/star.png" width="80px" />
             </div>
            <button id="next">Próxima</button>
         </div>
        <img id="character-feedback" src="./images/character.png">
        </div>
`