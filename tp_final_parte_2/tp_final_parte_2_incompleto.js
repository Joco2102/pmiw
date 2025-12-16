// Comision 2
// alumnos: Joaquin montiel 122802/5
//          Carlos Luis Acuña Salina 121108/4
// link al video: https://www.youtube.com/watch?v=rN2hyJVHw7g&feature=youtu.be

let videojuego; 
let pelota;
let goku;
let freezer;
//fondos
let imgFondoMenu;
let imgFondoInstrucciones;
let imgFondoComun; // Creditos, Ganaste, Perdiste
let imgFondoJuego;
let musicaFondo;

function preload(){
  pelota = loadImage( "data/pelota.png" );
  goku = loadImage( "data/goku.png" );
  freezer = loadImage( "data/Freezer.png" );
  imgFondoMenu = loadImage("data/FONDOMENU.png");
  imgFondoInstrucciones = loadImage("data/FONDOINSTRUCCIONES.png");
  imgFondoComun = loadImage("data/FONDOCREDITOS-GANASTE-PERDISTE.png");
  imgFondoJuego = loadImage("data/FONDOPARAELJUEGO.png");
  musicaFondo = loadSound("data/temaDB.mp3");
}

function setup() {
    createCanvas(640, 480); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    videojuego = new Juego(pelota, goku, freezer, imgFondoMenu, imgFondoInstrucciones, imgFondoComun, imgFondoJuego, musicaFondo); 
}

function draw() {
    videojuego.dibujar();
}

function keyPressed() {
    if (videojuego) {
        videojuego.teclear(); 
    }
}
function mousePressed() {
    userStartAudio();
    if (videojuego) {
        videojuego.manejarClicks();
    }
}
