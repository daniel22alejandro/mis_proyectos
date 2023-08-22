let iceGreen = document.getElementById("iceGreen")
let iceRose = document.getElementById("iceRose")
let icePink = document.getElementById("icePink")
let mainCircle = document.getElementById("mainCircle")

iceGreen.addEventListener("mouseover", function(){
    mainCircle.classList.add("main-circle-green")
    mainCircle.classList.remove("main-circle-rose")
    mainCircle.classList.remove("main-circle-pink")
})

iceRose.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green")
    mainCircle.classList.add("main-circle-rose")
    mainCircle.classList.remove("main-circle-pink")
})

icePink.addEventListener("mouseover", function(){
    mainCircle.classList.remove("main-circle-green")
    mainCircle.classList.remove("main-circle-rose")
    mainCircle.classList.add("main-circle-pink")
})