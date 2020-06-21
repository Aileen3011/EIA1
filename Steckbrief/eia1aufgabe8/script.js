var soundA = new Audio('assets/A.mp3');
var soundC = new Audio('assets/C.mp3');
var soundF = new Audio('assets/F.mp3');
var soundG = new Audio('assets/G.mp3');
var soundhihat = new Audio('assets/hihat.mp3');
var soundkick = new Audio('assets/kick.mp3');
var soundlaugh1 = new Audio('assets/laugh-1.mp3');
var soundlaugh2 = new Audio('assets/laugh-2.mp3');
var soundsnare = new Audio('assets/snare.mp3');
var Reihenfolge = [1, 1, 1, 3, 2, 3, 1, 2, 1];
var i = 0;
var newBeat = 0;
var myvar;
var wahl = 0;
var recMode = false;
window.onload = function () {
    document.getElementById('pause').style.display = 'none';
    document.getElementById('top-left').addEventListener("click", function () {
        sound(1);
    });
    document.getElementById('top-middle').addEventListener("click", function () {
        sound(2);
    });
    document.getElementById('top-right').addEventListener("click", function () {
        sound(3);
    });
    document.getElementById('middle-left').addEventListener("click", function () {
        sound(4);
    });
    document.getElementById('middle-middle').addEventListener("click", function () {
        sound(5);
    });
    document.getElementById('middle-right').addEventListener("click", function () {
        sound(6);
    });
    document.getElementById('bottom-left').addEventListener("click", function () {
        sound(7);
    });
    document.getElementById('bottom-middle').addEventListener("click", function () {
        sound(8);
    });
    document.getElementById('bottom-right').addEventListener("click", function () {
        sound(9);
    });
    document.getElementById('play').addEventListener("click", function () {
        drummachine();
    });
    document.getElementById('pause').addEventListener("click", function () {
        pause();
    });
    document.getElementById('del').addEventListener("click", function () {
        del();
    });
    document.getElementById('rec').addEventListener("click", function () {
        rec();
    });
    function sound(wahl) {
        if (Reihenfolge.length == i) {
            i = 0;
        }
        switch (wahl) {
            case 1:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundhihat.play();
                break;
            case 2:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundkick.play();
                break;
            case 3:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundsnare.play();
                break;
            case 4:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundA.play();
                break;
            case 5:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundC.play();
                break;
            case 6:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundF.play();
                break;
            case 7:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundG.play();
                break;
            case 8:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundlaugh1.play();
                break;
            case 9:
                if (recMode == true) {
                    Reihenfolge[newBeat] = wahl;
                    newBeat++;
                }
                soundlaugh2.play();
                break;
        }
    }
    function drummachine() {
        document.getElementById("play").style.display = 'none';
        document.getElementById('pause').style.display = 'block';
        myvar = setInterval(function () {
            sound(Reihenfolge[i]);
            i++;
        }, 500);
    }
    function pause() {
        document.getElementById("play").style.display = 'block';
        document.getElementById('pause').style.display = 'none';
        clearInterval(myvar);
    }
    function del() {
        Reihenfolge = [];
        window.alert("Beat gelöscht");
    }
    function rec() {
        if (recMode == false) {
            document.getElementById('rec').style.color = 'red';
            recMode = true;
            Reihenfolge = [];
            newBeat = 0;
        }
        else {
            recMode = false;
            document.getElementById('rec').style.color = 'white';
        }
    }
};
//# sourceMappingURL=script.js.map