class Automovil {
    constructor (marca, modelo, precio, anio, kilometros, ciudad, imagen){
        this.marca = marca; 
        this.modelo = modelo; 
        this.precio = precio; 
        this.anio = anio; 
        this.kilometros = kilometros; 
        this.ciudad = ciudad;
        this.imagen = imagen;  
    } 
}

let auto1 = new Automovil("Ducati", "Multistrada V4", "$180.000.000", "2022", "4.302 km", "Medellin - Antioquia", "img/Ducati_multiestrada.webp");
let auto2 = new Automovil("Beneli", "Trk 502x 2023", "$31.400.000", "2023", "8.512 km", "Envigado - Antioquia", "img/Benelli-Trk-502x-2023.webp");
let auto3 = new Automovil("Kawazaki", "Zh2", "$124.990.000", "2023", "0 km", "Usaquen - Bogota D.C.", "img/Kawasaki-Zh2.webp");
let auto4 = new Automovil("BMW", "S1000rr", "$145.000.000", "2023", "1.800 km", "Medellin - Antioquia", "img/Bmw-S1000rr.webp");





let boxProductos = document.getElementById("boxProductos")


cargarAutomovil(auto1)
cargarAutomovil(auto2)
cargarAutomovil(auto3)
cargarAutomovil(auto4)




function cargarAutomovil(auto){


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
imagenProducto.setAttribute("src", auto.imagen)
imagenProducto.setAttribute("class", "imagen-producto")



// contenedor para la informacion
let infoProducto = document.createElement("div")
boxProducto.appendChild(infoProducto)
infoProducto.setAttribute("class", "box-info-producto")



let marcaProducto = document.createElement("label")
infoProducto.appendChild(marcaProducto)
let nodoMarcaProducto = document.createTextNode(auto.marca)
marcaProducto.appendChild(nodoMarcaProducto)
marcaProducto.setAttribute("class", "marca-producto")


let modeloProducto = document.createElement("label")
infoProducto.appendChild(modeloProducto)
let nodoModeloProducto = document.createTextNode(auto.modelo)
modeloProducto.appendChild(nodoModeloProducto)
modeloProducto.setAttribute("class", "modelo-producto")


let precioProducto = document.createElement("label")
infoProducto.appendChild(precioProducto)
let nodoPrecioProducto = document.createTextNode(auto.precio)
precioProducto.appendChild(nodoPrecioProducto)
precioProducto.setAttribute("class", "precio-producto")


let anioProducto = document.createElement("label")
infoProducto.appendChild(anioProducto)
let nodoAnioProducto = document.createTextNode(auto.anio + " · ")
anioProducto.appendChild(nodoAnioProducto)
anioProducto.setAttribute("class", "anio-producto")

let kiloProducto = document.createElement("label")
infoProducto.appendChild(kiloProducto)
let nodoKiloProducto = document.createTextNode(auto.kilometros + " · ")
kiloProducto.appendChild(nodoKiloProducto)
kiloProducto.setAttribute("class", "kilo-producto")


let ciudProducto = document.createElement("label")
infoProducto.appendChild(ciudProducto)
let nodoCiudProducto = document.createTextNode(auto.ciudad)
ciudProducto.appendChild(nodoCiudProducto)
ciudProducto.setAttribute("class", "ciud-producto")


}