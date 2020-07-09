// Un alert espone 5 numeri casuali (univoci).

$(document).ready(function(){
  var arrayUtente=[];
  var arrayPc =[];
  listaPc=document.getElementById("lista");
  listaUtente=document.getElementById("listaUtente")
  while (arrayPc.length < 5) {
    var num = randomNum(1,100);
    if (!(insideCheck(arrayPc,num))) {
      arrayPc.push(num);
      listaPc.innerHTML += "<li>" + num + "</li>"
    }
  }

  // Poi parte un timer di 30 secondi.
  setTimeout(function () {
    $("#lista").addClass("hidden")
  }, 3000);

  // Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
  setTimeout(function(){
    while (arrayUtente.length < 5) {
      var numUtente = 0;
      numUtente = parseInt(prompt("inserisci un numero"));
      while (isNaN(numUtente)) {
        numUtente = parseInt(prompt("dato non valido"));
      }
      if (!(insideCheck(arrayUtente,numUtente))) {
        arrayUtente.push(numUtente);
        listaUtente.innerHTML += "<li>" + numUtente + "</li>"
      } else {
        numUtente = parseInt(prompt("numero gia presente"));
      }
    }
    // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
    var punteggio=0;
    var indovinati=[];
    for (var i = 0; i < arrayUtente.length; i++) {
      if (insideCheck(arrayPc,arrayUtente[i])) {
        punteggio++
        indovinati.push(arrayUtente[i])
      }
    }
    $("#result").text("Hai ricordato " + punteggio + " numeri " + indovinati )
    $("#lista").removeClass("hidden")
  },3500);


});






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
