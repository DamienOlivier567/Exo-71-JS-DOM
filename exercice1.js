let monDiv = document.createElement('div');
monDiv.innerHTML = "Ce div a ete ajoute en utilisant Javascript"

let secondDiv = document.createElement('div')
document.getElementById('viewport').appendChild(monDiv).prepend(secondDiv);
secondDiv.style.backgroundColor = "red";
secondDiv.style.width = "100px";
secondDiv.style.height = "100px";

let deleate = document.getElementById('aSupprimer');
deleate.remove(deleate);








