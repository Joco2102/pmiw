
let videojuego; 
let JUEGO_ACTIVO = 0;
let JUEGO_GANADO = 1;
let JUEGO_PERDIDO = 2;
let MENU_PRINCIPAL = 3; 
let INSTRUCCIONES = 4; 
let CREDITOS = 5; 
function setup() {
    createCanvas(640, 480); 
    rectMode(CENTER);
    ellipseMode(CENTER);
    videojuego = new Juego(); 
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
