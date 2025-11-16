class Freezer {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.tamano = 80; 
        this.vida = 100; 
        this.velocidadX = 2; 
        
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
            fill(0, 100, 200); 
            noStroke();
            rect(this.x, this.y, this.tamano, this.tamano);
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
