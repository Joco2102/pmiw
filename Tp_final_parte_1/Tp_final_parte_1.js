// Comision 2
// alumnos: Joaquin montiel 122802/5
//           Carlos Luis Acuña Salina 121108/4
// link al video: https:https://youtu.be/C6EI1l8b0OQ
// CAMBIAMOS LOS ARRAYS DE TEXTO Y LOS BOTONES Y SACAMOS LAS LIBRERIAS DE JAVASRIPT
// VARIABLES GLOBALES
let escenaActual = 0;
let IMAGENES = [];
let song;

let botonPlayX = 20;
let botonPlayY = 20;
let botonPlayW = 80;
let botonPlayH = 40;

let botonStopX = 120;
let botonStopY = 20;
let botonStopW = 80;
let botonStopH = 40;

let posicionCreditosY;
let speedCreditos = 0.5;
let LINEASDETEXTO = [
  ["DRAGON BALL Z: LA RESURRECCIÓN DE FREEZER", "Pulsa COMENZAR para continuar"],
  ["Una nave alien se encuentra sobre la tierra.", "Los soldados de Freezer han llegado."],
  ["Estos soldados reunen las esferas del dragon", "Piensan revivir a Freezer para vengarse de los Sayans"],
  ["Shenglong aparece ante ellos y les concede un deseo", "EL DESEO: LA RESURRECCION DE FREEZER"],
  ["Con Freezer de nuevo a la vida", "Y con una flota de soldados a su mando"],
  ["Los guerreros Z deberan enfrentarlo", "Esta vez deberan ir con todo"],
  ["Pero Freezer ha estado entrenando", " ante todos muestra su nueva forma GOLDEN"],
  ["Goku y Vegeta no se quedan atras y muestran sus formas Dios", "¿Quien sera el primero en pelear?"],
  ["Goku y Freezer se lanzan a luchar", "Parece que esta parejo pero no es asi"],
  ["Con su nuevo poder Goku humilla a Freezer", "decide dejarlo libre ya que no le causa problemas"],
  ["Aprovechando la oportunidad Freezer decide acabar con todos", "La tierra tiembla bajo sus pies y se agrieta"],
  ["Whis se percata de la situacion y decide actuar", "¿Aceptas su ayuda?"],
  ["Whis vuelve en el tiempo para salvarnos", "La tierra regresa a la normalidad "],
  ["Debido a lo ocurrido Goku no puede titubear", "SE LANZA CONTRA FREEZER CON TODO"],
  ["Utilizando un kamehameha devastador", "El emperador no puede aguantar"],
  ["Freezer es eliminado", "La tierra ha sido salvada"],
  ["FIN", ".."],
  ["Vegeta se lanza contra Freezer seguro de sí", "El principe parece tenerlo todo bajo control"],
  ["Vegeta domina el combate con facilidad", "Freezer esta siendo humillado y a punto de ser derrotado."],
  ["Vegeta puede acabar con todo ahora pero quiere divertirse", "¿Que deberia hacer el principe Sayan?"],
  ["Vegeta decide acabar con todo lo antes posible", "Lanza un ataque tan poderoso para terminar todo"],
  ["FIN: DERROTA POR TITUBEAR", "..."],
  ["Goku y Vegeta deciden combatir a Freezer juntos", "Freezer parece igualar la fuerza de ambos"],
  ["Goku y Vegeta caen ante Golden Freezer", "Su ultima esperanza es la fusion ¿Lo haran?"],
  ["Goku y Vegeta deciden fusionarse", "El poder que emanan supera a los dioses"],
  ["Ante Freezer aparece el guerrero que lo detendra", "GOGETA"],
  ["Gogeta arrasa con Golden Freezer", "su poder parece no tener lkimites"],
  ["Lanzando un ataque devastador", "Gogeta parece acabar con la vida del emperador"],
  ["FIN", "..."]
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
  posicionCreditosY = height;
}

function draw() {
  background(0);
  dibujarContenidoEscena(escenaActual);
  dibujarBotonesSong();
}

function mousePressed() {
  if (mouseX > botonPlayX && mouseX < botonPlayX + botonPlayW &&
      mouseY > botonPlayY && mouseY < botonPlayY + botonPlayH) {
    if (!song.isPlaying()) song.loop();
    return;
  }
    if (mouseX > botonStopX && mouseX < botonStopX + botonStopW &&
      mouseY > botonStopY && mouseY < botonStopY + botonStopH) {
    if (song.isPlaying()) song.stop();
    return;
  }

  pasarPantalla(escenaActual);
}

function pasarPantalla(e) {
  let X_AVANCE = 550;
  let Y_AVANCE = 400;
  let ANCHO_ALTO_AVANCE = 80;

  let Y_DECISION = 420;
  let X_DECISION_1 = 150;
  let X_DECISION_2 = 300;
  let X_DECISION_3 = 450;
  let ANCHO_DECISION = 130;
  let ALTO_DECISION = 40;

  let X_RESTART_START = width / 2 - 50;
  let Y_RESTART_START = 300;
  let X_RESTART_END = width / 2 + 50;
  let Y_RESTART_END = 350;


  if (e === 16 || e === 21 || e === 28) {
    if (mouseX > X_RESTART_START && mouseY > Y_RESTART_START && mouseX < X_RESTART_END && mouseY < Y_RESTART_END) {
      escenaActual = 0;

      posicionCreditosY = height;
      return;
    }
    return;
  }

  if (e === 0) {
    if (mouseX > 207 && mouseY > 349 && mouseX < 429 && mouseY < 394) {
      escenaActual = 1;
    }
    return;
  }

  if (e === 7) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 8;
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 17;
      } else if (mouseX > X_DECISION_3 && mouseY > Y_DECISION && mouseX < X_DECISION_3 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 22;
      }
    return;
  }

  else if (e === 11) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 12;
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 21;
      }
    return;
  }

  else if (e === 19) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 20;
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 10;
      }
    return;
  }

  else if (e === 23) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 24;
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 28;
      }
    return;
  }

  if (mouseX > X_AVANCE && mouseY > Y_AVANCE && mouseX < X_AVANCE + ANCHO_ALTO_AVANCE && mouseY < Y_AVANCE + ANCHO_ALTO_AVANCE) {
    if (e === 1) { escenaActual = 2; }
    else if (e === 2) { escenaActual = 3; }
    else if (e === 3) { escenaActual = 4; }
    else if (e === 4) { escenaActual = 5; }
    else if (e === 5) { escenaActual = 6; }
    else if (e === 6) { escenaActual = 7; }

    else if (e === 8) { escenaActual = 9; }
    else if (e === 9) { escenaActual = 10; }
    else if (e === 10) { escenaActual = 11; }

    else if (e === 12) { escenaActual = 13; }
    else if (e === 13) { escenaActual = 14; }
    else if (e === 14) { escenaActual = 15; }

    else if (e === 17) { escenaActual = 18; }
    else if (e === 18) { escenaActual = 19; }
    else if (e === 20) { escenaActual = 15; }

    else if (e === 22) { escenaActual = 23; }
    else if (e === 24) { escenaActual = 25; }
    else if (e === 25) { escenaActual = 26; }
    else if (e === 26) { escenaActual = 27; }

    else if (e === 15) { escenaActual = 16; }

    else if (e === 27) { escenaActual = 16; }
  }
}

function dibujarBotonesSong() {
  textAlign(CENTER, CENTER);
  textSize(16);
  noStroke();

  fill(90, 200, 90);
  rect(botonPlayX, botonPlayY, botonPlayW, botonPlayH, 10);
  fill(255);
  text("PLAY", botonPlayX + botonPlayW / 2, botonPlayY + botonPlayH / 2);

  fill(220, 60, 60);
  rect(botonStopX, botonStopY, botonStopW, botonStopH, 10);
  fill(255);
  text("STOP", botonStopX + botonStopW / 2, botonStopY + botonStopH / 2);
}


function dibujarEscenaHistoria(e) {
  let indiceImagen = e;

  if (e !== 16 && e !== 21 && e !== 28) {
    if (IMAGENES[indiceImagen]) {
      image(IMAGENES[indiceImagen], 46, 26, 547, 305);
    } else {
      background(50);
    }
  } else {
    background(0);
  }

  stroke(3);
  fill(150, 20, 80, 200);
  rect(0, 350, width, height - 350);
  fill(255);
  textSize(20);

  if (e === 16 || e === 21 || e === 28) {

    push();
    posicionCreditosY -= speedCreditos;
    for (let i = 0; i < creditos.length; i++) {
      textAlign(CENTER);
      textSize(25);
      fill(255);
      text(creditos[i], width / 2, posicionCreditosY + i * 40);
    }
    pop();

    fill(255);
    textSize(30);
    let finalTitle = LINEASDETEXTO[e][0];
    text(finalTitle, width / 2, height / 2 - 120);

    dibujarBotonReiniciar();
    return;
  }

  text(LINEASDETEXTO[e][0], width / 2, 380);
  text(LINEASDETEXTO[e][1], width / 2, 410);

 if (e === 7) {
    dibujarBotonDecision(150, "Goku", 90, 170, 50);
    dibujarBotonDecision(300, "Vegeta", 90, 170, 50);
    dibujarBotonDecision(450, "Ambos", 90, 170, 50);
  } else if (e === 11) {
    dibujarBotonDecision(150, "SI", 90, 170, 50);
    dibujarBotonDecision(300, "NO", 170, 50, 50);
  } else if (e === 19) {
    dibujarBotonDecision(150, "Destruir", 170, 50, 50);
    dibujarBotonDecision(300, "Alardear", 90, 170, 50);
  } else if (e === 23) {
    dibujarBotonDecision(150, "SI", 90, 170, 50);
    dibujarBotonDecision(300, "NO", 170, 50, 50);
  } else {
    dibujarBotonAvance("SIGUIENTE");
  }
}

function dibujarContenidoEscena(e) {
  if (e === 0) {
    dibujarPantallaInicio();
  }
  else if (e >= 1 && e <= 28) {
    dibujarEscenaHistoria(e);
  }
}

function dibujarPantallaInicio() {
  if (IMAGENES[0]) {
    image(IMAGENES[0], 0, 0, width, height);
  } else {
    background(255);
  }
  fill(0, 0, 0, 180);
  rect(0, 0, width, 100);
  fill(255);
  textSize(24);
  text(LINEASDETEXTO[0][0], width / 2, 35);
  textSize(20);
  text(LINEASDETEXTO[0][1], width / 2, 70);

  fill(90, 170, 50);
  rect(207, 349, 222, 45, 10);
  fill(255);
  textSize(30);
  text("COMENZAR", width / 2, 375);

  posicionCreditosY = height;
}

function dibujarBotonAvance(texto) {
  let X_AVANCE = 550;
  let Y_AVANCE = 400;
  let ANCHO_ALTO_AVANCE = 80;

  fill(255, 0, 0, 200);
  rect(X_AVANCE, Y_AVANCE, ANCHO_ALTO_AVANCE, ANCHO_ALTO_AVANCE, 10);
  fill(255);
  textSize(16);
  text(texto, X_AVANCE + 40, Y_AVANCE + 40);
}

function dibujarBotonDecision(x, texto, r, g, b) {
  let Y_DECISION = 420;
  let ANCHO_DECISION = 130;
  let ALTO_DECISION = 40;

  noStroke();
  fill(r, g, b, 220);
  rect(x, Y_DECISION, ANCHO_DECISION, ALTO_DECISION, 10);
  fill(255);
  textSize(20);
  text(texto, x + ANCHO_DECISION / 2, Y_DECISION + ALTO_DECISION / 2);
}

function dibujarBotonReiniciar() {

  fill(90, 170, 50, 255);
  rect(width / 2 - 50, 300, 100, 50, 10);
  fill(255);
  textSize(25);
  text("Reiniciar", width / 2, 325);
}
