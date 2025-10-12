//Comision 2
// alumnos: Joaquin montiel 122802/5
//          Carlos Luis Acuña Salina 121108/4
// link al video: https://www.youtube.com/watch?v=ISjHyR7UEdc&t=2s
let escenaActual = 0;
let IMAGENES = [];
let song;
let botonPlay = { x: 20, y: 20, w: 80, h: 40 };
let botonStop = { x: 120, y: 20, w: 80, h: 40 };
let LINEASDETEXTO = [
  { linea1: "...", linea2: "..." },//pantalla de inicio
  { linea1: "Una nave alien se encuentra sobre la tierra.", linea2: "Los soldados de freezer han llegado." },//primera pantalla
  { linea1: "Estos soldados reunen las esferas del dragon", linea2: "Piensan revivir a freezer para vengarse de los Sayans" },//segunda pantalla
  { linea1: "Shenglong aparece ante ellos y les concede un deseo", linea2: "EL DESEO: LA RESURRECCION DE FREEZER" },//tercera pantalla
  { linea1: "Con freezer denuevo a la vida", linea2: "Y con una flota de soldados a su mando" },//cuarta pantalla
  { linea1: "Los guerreros z deberan enfrentarlo", linea2: "Esta vez deberan ir con todo" },//quinta pantalla
  { linea1: "Pero freezer ha estado entrenando", linea2: " ante todos muestra su nueva forma GOLDEN" },//sexta pantalla
  { linea1: "Goku y Vegeta no se queda atras y muestran sus formas dios", linea2: "¿Quien sera el primero en pelear?" },//septima pantalla y desicion quien pelea
  { linea1: "Goku y Freezer se lanzan a luchar", linea2: "Parece que esta parejo pero no es asi" },//octava pantalla
  { linea1: "Con su nuevo poder Goku humilla a freezer", linea2: "decide dejarlo libre ya que no le causa problemas" },//novena pantalla
  { linea1: "Aprovechando la oportunidad Freezer decide acabar con todos", linea2: "La tierra tiembla bajo sus pies y se agrieta" },//decima pantalla
  { linea1: "Whis se percata de la situacion y decide actuar", linea2: "¿Aceptas su ayuda?" },//pantalla  1 y desicion de whis
  { linea1: "Whis vuelve en el tiempo para salvarnos", linea2: "La tierra regresa a la normalidad " },// doceava pantalla, si le dijiste que si a whis
  { linea1: "Debido a lo ocurrido Goku no puede titubear", linea2: "SE LANZA CONTRA FREEZER CON TODO" },// pantalla trece, aca ya no me acuerdo como se pronuncia
  { linea1: "Utilizando un kamehameha devastador", linea2: "El emperador no puede aguantar" },//pantalla catorce
  { linea1: "Freezer es eliminado", linea2: "La tierra ha sido salvada" },//pantalla 15
  { linea1: "...", linea2: ".." },//pantalla 16
  { linea1: "Vegeta se lanza contra freezer seguro de sí", linea2: "El principe parece tenerlo todo bajo control" },//pantalla 17 aca es si elegiste a vegeta
  { linea1: "Vegeta domina el combate con facilidad", linea2: "Freezer esta humillado y a punto de ser derrotado." },//pantalla 18
  { linea1: "Vegeta puede acabar con todo ahora pero quiere divertirse", linea2: "¿Que deberia hacer el principe Sayan?" },//pantalla 19 aca decidis si sos boludo o no
  { linea1: "Vegeta decide acabar con todo lo antes posible", linea2: "Lanza un ataque tan poderoso para terminar todo" },// pantalla 19 elegiste bien
  { linea1: "...", linea2: "..." },//pantalla 20
  { linea1: "Goku y Vegeta deciden combatir a freezer juntos", linea2: "Freezer parece igualar la fuerza de ambos" },//pantalla 22 aca elegiste ambos
  { linea1: "Goku y Vegeta caen ante golden freezer", linea2: "Su ultima esperanza es la fusion ¿Lo haran?" },// pantalla 23 aca decidis si te fusionas
  { linea1: "Goku y Vegeta deciden fusionarse", linea2: "El poder que emanan supera a los dioses" },//pantalla 24 elegiste fusionarte
  { linea1: "Ante freezer aparece el guerrero que lo detendra", linea2: "GOGETA" },// pantalla 25 nace gogeta
  { linea1: "Gogeta arrasa con golden freezer", linea2: "su poder parece no tener lkimites" },//pantalla 26 gogeta hullia a freezer
  { linea1: "Lanzando un ataque devastador", linea2: "Gogeta parece acabar con la vida del emperador" },//pantalla 27 gogeta mata a freezer
  { linea1: "Debido al orgullo de Vegeta no se fusionan", linea2: "Golden freezer acab con ello y con todo el planeta" }//pantalla 28 no te quisiste fusionar
];
let creditos = [
  "Creado por: Carlos Acuña",
  "y Joaquin Montiel.",
  "Serie ambientada en Dragon Ball Z.",
  "Música:BeatKitchen - My true strength, Pixabay ",
  "Fotos: Google, IA",
  "Agradecimientos a:",
  "  - el profe",
  "  - todos",
  "Fin y gracias por ver y interactuar"
];

  let temp;
  let j = 550; // Posición inicial de los créditos
  let speed = 1; // Vel  ocidad de desplazamiento


function preload() {
  for (let i = 1; i <= 29; i++) { 
   IMAGENES[i - 1] = loadImage('data/DBimagen' + i + '.jpg');
  }
  song = loadSound('data/temaDB.mp3');
}
function setup() {
  createCanvas(640, 480);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(0);
  temp = int( millis() / 1000 );
  dibujarContenidoEscena(escenaActual);
  dibujarBotonesSong();
}

function mousePressed() {
  pasarPantalla(escenaActual);
   let sonidoPresionado = false;
    if (mouseX > botonPlay.x && mouseX < botonPlay.x + botonPlay.w &&
      mouseY > botonPlay.y && mouseY < botonPlay.y + botonPlay.h) {
    if (!song.isPlaying()) song.loop();
    sonidoPresionado = true;
  }
    if (mouseX > botonStop.x && mouseX < botonStop.x + botonStop.w &&
      mouseY > botonStop.y && mouseY < botonStop.y + botonStop.h) {
    if (song.isPlaying()) song.stop();
    sonidoPresionado = true;
  }
 
}

function pasarPantalla(e) {
  //boton siguiente
  let X_AVANCE = 550;
  let Y_AVANCE = 400; 
  let ANCHO_ALTO_AVANCE = 80;

  //botones de decisiones
  let Y_DECISION = 420;
  let X_DECISION_1 = 150; 
  let X_DECISION_2 = 300; 
  let X_DECISION_3 = 450; 
  let ANCHO_DECISION = 130;
  let ALTO_DECISION = 40; 

  //boton reinicio
  let X_RESTART_START = width / 2 - 50; 
  let Y_RESTART_START = 300;
  let X_RESTART_END = width / 2 + 50;  
  let Y_RESTART_END = 350;
  if (e === 16 || e === 21) {
    if (mouseX > X_RESTART_START && mouseY > Y_RESTART_START && mouseX < X_RESTART_END && mouseY < Y_RESTART_END) {
      escenaActual = 0; 
      return; 
    }
  }
  if (e === 0) {
    if (mouseX > 207 && mouseY > 349 && mouseX < 429 && mouseY < 394) {
      escenaActual = 1; 
    }
  } 
  // decision 1 goku, vegeta o ambos
  else if (e === 7) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 8; // Goku
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 17; // Vegeta
      } else if (mouseX > X_DECISION_3 && mouseY > Y_DECISION && mouseX < X_DECISION_3 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 22; // Ambos
      }
  }
  
  // Ddesicion 2 si o no a whis
  else if (e === 11) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 12; // SI (Huye -> E13)
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 21; // NO (No huye -> Final 21)
      }
  }

  // desicion 3 destruir o alardear
  else if (e === 19) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 20; // Destruye
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 10; // Alardea
      }
  }
  
  // desicion 4 fusionarse si o no
  else if (e === 23) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 24; // SI
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 28; // NO
      }
  }

  // seguir las pantallas
  else if (mouseX > X_AVANCE && mouseY > Y_AVANCE && mouseX < X_AVANCE + ANCHO_ALTO_AVANCE && mouseY < Y_AVANCE + ANCHO_ALTO_AVANCE) {
    if (e === 1) { escenaActual = 2; } 
    else if (e === 2) { escenaActual = 3; }
    else if (e === 3) { escenaActual = 4; } 
    else if (e === 4) { escenaActual = 5; } 
    else if (e === 5) { escenaActual = 6; } 
    else if (e === 6) { escenaActual = 7; } 
    
    // SI ELIJO A GOKU
    else if (e === 8) { escenaActual = 9; }
    else if (e === 9) { escenaActual = 10; }
    else if (e === 10) { escenaActual = 11; } 
    
    // SI LE DIGO QUE SI A WHIS
    else if (e === 12) { escenaActual = 13; }
    else if (e === 13) { escenaActual = 14; }
    else if (e === 14) { escenaActual = 15; }
    
    // SI ELIJO A VEGETA
    else if (e === 17) { escenaActual = 18; }
    else if (e === 18) { escenaActual = 19; }
    else if (e === 20) { escenaActual = 15; }

    // SI ELIJO A AMBOS
    else if (e === 22) { escenaActual = 23; } 
    else if (e === 24) { escenaActual = 25; }
    else if (e === 25) { escenaActual = 26; }
    else if (e === 26) { escenaActual = 27; }
    
    // NO ME ACUERDO PERO CREO QUE ERA PARA MATAR A FREEZER
    else if (e === 15) { escenaActual = 16; } 
    
    // SI ME FUSIONO EN GOGETA
    else if (e === 27) { escenaActual = 15; } 
    
    // SI NO ME FUSIONO EN GOGETA
    else if (e === 28) { escenaActual = 21; } 
  }
}
function dibujarBotonesSong() {
  textAlign(CENTER, CENTER);
  textSize(16);
  noStroke();

  fill(90, 200, 90);
  rect(botonPlay.x, botonPlay.y, botonPlay.w, botonPlay.h, 10);
  fill(255);
  text("PLAY", botonPlay.x + botonPlay.w / 2, botonPlay.y + botonPlay.h / 2);

  fill(220, 60, 60);
  rect(botonStop.x, botonStop.y, botonStop.w, botonStop.h, 10);
  fill(255);
  text("STOP", botonStop.x + botonStop.w / 2, botonStop.y + botonStop.h / 2);
}


function dibujarEscenaHistoria(e) {
  let indiceImagen = e; 
  if (IMAGENES[indiceImagen]) {
    image(IMAGENES[indiceImagen], 46, 26, 547, 305);
  } else {
    background(50); 
  }
  stroke(3);// aca dibujamos donde van a ir los textos
  fill(150, 20, 80, 200); 
  rect(0, 350, width, height - 350); 
  fill(255);
  textSize(20);
  if (e === 16 || e === 21) {
     if (temp / 60 < 10) { // ACÁ EMPIEZAN LOS CRÉDITOS
    push();
    // ACÁ DIBUJA LOS CRÉDITOS
    for (let i = 0; i < creditos.length; i++) {
      textAlign(CENTER);
      textSize(25);
      fill(255);
      text(creditos[i], width / 2, j + i * 40);
      j -= speed/5;} // VELOCIDAD + MUEVE LOS CRÉDITOS HACIA ARRIBA
    pop();}
    dibujarBotonReiniciar();
    return;
  }
  let data = LINEASDETEXTO[e]; // aca cargamos los textos del array
  text(data.linea1, width / 2, 380);
  text(data.linea2, width / 2, 410);
//botones
 if (e === 7) {
   dibujarBotonDecision(150, "Goku", 90, 170, 50); 
   dibujarBotonDecision(300, "Vegeta", 90, 170, 50); 
   dibujarBotonDecision(450, "Ambos", 90, 170, 50); 
 } else if (e === 11) {
   dibujarBotonDecision(150, "SI", 90, 170, 50); 
   dibujarBotonDecision(300, "NO", 170, 50, 50); 
 } else if (e === 19) {
   dibujarBotonDecision(150, "Destruye", 170, 50, 50); 
   dibujarBotonDecision(300, "Alardea", 90, 170, 50); 
 } else if (e === 23) {
   dibujarBotonDecision(150, "SI", 90, 170, 50); 
   dibujarBotonDecision(300, "NO", 170, 50, 50); 
 } else {
   dibujarBotonAvance("SIGUIENTE");
 }
}
