class Juego {
    constructor(pelot, gok, freeze) {
      
        this.MENU_PRINCIPAL = 1;
        this.JUEGO_ACTIVO = 2;
        this.JUEGO_GANADO = 3;
        this.JUEGO_PERDIDO = 4;
        this.INSTRUCCIONES = 5;
        this.CREDITOS = 6;
        
        this.enemigos = [];
        for (let i = 0; i < 10; i++) {
            this.enemigos[i] = new Particula(random(2, 5),pelot);
        }

        this.enemigoEstatico = new Freezer(width / 2, 80, freeze);
        this.balas = [];

        this.jugador = new Goku(this.enemigos, this.balas,this, gok);

        this.estado = this.MENU_PRINCIPAL;

        this.instruccionesX = 0;
        this.instruccionesY = 0;
        this.instruccionesW = 0;
        this.instruccionesH = 0;
        this.creditosX = 0;
        this.creditosY = 0;
        this.creditosW = 0;
        this.creditosH = 0;
        this.jugarX = 0;
        this.jugarY = 0;
        this.jugarW = 0;
        this.jugarH = 0;
        
        this.volverX = 0;
        this.volverY = 0;
        this.volverW = 0;
        this.volverH = 0;

        this.volverFinalX = 0;
        this.volverFinalY = 0;
        this.volverFinalW = 0;
        this.volverFinalH = 0;
    }

    dibujar() {
        if (this.estado === this.JUEGO_ACTIVO) {
            this.actualizarJuegoActivo();
        } else if (this.estado === this.JUEGO_GANADO) {
            this.mostrarPantallaGanaste();
        } else if (this.estado === this.JUEGO_PERDIDO) {
            this.mostrarPantallaPerdiste();
        } else if (this.estado === this.MENU_PRINCIPAL) {
            this.mostrarMenuPrincipal();
        } else if (this.estado === this.INSTRUCCIONES) {
            this.mostrarInstrucciones();
        } else if (this.estado === this.CREDITOS) {
            this.mostrarCreditos();
        }

        rectMode(CENTER);
    }

    actualizarJuegoActivo() {
        this.jugador.mover();
        this.jugador.dibujar();
        this.jugador.colisionar(this);

        for (let i = 0; i < 10; i++) {
            this.enemigos[i].actualizar();
            this.enemigos[i].dibujar();
            this.enemigos[i].reciclar();
        }

        this.enemigoEstatico.actualizar();
        this.enemigoEstatico.mostrar();

        for (let i = this.balas.length - 1; i >= 0; i--) {
            let bala = this.balas[i];
            bala.actualizar();
            bala.mostrar();

            if (bala.estaActiva && this.enemigoEstatico.colisiona(bala.x, bala.y, bala.radio * 2)) {
                this.enemigoEstatico.recibirDano(bala.dano);
                bala.estaActiva = false;
            }

            if (!bala.estaActiva) {
                this.balas.splice(i, 1);
            }
        }

        if (this.enemigoEstatico.vida <= 0) {
            this.estado = this.JUEGO_GANADO;
        }
    }

    estaEnArea(x, y, w, h) {
        return mouseX >= x && mouseX <= x + w && mouseY >= y && mouseY <= y + h;
    }

    mostrarMenuPrincipal() {
        background(50, 50, 50);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("Juego Goku vs Freezer (tipo nave)", width / 2, height / 4);

        let btnY = height / 2;
        let btnH = 40;
        let btnW = 200;
        let btnX = width / 2 - btnW / 2;
        let spacing = 60;

        rectMode(CORNER);

        fill(100, 100, 100); rect(btnX, btnY, btnW, btnH, 8);
        fill(255); textSize(24); text("Instrucciones", width / 2, btnY + btnH / 2);

        fill(100, 100, 100); rect(btnX, btnY + spacing, btnW, btnH, 8);
        fill(255); text("Créditos", width / 2, btnY + spacing + btnH / 2);

        fill(200, 50, 50); rect(btnX, btnY + 2 * spacing, btnW, btnH, 8);
        fill(255); text("Jugar", width / 2, btnY + 2 * spacing + btnH / 2);

        this.instruccionesX = btnX;
        this.instruccionesY = btnY;
        this.instruccionesW = btnW;
        this.instruccionesH = btnH;
        
        this.creditosX = btnX;
        this.creditosY = btnY + spacing;
        this.creditosW = btnW;
        this.creditosH = btnH;
        
        this.jugarX = btnX;
        this.jugarY = btnY + 2 * spacing;
        this.jugarW = btnW;
        this.jugarH = btnH;
    }

    mostrarInstrucciones() {
        background(0, 50, 100);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(40);
        text("INSTRUCCIONES", width / 2, height / 4);
        textSize(20);
        textAlign(LEFT, TOP);
        text("Objetivo: Destruye a Freezer.", width / 4, height / 3);
        text("Controles: Flechas para mover, Espacio para atacar.", width / 4, height / 2);

        let btnW = 200; let btnH = 40;
        let btnX = width / 2 - btnW / 2; let btnY = height * 0.85;

        rectMode(CORNER);
        fill(100, 100, 100); rect(btnX, btnY, btnW, btnH, 8);
        fill(255); textAlign(CENTER, CENTER); text("Volver al Menú", width / 2, btnY + btnH / 2);

        this.volverX = btnX;
        this.volverY = btnY;
        this.volverW = btnW;
        this.volverH = btnH;
    }

    mostrarCreditos() {
        background(50, 100, 50);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(40);
        text("CRÉDITOS", width / 2, height / 4);
        textSize(24);
        text("Desarrollado por: Carlos Acuña y Joaquin Montiel", width / 2, height / 2);

        let btnW = 200; let btnH = 40;
        let btnX = width / 2 - btnW / 2; let btnY = height * 0.85;

        rectMode(CORNER);
        fill(100, 100, 100); rect(btnX, btnY, btnW, btnH, 8);
        fill(255); text("Volver al Menú", width / 2, btnY + btnH / 2);

        this.volverX = btnX;
        this.volverY = btnY;
        this.volverW = btnW;
        this.volverH = btnH;
    }

    mostrarPantallaGanaste() {
        background(0, 150, 0);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("GANASTE", width / 2, height / 2);

        let btnW = 250; let btnH = 40;
        let btnX = width / 2 - btnW / 2; let btnY = height * 0.75;

        rectMode(CORNER);
        fill(100, 100, 100); rect(btnX, btnY, btnW, btnH, 8);
        fill(255); textSize(24); text("Menú", width / 2, btnY + btnH / 2);

        this.volverFinalX = btnX;
        this.volverFinalY = btnY;
        this.volverFinalW = btnW;
        this.volverFinalH = btnH;
    }

    mostrarPantallaPerdiste() {
        background(150, 0, 0);
        fill(255);
        textAlign(CENTER, CENTER);
        textSize(48);
        text("PERDISTE", width / 2, height / 2);

        let btnW = 250; let btnH = 40;
        let btnX = width / 2 - btnW / 2; let btnY = height * 0.75;

        rectMode(CORNER);
        fill(100, 100, 100); rect(btnX, btnY, btnW, btnH, 8);
        fill(255); textSize(24); text("Menú", width / 2, btnY + btnH / 2);

        this.volverFinalX = btnX;
        this.volverFinalY = btnY;
        this.volverFinalW = btnW;
        this.volverFinalH = btnH;
    }

    teclear() {
        if (this.estado === this.INSTRUCCIONES || this.estado === this.CREDITOS) {
            if (keyCode === ESCAPE) this.estado = this.MENU_PRINCIPAL;
        } else if (this.estado === this.JUEGO_GANADO || this.estado === this.JUEGO_PERDIDO) {
            if (keyCode === ENTER) this.estado = this.MENU_PRINCIPAL;
        } else if (this.estado === this.JUEGO_ACTIVO) {
            if (keyCode === 32) this.jugador.disparar();
        }
    }

    manejarClicks() {
        if (this.estado === this.MENU_PRINCIPAL) {
            
            if (this.estaEnArea(this.instruccionesX, this.instruccionesY, this.instruccionesW, this.instruccionesH)) {
                this.estado = this.INSTRUCCIONES;
            } 
            else if (this.estaEnArea(this.creditosX, this.creditosY, this.creditosW, this.creditosH)) {
                this.estado = this.CREDITOS;
            } 
            else if (this.estaEnArea(this.jugarX, this.jugarY, this.jugarW, this.jugarH)) {
                videojuego = new Juego(pelota,goku,freezer);
                videojuego.estado = this.JUEGO_ACTIVO;
            }
        
        } 
        else if (this.estado === this.INSTRUCCIONES || this.estado === this.CREDITOS) {
            if (this.estaEnArea(this.volverX, this.volverY, this.volverW, this.volverH)) {
                this.estado = this.MENU_PRINCIPAL;
            }
        } 
        else if (this.estado === this.JUEGO_GANADO || this.estado === this.JUEGO_PERDIDO) {
            if (this.estaEnArea(this.volverFinalX, this.volverFinalY, this.volverFinalW, this.volverFinalH)) {
                this.estado = this.MENU_PRINCIPAL;
            }
        }
    }
}
