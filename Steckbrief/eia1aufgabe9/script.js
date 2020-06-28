var myNodelist = document.getElementsByTagName("LI");
var i;
var count;
window.onload = function () {
    count = document.querySelector('ul').childElementCount;
    document.getElementById("counter").innerHTML = String(count);
    document.getElementById("addBtn").addEventListener("click", newElement);
    for (i = 0; i < myNodelist.length; i++) {
        var icon = document.createElement("i");
        icon.className = "far fa-trash-alt close";
        myNodelist[i].appendChild(icon);
    }
    // Löschen
    var closetodo = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < closetodo.length; i++) {
        closetodo[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
            count--;
            document.getElementById("counter").innerHTML = String(count);
        };
    }
    //Erledigt Haken
    var list = document.getElementById('myUL');
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
    // Add Button Funktion
    function newElement() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("Kein ToDo eingetragen");
        }
        else {
            document.getElementById("myUL").appendChild(li);
            count++;
            document.getElementById("counter").innerHTML = String(count);
        }
        document.getElementById("myInput").value = "";
        var icon = document.createElement("i");
        icon.className = "far fa-trash-alt close";
        li.appendChild(icon);
        for (i = 0; i < closetodo.length; i++) {
            closetodo[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
                count--;
                document.getElementById("counter").innerHTML = String(count);
            };
        }
    }
};
//# sourceMappingURL=script.js.map