// Comision 2
// alumnos: Joaquin montiel 122802/5
//           Carlos Luis Acuña Salina 121108/4
// link al video: https://www.youtube.com/watch?v=ISjHyR7UEdc&t=2s
// CAMBIAMOS LOS ARRAYS DE TEXTO Y LOS BOTONES Y SACAMOS LAS LIBRERIAS DE JAVASRIPT. NO LLEGAMOS A GRABAR EL VIDEO
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

let posicionCreditosY; // Posición inicial de los créditos
let speedCreditos = 0.5; // Velocidad de desplazamiento
let LINEASDETEXTO = [
  ["DRAGON BALL Z: LA RESURRECCIÓN DE FREEZER", "Pulsa COMENZAR para continuar"],//pantalla de inicio (Índice 0)
  ["Una nave alien se encuentra sobre la tierra.", "Los soldados de Freezer han llegado."],//primera pantalla (Índice 1)
  ["Estos soldados reunen las esferas del dragon", "Piensan revivir a Freezer para vengarse de los Sayans"],//segunda pantalla (Índice 2)
  ["Shenglong aparece ante ellos y les concede un deseo", "EL DESEO: LA RESURRECCION DE FREEZER"],//tercera pantalla (Índice 3)
  ["Con Freezer de nuevo a la vida", "Y con una flota de soldados a su mando"],//cuarta pantalla (Índice 4)
  ["Los guerreros Z deberan enfrentarlo", "Esta vez deberan ir con todo"],//quinta pantalla (Índice 5)
  ["Pero Freezer ha estado entrenando", " ante todos muestra su nueva forma GOLDEN"],//sexta pantalla (Índice 6)
  ["Goku y Vegeta no se quedan atras y muestran sus formas Dios", "¿Quien sera el primero en pelear?"],//septima pantalla y desicion quien pelea (Índice 7)
  ["Goku y Freezer se lanzan a luchar", "Parece que esta parejo pero no es asi"],//octava pantalla (Índice 8)
  ["Con su nuevo poder Goku humilla a Freezer", "decide dejarlo libre ya que no le causa problemas"],//novena pantalla (Índice 9)
  ["Aprovechando la oportunidad Freezer decide acabar con todos", "La tierra tiembla bajo sus pies y se agrieta"],//decima pantalla (Índice 10)
  ["Whis se percata de la situacion y decide actuar", "¿Aceptas su ayuda?"],//pantalla 11 y desicion de whis (Índice 11)
  ["Whis vuelve en el tiempo para salvarnos", "La tierra regresa a la normalidad "],// doceava pantalla, si le dijiste que si a whis (Índice 12)
  ["Debido a lo ocurrido Goku no puede titubear", "SE LANZA CONTRA FREEZER CON TODO"],// pantalla trece (Índice 13)
  ["Utilizando un kamehameha devastador", "El emperador no puede aguantar"],//pantalla catorce (Índice 14)
  ["Freezer es eliminado", "La tierra ha sido salvada"],//pantalla 15 (Índice 15)
  ["FIN", ".."],//pantalla 16 (FINAL GOKU)
  ["Vegeta se lanza contra Freezer seguro de sí", "El principe parece tenerlo todo bajo control"],//pantalla 17 aca es si elegiste a vegeta (Índice 17)
  ["Vegeta domina el combate con facilidad", "Freezer esta siendo humillado y a punto de ser derrotado."],//pantalla 18 (Índice 18)
  ["Vegeta puede acabar con todo ahora pero quiere divertirse", "¿Que deberia hacer el principe Sayan?"],//pantalla 19 aca decidis si sos boludo o no (Índice 19)
  ["Vegeta decide acabar con todo lo antes posible", "Lanza un ataque tan poderoso para terminar todo"],// pantalla 20 elegiste bien (Índice 20)
  ["FIN: DERROTA POR TITUBEAR", "..."],//pantalla 21 (FINAL VEGETA MALO) (Índice 21)
  ["Goku y Vegeta deciden combatir a Freezer juntos", "Freezer parece igualar la fuerza de ambos"],//pantalla 22 aca elegiste ambos (Índice 22)
  ["Goku y Vegeta caen ante Golden Freezer", "Su ultima esperanza es la fusion ¿Lo haran?"],// pantalla 23 aca decidis si te fusionas (Índice 23)
  ["Goku y Vegeta deciden fusionarse", "El poder que emanan supera a los dioses"],//pantalla 24 elegiste fusionarte (Índice 24)
  ["Ante Freezer aparece el guerrero que lo detendra", "GOGETA"],// pantalla 25 nace gogeta (Índice 25)
  ["Gogeta arrasa con Golden Freezer", "su poder parece no tener lkimites"],//pantalla 26 gogeta hullia a freezer (Índice 26)
  ["Lanzando un ataque devastador", "Gogeta parece acabar con la vida del emperador"],//pantalla 27 gogeta mata a freezer (Índice 27)
  ["FIN", "..."]//pantalla 28 no te quisiste fusionar (Índice 28)
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
  // Manejo de botones de audio
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
  
  // Lógica de avance de pantalla
  pasarPantalla(escenaActual);
}

function pasarPantalla(e) {
  // Coordenadas del botón de AVANCE (SIGUIENTE)
  let X_AVANCE = 550;
  let Y_AVANCE = 400; 
  let ANCHO_ALTO_AVANCE = 80;

  // Coordenadas de los botones de DECISION
  let Y_DECISION = 420;
  let X_DECISION_1 = 150; 
  let X_DECISION_2 = 300; 
  let X_DECISION_3 = 450; 
  let ANCHO_DECISION = 130;
  let ALTO_DECISION = 40; 

  // Coordenadas del botón REINICIO (Usado en las escenas de 'Fin')
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
    // Si no presionó reiniciar, no hacemos nada más
    return;
  }
  
  // --- LÓGICA DE BOTÓN DE INICIO ---
  if (e === 0) {
    // Coordenadas del botón COMENZAR: x=207, y=349, w=222, h=45
    if (mouseX > 207 && mouseY > 349 && mouseX < 429 && mouseY < 394) {
      escenaActual = 1; 
    }
    return; // La escena 0 solo tiene el botón de inicio
  } 
  
  // --- LÓGICA DE BOTONES DE DECISIÓN ---
  // decision 1: goku, vegeta o ambos (Escena 7)
  if (e === 7) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 8; // Goku
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 17; // Vegeta
      } else if (mouseX > X_DECISION_3 && mouseY > Y_DECISION && mouseX < X_DECISION_3 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 22; // Ambos
      }
    return;
  }
  
  // Ddesicion 2: si o no a Whis (Escena 11)
  else if (e === 11) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 12; // SI (Whis salva)
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 21; // NO (Mala elección, final 21)
      }
    return;
  }

  // desicion 3: destruir o alardear (Escena 19)
  else if (e === 19) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 20; // Destruye (Final Bueno)
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 10; // Alardea (Sale mal, lleva a escena 10, la misma de Goku)
      }
    return;
  }
  
  // desicion 4: fusionarse si o no (Escena 23)
  else if (e === 23) {
      if (mouseX > X_DECISION_1 && mouseY > Y_DECISION && mouseX < X_DECISION_1 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 24; // SI (Gogeta)
      } else if (mouseX > X_DECISION_2 && mouseY > Y_DECISION && mouseX < X_DECISION_2 + ANCHO_DECISION && mouseY < Y_DECISION + ALTO_DECISION) {
          escenaActual = 28; // NO (Final malo 28)
      }
    return;
  }
  
  // --- LÓGICA DE BOTÓN DE AVANCE (SIGUIENTE) ---
  // Si no fue una escena especial o de decisión, chequea el botón "SIGUIENTE"
  if (mouseX > X_AVANCE && mouseY > Y_AVANCE && mouseX < X_AVANCE + ANCHO_ALTO_AVANCE && mouseY < Y_AVANCE + ANCHO_ALTO_AVANCE) {
    // Escenas de avance lineal (hasta la decisión)
    if (e === 1) { escenaActual = 2; } 
    else if (e === 2) { escenaActual = 3; }
    else if (e === 3) { escenaActual = 4; } 
    else if (e === 4) { escenaActual = 5; } 
    else if (e === 5) { escenaActual = 6; } 
    else if (e === 6) { escenaActual = 7; } 
    
    // Rama GOKU
    else if (e === 8) { escenaActual = 9; }
    else if (e === 9) { escenaActual = 10; }
    else if (e === 10) { escenaActual = 11; } // Lleva a la decisión de Whis
    
    // Rama WHIS (SI)
    else if (e === 12) { escenaActual = 13; }
    else if (e === 13) { escenaActual = 14; }
    else if (e === 14) { escenaActual = 15; }
    
    // Rama VEGETA (Avance)
    else if (e === 17) { escenaActual = 18; }
    else if (e === 18) { escenaActual = 19; } // Lleva a la decisión de Vegeta
    else if (e === 20) { escenaActual = 15; } // Vegeta Destruye -> Final 15
    
    // Rama AMBOS
    else if (e === 22) { escenaActual = 23; } // Lleva a la decisión de Fusión
    else if (e === 24) { escenaActual = 25; }
    else if (e === 25) { escenaActual = 26; }
    else if (e === 26) { escenaActual = 27; }
    
    // ESCENA 15 (Final Bueno Común)
    else if (e === 15) { escenaActual = 16; } // Final Bueno -> Créditos (16)
    
    // FIN de Rama GOGETA (27)
    else if (e === 27) { escenaActual = 16; } // Gogeta -> Créditos (16)
  }
}

function dibujarBotonesSong() {
  textAlign(CENTER, CENTER);
  textSize(16);
  noStroke();

  fill(90, 200, 90);
  // Uso de variables individuales para definir la posición y tamaño del botón
  rect(botonPlayX, botonPlayY, botonPlayW, botonPlayH, 10);
  fill(255);
  text("PLAY", botonPlayX + botonPlayW / 2, botonPlayY + botonPlayH / 2);

  fill(220, 60, 60);
  // Uso de variables individuales para definir la posición y tamaño del botón
  rect(botonStopX, botonStopY, botonStopW, botonStopH, 10);
  fill(255);
  text("STOP", botonStopX + botonStopW / 2, botonStopY + botonStopH / 2);
}


function dibujarEscenaHistoria(e) {
  let indiceImagen = e;  
  
  // Dibuja la imagen de fondo si existe y no es una escena de 'Fin' puro
  if (e !== 16 && e !== 21 && e !== 28) {
    if (IMAGENES[indiceImagen]) {
      image(IMAGENES[indiceImagen], 46, 26, 547, 305);
    } else {
      background(50); 
    }
  } else {
    // Si es una escena de 'Fin', pinta la pantalla de negro para los créditos
    background(0);
  }

  // Dibuja el cuadro de texto
  stroke(3);
  fill(150, 20, 80, 200); 
  rect(0, 350, width, height - 350); 
  fill(255);
  textSize(20);

  // --- LÓGICA DE CRÉDITOS (Escenas 16, 21, 28) ---
  if (e === 16 || e === 21 || e === 28) {
     
    push();
    // Mueve los créditos hacia arriba
    posicionCreditosY -= speedCreditos;
    // Dibuja los créditos (usa el array 'creditos')
    for (let i = 0; i < creditos.length; i++) {
      textAlign(CENTER);
      textSize(25);
      fill(255);
      text(creditos[i], width / 2, posicionCreditosY + i * 40);
    }
    pop();

    // Muestra el mensaje final (título) y el botón de Reiniciar
    fill(255);
    textSize(30);
    // Acceso usando el índice 0 del array interno
    let finalTitle = LINEASDETEXTO[e][0]; 
    text(finalTitle, width / 2, height / 2 - 120);
    
    dibujarBotonReiniciar();
    return;
  }
  
  // --- LÓGICA DE TEXTO NORMAL ---
  // Acceso usando los índices del array interno: [0] para la línea 1, [1] para la línea 2
  text(LINEASDETEXTO[e][0], width / 2, 380);
  text(LINEASDETEXTO[e][1], width / 2, 410);

  // --- LÓGICA DE BOTONES DE DECISIÓN O AVANCE ---
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
  // Usamos IMAGENES[0] que contiene DBimagen1.jpg
  if (IMAGENES[0]) {
    image(IMAGENES[0], 0, 0, width, height);
  } else {
    background(255);
  }
  // Dibuja el texto de inicio usando LINEASDETEXTO[0]
  fill(0, 0, 0, 180); // Fondo semi-transparente para el texto
  rect(0, 0, width, 100);
  fill(255);
  textSize(24);
  // Acceso usando el índice 0 del array interno
  text(LINEASDETEXTO[0][0], width / 2, 35); 
  textSize(20);
  // Acceso usando el índice 1 del array interno
  text(LINEASDETEXTO[0][1], width / 2, 70); 
  
  // Dibuja el botón COMENZAR
  fill(90, 170, 50);
  rect(207, 349, 222, 45, 10);
  fill(255);
  textSize(30);
  text("COMENZAR", width / 2, 375); 
  
  // Reinicia la posición de créditos solo en el menú principal
  posicionCreditosY = height;
}

function dibujarBotonAvance(texto) {
  let X_AVANCE = 550;
  let Y_AVANCE = 400; 
  let ANCHO_ALTO_AVANCE = 80;
  
  fill(255, 0, 0, 200);  // Botón de avance ROJO
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
  fill(r, g, b, 220); // Usa el color pasado
  rect(x, Y_DECISION, ANCHO_DECISION, ALTO_DECISION, 10);
  fill(255);
  textSize(20); 
  text(texto, x + ANCHO_DECISION / 2, Y_DECISION + ALTO_DECISION / 2);  
}

function dibujarBotonReiniciar() {
  // Se usa en las escenas finales (16, 21, 28)
  
  // Dibuja el botón de Reiniciar
  fill(90, 170, 50, 255);
  rect(width / 2 - 50, 300, 100, 50, 10);
  fill(255);
  textSize(25);
  text("Reiniciar", width / 2, 325);
}
