$(document).ready(function(){

/* Création du chronomètre */
var Chrono = function Chrono(currentTime) {
    this.time = currentTime;
    this.start = function(){
    start();
    };
    this.pause = function(){
    pause();
    };
    this.stop = function(){
    stop();
    };
};
var Chronometre = new Chrono(-1);

/* Paramétrage des bouttons */
var counter;
$("#start").click(function(){
    counter = setInterval(trotting, 1000);
    Chronometre.start();
})
$("#pause").click(function(){
    Chronometre.pause();
})
$("#stop").click(function(){
    Chronometre.stop();
})

/* La trotteuse*/
function trotting(){
    Chronometre.time +=1
    var hour = Math.floor(Chronometre.time /3600);
    var minute = Math.floor((Chronometre.time - hour*3600)/60);
    var seconds = Chronometre.time - (hour*3600 + minute*60);
        if (seconds<10) {
            seconds = "0" + seconds;
        }
        if (minute<10) {
            minute = "0" + minute;
        }
        if (hour<10) {
            hour = "0" + hour;
        }
    $("#trotting_chrono").html(hour + ":" + minute + ":" + seconds);
}

/* Fonction pause*/
function pause (){
    clearInterval(counter);
}

/* Fonction stop */
function stop(){
    clearInterval(counter);
    $("#trotting_chrono").html("00:00:00");
    Chronometre.time = -1;
}


});
