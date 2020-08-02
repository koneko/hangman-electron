const newGame = function() {
    var contentMenu = document.getElementById("contentMenu");
    var contentGame = document.getElementById("contentGame");
    contentMenu.style.display= 'none';
    contentGame.style.display = 'flex'
    resetHangmanSvg();
}

const resetHangmanSvg = function() {
    var svgHead = document.getElementById("svgHead");
    var svgTorso = document.getElementById("svgTorso");
    var svgLeftArm = document.getElementById("svgLeftArm");
    var svgRightArm = document.getElementById("svgRightArm");
    var svgLeftLeg = document.getElementById("svgLeftLeg");
    var svgRightLeg = document.getElementById("svgRightLeg");

    svgHead.style.display = 'none';
    svgTorso.style.display = 'none';
    svgLeftArm.style.display = 'none';
    svgRightArm.style.display = 'none';
    svgLeftLeg.style.display = 'none';
    svgRightLeg.style.display = 'none';
}


const quitGame = function() {
    window.close();
}