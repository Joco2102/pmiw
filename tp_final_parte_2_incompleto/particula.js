class Particula {
  constructor( velocidad ) {  
    this.x = Math.floor( Math.random() * width ); 
    this.y = -100;
    this.diam = Math.floor( 10 + Math.random() * 40 );
    this.vel = velocidad;
    this.mostrar = true;
  }

  dibujar() {
    if ( this.mostrar ) {
        fill(200, 50, 0); 
        noStroke();
        ellipse( this.x, this.y, this.diam, this.diam ); 
    }
  }

  actualizar() {
    if ( this.mostrar ) {
      this.y = this.y + this.vel;
    }
  }

  reciclar() {
    if ( this.y >= height+100 ) {
      this.x = int( random(width) );
      this.y = -100;
      this.diam = Math.floor( 10 + Math.random() * 40 );
    }
  }

  desaparecer() {
    this.mostrar = false;
    this.x = Math.floor( Math.random() * width ); 
    this.y = -100;
    this.mostrar = true; 
  }
}
