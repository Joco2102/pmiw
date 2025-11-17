// Comision 2
// alumnos: Joaquin montiel 122802/5
//          Carlos Luis Acuña Salina 121108/4
// link al video: https://youtu.be/VOuhlqZurEM

let videojuego; 
let pelota;
let goku;
let freezer;

function preload(){
  pelota = loadImage( "data/pelota.png" );
  goku = loadImage( "data/goku.png" );
  freezer = loadImage( "data/Freezer.png" );
}

function setup() {
    createCanvas(640, 480); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    videojuego = new Juego(pelota,goku,freezer); 
}

function draw() {
    background(150, 150, 150);
    
    videojuego.dibujar();
}

function keyPressed() {
    if (videojuego) {
        videojuego.teclear(); 
    }
}
function mousePressed() {
    if (videojuego) {
        videojuego.manejarClicks();
    }
}
