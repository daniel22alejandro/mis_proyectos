let boxPlus = document.getElementById("boxPlus")
let boxMinus = document.getElementById("boxMinus")
let boxUnidades = document.getElementById("boxUnidades")
let subTotal = document.getElementById("subTotal")
const valorUnidad = 85000
const valorUnidadStr = Intl.NumberFormat("de-De").format(valorUnidad)
document.getElementById("precioUnidad").innerHTML = "$" + valorUnidadStr

boxPlus.addEventListener("click", function() {
    let auxUnidades = parseInt(boxUnidades.innerHTML)
    if (auxUnidades < 10 ) {
        boxUnidades.innerHTML = (auxUnidades + 1).toString()
        let valorsubTotal = parseInt(boxUnidades.innerHTML) * valorUnidad
        subTotal.innerHTML = Intl.NumberFormat("de-De").format (valorsubTotal)
        if (boxUnidades.innerHTML == 1) {
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " Producto"
        }
        else {
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " Productos"
        }

    }
})
boxMinus.addEventListener("click", function() {
    let auxUnidades = parseInt(boxUnidades.innerHTML)
    if (auxUnidades > 0 ) {
        boxUnidades.innerHTML = (auxUnidades - 1).toString()
        let valorsubTotal = parseInt(boxUnidades.innerHTML) * valorUnidad
        subTotal.innerHTML = Intl.NumberFormat("de-De").format (valorsubTotal)


        if (boxUnidades.innerHTML == 1) {
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " Producto"
        }
        else {
            document.getElementById("cantProductos").innerHTML = boxUnidades.innerHTML + " Productos"
        }

    }
})

