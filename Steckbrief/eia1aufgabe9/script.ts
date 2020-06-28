
var myNodelist:HTMLCollection = document.getElementsByTagName("LI");
var i:number;
var count:number;

window.onload = function () {
count = document.querySelector('ul').childElementCount;
document.getElementById("counter").innerHTML= String(count);

document.getElementById("addBtn").addEventListener("click",newElement);
for (i = 0; i < myNodelist.length; i++) {
  var icon:HTMLElement = document.createElement("i");
  icon.className = "far fa-trash-alt close";
  myNodelist[i].appendChild(icon);
}

// Löschen
var closetodo:HTMLCollection = document.getElementsByClassName("close");
var i:number;
for (i = 0; i < closetodo.length; i++) {
    (closetodo[i] as HTMLElement).onclick = function() {
    var div:HTMLElement = (this as HTMLElement).parentElement;
    div.style.display = "none";
    count--;
    document.getElementById("counter").innerHTML= String(count);
  }
}

//Erledigt Haken
var list:HTMLElement = document.getElementById('myUL') as HTMLElement;
list.addEventListener('click', function(ev) {
  if ((ev.target as HTMLTextAreaElement).tagName === 'LI') {
    (ev.target as HTMLTextAreaElement).classList.toggle('checked');
  }
}, false);

// Add Button Funktion
function newElement() {
  var li:HTMLElement = document.createElement("li");
  var inputValue:string = (<HTMLInputElement>document.getElementById("myInput")).value;
  var t:Text = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Kein ToDo eingetragen");
  } else {
    document.getElementById("myUL").appendChild(li);
    count++;
    document.getElementById("counter").innerHTML= String(count);
  }
  (<HTMLInputElement>document.getElementById("myInput")).value = "";

  var icon:HTMLElement = document.createElement("i");
  icon.className = "far fa-trash-alt close";
  li.appendChild(icon);

  for (i = 0; i < closetodo.length; i++) {
    (closetodo[i] as HTMLElement).onclick = function() {
      var div:HTMLElement = (this as HTMLElement).parentElement;
      div.style.display = "none";
      count--;
      document.getElementById("counter").innerHTML= String(count);
    }
  }
} 
}