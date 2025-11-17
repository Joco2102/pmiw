class Goku {
  constructor( e, balasRef,juego, gok) {  
    this.juego = juego;
    this.x = 240;
    this.y = 380; 
    this.ancho = 100;
    this.alto = 100;
    this.t = 70;  
    this.v = 5; 
    this.enemigo = e; 
    this.balas = balasRef; 
    this.vida = 10; 
    this.go = gok;
  }

  dibujar() {
    image( this.go, this.x, this.y, this.ancho, this.alto);
    fill(255);
    textSize(20);
    textAlign(LEFT, TOP);
    text("Vidas: " + this.vida, 10, 10); 
  }
 
  reaparecer() {
    this.x = width / 2;
    this.y = height - 100;
  }

  mover() {
    if (keyIsDown(LEFT_ARROW) ) { 
      this.x -= this.v;
    }
    if (keyIsDown(RIGHT_ARROW) ) { 
      this.x += this.v;
    }
    
    if (this.x < this.ancho / 2) {
        this.x = this.ancho / 2;
    }
    if (this.x > width - this.ancho / 2) {
        this.x = width - this.ancho / 2;
    }
  }

  colisionar(juego) { 
    for ( let i = 0; i<this.enemigo.length; i++ ) {
      if ( dist( this.x, this.y, this.enemigo[i].x, this.enemigo[i].y) < this.t && this.enemigo[i].mostrar) {
            this.vida -= 1; 
            this.reaparecer();
            this.enemigo[i].desaparecer();
            if (this.vida <= 0) {
                this.juego.estado = this.juego.JUEGO_PERDIDO;
            }
      }
    }
  }

    disparar() {
        let nuevaBala = new Ataque(this.x, this.y - this.alto / 2); 
        this.balas.push(nuevaBala); 
    }
}
