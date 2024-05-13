var imagenes = [

    "..\\Web_2024\\imagenes\\MM4.jpeg",
    "..\\Web_2024\\imagenes\\MM5.jpeg",
    "..\\Web_2024\\imagenes\\MM6.jpeg",
    "..\\Web_2024\\imagenes\\MM7.jpeg",
    "..\\Web_2024\\imagenes\\MM8.jpeg",
    "..\\Web_2024\\imagenes\\MM_10.jpeg",
    "..\\Web_2024\\imagenes\\MM_11.jpeg",
    "..\\Web_2024\\imagenes\\MM12.jpeg",
    "..\\Web_2024\\imagenes\\MM13.jpeg",
    "..\\Web_2024\\imagenes\\MM14.jpeg",
    "..\\Web_2024\\imagenes\\MM1.jpeg",
    "..\\Web_2024\\imagenes\\MM2.jpeg"


]

var index = 0 
var carruselImg = document.getElementById("carrusel_Imagenes")

function cargarImagenes() {
    
    carruselImg.innerHTML = "";
   
    for (var i = index; i < index + 4; i++) {
        var img = document.createElement("img");
        img.src = imagenes[i];
        carruselImg.appendChild(img);
    }
}
avanzaAuto();

function imagenAnterior() {
    if (index >= 4) {
        index -= 4;
        cargarImagenes();
    }
}

function imagenSiguiente() {
    if (index + 4 < imagenes.length) {
        index += 4;
        cargarImagenes();
    }else{
        index = 0;
        cargarImagenes();
    }
}

cargarImagenes();

function avanzaAuto(){
    setInterval( function(){
        imagenSiguiente();
    }, 4000 )
}



avanzaAuto();

