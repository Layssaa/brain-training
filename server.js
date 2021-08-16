const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const { resolve } = require('path');
const PORT = 80;


let playersList;
let user = {}
let dataUser = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res, next) => {

    const options = {
        root: path.join(__dirname + '/public/')
    };

    res.sendFile('index.html', options, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
            next();
        }
    });
});

app.post("/playersearch", (req, res) => {
    user.name = req.body.name;
    fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
        if (err) throw err; // retirar : usar try-catch
        verifyUser(data);
    });

    function verifyUser(_data) {
        dataUser = JSON.parse(_data);
        userData = dataUser.filter((player) => { return player.name == user.name; });
        if (userData.length == 0) { userData = false };
        res.send(userData);
    }
})

app.post("/score", (req, res) => {
    const playerData = {
        name: req.body.name,
        score: req.body.score,
        phase: req.body.phase
    }

    new Promise((resolve, reject) => {

        fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
            if (err) {
                reject();
            } else {
                playersList = JSON.parse(data);
                let userListJSONPosition = 0;

                for (u in playersList) {
                    if (playersList[u].name == playerData.name) {
                        playersList[u].score = playerData.score;
                        playersList[u].phase = playerData.phase;
                        resolve(playersList)
                        break;
                    }
                    userListJSONPosition++
                };

                if (userListJSONPosition == playersList.length) {
                    playerData.id = playersList[playersList.length - 1].id + 1;
                    playersList.push(playerData);
                    resolve(playersList)
                }
            }
        })

    }).then((_data) => {
        fs.writeFile('./data/players-data.json', JSON.stringify(_data), (err) => {
            if (err) {
                reject();
            } else {
                res.send({ "SCORE": "OK" });
            }
        })
    }).catch(() => {
        res.send({ "ERRO": "NÃO FOI POSSIVEL SALVAR O SCORE" })
    })
});

app.get('/ranking', (req, res) => {
    let ranking;
    fs.readFile('./data/players-data.json', 'utf-8', (err, data) => {
        if (err) throw err;
        ranking = JSON.parse(data);
        ranking.sort((a, b) => parseInt(a["score"]) > parseInt(b["score"]) ? -1 : 1);
        res.send(ranking.slice(0, 5));
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});




