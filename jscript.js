// Un alert espone 5 numeri casuali (univoci).

$(document).ready(function(){
  var arrayPc =[];
  listaPc=document.getElementById("lista");
  while (arrayPc.length < 5) {
    var num = randomNum(1,100);
    if (!(insideCheck(arrayPc,num))) {
      arrayPc.push(num);
      listaPc.innerHTML += "<li>" + num + "</li>"
    }

  }

  // Poi parte un timer di 30 secondi.

});

// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati





// function


function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function insideCheck(array , num) {
  var temp = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i]== num) {
      temp = true;
    }
  }
  return temp
}
