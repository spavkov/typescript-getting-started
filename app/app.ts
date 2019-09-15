function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome!';
    let playerName: string = 'slobo'
    logPlayer(playerName);
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame').addEventListener('click', startGame);