let boxProductos = document.getElementById("boxProductos")


// contenedor para productos individuales
let boxProducto = document.createElement("div")
boxProductos.appendChild(boxProducto)
boxProducto.setAttribute("class", "box-producto")


// contenedor para la imagen
let boxImagen = document.createElement("div")
boxProducto.appendChild(boxImagen)
boxImagen.setAttribute("class", "box-imagen")
let imagenProducto = document.createElement("img")
boxImagen.appendChild(imagenProducto)
imagenProducto.setAttribute("src", "img/Ducati_multiestrada.webp")
imagenProducto.setAttribute("class", "imagen-producto")



// contenedor para la informacion
let infoProducto = document.createElement("div")
boxProducto.appendChild(infoProducto)
infoProducto.setAttribute("class", "box-info-producto")



let marcaProducto = document.createElement("label")
infoProducto.appendChild(marcaProducto)
let nodoMarcaProducto = document.createTextNode("Ducati Multistrada V4")
marcaProducto.appendChild(nodoMarcaProducto)