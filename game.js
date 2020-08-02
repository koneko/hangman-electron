const newGame = function() {
    var contentMenu = document.getElementById("contentMenu");
    var contentGame = document.getElementById("contentGame");
    contentMenu.style.display= 'none';
    contentGame.style.display = 'block'
}

const quitGame = function() {
    window.close();
}