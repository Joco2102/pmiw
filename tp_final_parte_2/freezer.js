class Freezer {
    constructor(x, y, freez) {
        this.x = x;
        this.y = y;
        this.tamano = 80; 
        this.vida = 100; 
        this.velocidadX = 2; 
        this.free = freez;
        this.limiteIzquierdo = x - 200; 
        this.limiteDerecho = x + 200;  
    }

    actualizar() {
        if (this.vida <= 0) return; 
        this.x += this.velocidadX;
        if (this.x >= this.limiteDerecho || this.x <= this.limiteIzquierdo) {
            this.velocidadX *= -1; 
        }
    }

    mostrar() {
        if (this.vida > 0) {
           image( this.free, this.x, this.y, 100, 100 );
        } 
    }

    recibirDano(cantidad) {
        if (this.vida > 0) {
            this.vida -= cantidad;
            if (this.vida < 0) {
                this.vida = 0;
            }
        }
    }

    colisiona(otraX, otraY, otroTamano) {
        if (this.vida <= 0) return false; 
        let d = dist(this.x, this.y, otraX, otraY);
        let distanciaMinima = (this.tamano / 2) + (otroTamano / 2);
        return d < distanciaMinima;
    }
}
