class Particula {
  constructor( velocidad, pelo ) {  
    this.x = Math.floor( Math.random() * width ); 
    this.y = -100;
    this.diam = Math.floor( 10 + Math.random() * 40 );
    this.vel = velocidad;
    this.mostrar = true;
    this.pel = pelo;
  }

  dibujar() {
    if ( this.mostrar ) {
        image( this.pel, this.x, this.y, this.diam, this.diam );
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
