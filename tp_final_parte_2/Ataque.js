class Ataque {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radio = 5;
        this.velocidad = 10;
        this.dano = 10;
        this.velX = 0; 
        this.velY = -1 * this.velocidad; 
        this.estaActiva = true;
    }

    actualizar() {
        if (this.estaActiva) {
            this.x += this.velX;
            this.y += this.velY;
            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.estaActiva = false;
            }
        }
    }

    mostrar() {
        if (this.estaActiva) {
            fill(255, 255, 0); 
            noStroke();
            ellipse(this.x, this.y, this.radio * 2);
        }
    }
}
