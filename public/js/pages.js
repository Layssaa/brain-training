export const pageInitial = `
            <div id="home-page">
            <div id="title">
                <img src="./images/brain-training-title.svg" />
            </div>
            <input id="name-user" type="text" placeholder="Nome">
            <button id="start-game">JOGAR</button>
            <img width="80px" id="ranking" src="./images/ranking.png" />
            </div>
`

export const phase1 = `
            <div class="phase-1">
            <p class="instruction">AJUDE A COMPLETAR A PALAVRA!</p>
            <div class="dashboard">
                <div id="letters-space">
                 
                </div>
                <div id="words-space">
                </div>
            </div>
            <img class="back" src="./images/back.png" alt="">
            
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
                </div>
                <div class="space-animals">
                    <div id="space-one">
                        <div class="spaces">
                            <div element="pato" class="drop-animal drop_pato"></div>
                            <p class="animal">PATO</p>
                        </div>
                        <div class="spaces">
                            <div element="cachorro" class="drop-animal drop_cachorro"></div>
                            <p class="animal">CACHORRO</p>
                        </div>
                    </div>
                    <div id="space-two">
                        <div class="spaces">
                            <div element="sapo" class="drop-animal drop_sapo"></div>
                            <p class="animal">SAPO</p>
                        </div>
                        <div class="spaces">
                            <div element="arara" class="drop-animal drop_arara"></div>
                            <p class="animal">ARARA</p>
                        </div>
                    </div>
                    <div id="space-three">
                        <div class="spaces">
                            <div element="jacare" class="drop-animal drop_jacare"></div>
                            <p class="animal">JACARÉ</p>
                        </div>
                        <div class="spaces">
                            <div element="gato" class="drop-animal drop_gato"></div>
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
       
        </div>
`

export const selectPhase = `
        <div id="game-initial">
        <p class="instruction-select-phase">SELECIONE A FASE</p>
        <div class="dashboard">
            <div class="select-phase">
                <div id="phase1" class="phase">
                    <div class="select-phase-stars" >
                        <div id="icone-star1-phase1" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star2-phase1" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star3-phase1" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                    </div>
                    <div id="icone-padlock-phase1" class="select-phase-padlock">
                    </div>
                </div>

                <div id="phase2" class="phase">
                    <div class="select-phase-stars">
                        <div id="icone-star1-phase2" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star2-phase2" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star3-phase2" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                    </div>
                    <div id="icone-lock-phase2" class="select-phase-lock">
                        <img id="lock-2" class="icone-lock" src="./images/padlock.png" alt="">
                    </div>
                </div>

                <!--<div id="phase3" class="phase">
                    <div class="select-phase-stars">
                        <div id="icone-star1-phase3" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star2-phase3" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                        <div id="icone-star3-phase3" hidden><img class="icone-star" src="./images/star.png" alt="">
                        </div>
                    </div>
                    <div id="icone-lock-phase3" class="select-phase-lock">
                        <img class="icone-lock" src="./images/padlock.png" alt="">
                    </div>
                </div>-->
            </div>
            <img class="back" src="./images/back.png" alt="">
        </div>
        <img id="template" width="350px" src="./images/template-screen-phase.png" >
        </div>
        <div id="block"><div>
        `
export const gameInitial = `
    <div id="game-initial">
            <p class="instruction">ESCOLHA UM AJUDANTE</p>
            <div class="dashboard">
                <div class="arrow">
                    <img class="arrow-left" src="./images/arrow-left.png" alt="">
                </div>
                <div id="character-select-img">
                    <img id="character-person" src="./images/character.png" alt="">
                </div>
                <div class="arrow">
                    <img class="arrow-right" src="./images/arrow-right.png" alt="">
                </div>
            </div>
            </div>
            <img class="back" src="./images/back.png" alt="">
            <div id="button-initial"><span>INICIAR</span></div>
        </div>
    `

export const theEnd = `
        <div id="the-end">
            <img src="./images/THE-END.svg" />
            <div>
                <p>Copyright Layssa & Pedro - 2021</p>
                <img id="copyright-img" src="./images/copyright.png" />
            </div>
        </div>
`