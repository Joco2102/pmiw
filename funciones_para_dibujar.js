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
  fill(90, 170, 50);
  rect(207, 349, 222, 45, 10);
  fill(255);
  textSize(30);
  text("COMENZAR", width / 2, 375); 
  j = 550;
  speed = 1;
}

function dibujarBotonAvance(texto) {
  let X_AVANCE = 550;
  let Y_AVANCE = 400; 
  let ANCHO_ALTO_AVANCE = 80;
  
  fill(255, 0, 0); 
  rect(X_AVANCE, Y_AVANCE, ANCHO_ALTO_AVANCE, ANCHO_ALTO_AVANCE);
  fill(255);
  textSize(16);
  text(texto, X_AVANCE + 40, Y_AVANCE + 40);
}

function dibujarBotonDecision(x, texto, r, g, b) {
  let Y_DECISION = 420; 
  let ANCHO_DECISION = 130;
  let ALTO_DECISION = 40;
  
  noStroke();
  fill(r, g, b);
  rect(x, Y_DECISION, ANCHO_DECISION, ALTO_DECISION, 10);
  fill(255);
  textSize(20); 
  text(texto, x + ANCHO_DECISION / 2, Y_DECISION + ALTO_DECISION / 2 + 5); 
}

function dibujarBotonReiniciar() {
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);
  fill(255);
  textSize(20);
  text("FIN GRACIAS POR VER", width / 2, height / 2 - 50);
  fill(90, 170, 50);
  rect(width / 2 - 50, 300, 100, 50);
  fill(255);
  textSize(25);
  text("Reiniciar", width / 2, 325);
}
