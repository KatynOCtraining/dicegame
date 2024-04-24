// Sélectionne les deux dés par leur ID
var cube1 = document.getElementById("cube1");
var cube2 = document.getElementById("cube2");

var min = 1;
var max = 8; // Réduire la plage pour des rotations plus importantes

// Ajoute un événement onclick pour le premier dé
cube1.onclick = function () {
  rollDice(cube1);
};

// Ajoute un événement onclick pour le deuxième dé
cube2.onclick = function () {
  rollDice(cube2);
};

function rollDice(cube) {
  var xRand = getRandom(max, min);
  var yRand = getRandom(max, min);

  cube.style.webkitTransform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  cube.style.transform =
    "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg) translateZ(100px)";
}

function getRandom(max, min) {
  return (Math.floor(Math.random() * (max - min)) + min) * 90;
}

function ajouterTexte(numFace) {
  var texte = document.getElementById("faceText" + numFace).value;
  var face = document.getElementById("face" + numFace);
  face.textContent = texte;
}
// Récupérez la modale
var modal = document.getElementById("myModal");

// Récupérez l'élément <span> qui ferme la modale
var span = document.getElementsByClassName("close")[0];

// Lorsque la page est chargée, ouvrez la modale
window.onload = function () {
  modal.style.display = "block";
};

// Lorsque l'utilisateur clique sur <span> (x), fermez la modale
span.onclick = function () {
  modal.style.display = "none";
};

// Lorsque l'utilisateur clique en dehors de la modale, fermez-la
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
