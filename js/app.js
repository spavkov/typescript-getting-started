function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome!';
    var playerName = 'slobo';
    logPlayer(playerName);
}
function logPlayer(name) {
    console.log("New game starting for player: " + name);
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map