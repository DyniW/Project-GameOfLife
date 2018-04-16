/* Projet - Le code du stagiaire 
~ Lisez le README.md pour plus d'informations ~
*/

import gameServer from './gameServer'

const seedURL = './seeds/seed1.seed'
const updateTime = 1000

gameServer.onMessage = (message) => {
    const messageData = message.data
        /* 
           Je comprends pas trop ce que je reçois ici quand 
           le serveur m'envoie des infos ?! 
           Ça ressemble à un objet JS mais je peux rien 
           faire avec... NUL
        */
    // console.log('LA DATA', messageData)
    document.getElementById('grid').innerHTML = " ";
    var grid = JSON.parse(messageData);

    for(var i = 0; i < grid.width; i++)
    {
        for(var j = 0; j < grid.height;j++)
        {
            if(grid.cells[i][j]['alive'])
            {
                document.getElementById('grid').innerHTML += 1;
            }
            else
            {
                document.getElementById('grid').innerHTML += 0;
            }
        }

        document.getElementById('grid').innerHTML += '\n';
    }

    console.log(JSON.parse(messageData));
}

gameServer
    .loadSeed(seedURL)
    .then((seed) => {
        /* 
           Je reçois bien une seed ici !
        */
        gameServer.init(seed) // On m'a dit d'utiliser ça mais ça retourne RIEN
    })
    .catch((error) => {
        console.error(error)
    })

const interval = setInterval(() => {
    gameServer.next()
}, updateTime)
