let inputBusqueda = document.getElementById("inputBusqueda")
let btnGraficar = document.getElementById("btnGraficar")

let BoxEstrella1 = document.createElement("i")
let BoxEstrella2 = document.createElement("i")
let BoxEstrella3 = document.createElement("i")
let BoxEstrella4 = document.createElement("i")
let BoxEstrella5 = document.createElement("i")

windo.addEventListener("load", function() {
    boxExtrellas.appenChild(boxExtrella1)
    boxExtrellas.appenChild(boxExtrella2)
    boxExtrellas.appenChild(boxExtrella3)
    boxExtrellas.appenChild(boxExtrella4)
    boxExtrellas.appenChild(boxExtrella5)
})


btnGraficar.addEventListener("click" , function () {
    let calificacion = parseInt (inputBusqueda.value) 
    if (califiacion >= 0 && calificacion <= 0.2) {
        boxExtrella1.setAtribute("class", "fa-solid fa-start")
        boxExtrella2.setAtribute("class", "fa-solid fa-start")
        boxExtrella3.setAtribute("class", "fa-solid fa-start")
        boxExtrella4.setAtribute("class", "fa-solid fa-start")
        boxExtrella5.setAtribute("class", "fa-solid fa-start")
    }
})