// 1) L'utilisateur dévérouille l'écran
document.getElementById("lockscreen").addEventListener('click', function () {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("accueil").style.display = "block";
    const bonjour = new Audio('bonjour.mp3');
    setTimeout(function () {
        bonjour.play();
        setTimeout(lireMessage, 13000);
    }, 1000);
});

function lireMessage(){
    setTimeout(function () {
        document.getElementById("accueil").style.opacity = "0.1";
        document.getElementById("message").style.display = "block";
        document.getElementById("accueil").src = "accueil-bis.png";
        const audio = new Audio('message.mp3');
        setTimeout(function () {
            audio.play();
        }, 1000);
    }, 2000);
}


// 2bis) Disparition du message de Léa
document.getElementById("message").addEventListener('click', function () {
    document.getElementById("accueil").style.opacity = "1";
    document.getElementById("message").style.display = "none";
    document.getElementById("accueil").style.pointerEvents = "visible";
});

// 3) Apparition de la conversation
document.getElementById("accueil").addEventListener('click', function () {
    document.getElementById("accueil").style.opacity = "0.1";
    document.getElementById("conversation").style.display = "block";
    const audio = new Audio('conversation.mp3');
    setTimeout(function () {
        audio.play();
        setTimeout(function (){
            document.getElementById("accueil").style.opacity = "1";
            document.getElementById("conversation").style.display = "none";
        }, 36000);
    }, 1000);
});



