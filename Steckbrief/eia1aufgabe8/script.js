var Reihenfolge = [1, 1, 1, 3, 2, 3, 1, 2, 1];
var i = 0;
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
                    Reihenfolge.push(1);
                }
                playSample('assets/hihat.mp3');
                break;
            case 2:
                if (recMode == true) {
                    Reihenfolge.push(2);
                }
                playSample('assets/kick.mp3');
                break;
            case 3:
                if (recMode == true) {
                    Reihenfolge.push(3);
                }
                playSample('assets/snare.mp3');
                break;
            case 4:
                if (recMode == true) {
                    Reihenfolge.push(4);
                }
                playSample('assets/A.mp3');
                break;
            case 5:
                if (recMode == true) {
                    Reihenfolge.push(5);
                }
                playSample('assets/C.mp3');
                break;
            case 6:
                if (recMode == true) {
                    Reihenfolge.push(6);
                }
                playSample('assets/F.mp3');
                break;
            case 7:
                if (recMode == true) {
                    Reihenfolge.push(7);
                }
                playSample('assets/G.mp3');
                break;
            case 8:
                if (recMode == true) {
                    Reihenfolge.push(8);
                }
                playSample('assets/laugh-1.mp3');
                break;
            case 9:
                if (recMode == true) {
                    Reihenfolge.push(9);
                }
                playSample('assets/laugh-2.mp3');
                break;
        }
    }
    function drummachine() {
        i = 0;
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
        }
        else {
            recMode = false;
            document.getElementById('rec').style.color = 'white';
        }
    }
    function playSample(mp3) {
        var sound = new Audio(mp3);
        sound.play();
    }
};
//# sourceMappingURL=script.js.map