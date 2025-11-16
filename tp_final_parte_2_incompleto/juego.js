class Juego{
     constructor(){
        this.enemigos = [];
        for( let i = 0 ; i<10 ; i++ ){
            this.enemigos[i] = new Particula( random(2, 5) ); 
        }
        
        this.enemigoEstatico = new Freezer(width / 2, 80); 
        this.balas = []; 

        this.jugador = new Goku( this.enemigos, this.balas );  
        
        this.estado = MENU_PRINCIPAL; 

        this.opcionesMenu = null;
        this.opcionVolver = null;
        this.opcionVolverFinal = null;
     }
  
     dibujar(){
        if (this.estado === JUEGO_ACTIVO) {
            this.actualizarJuegoActivo();
        } else if (this.estado === JUEGO_GANADO) {
            this.mostrarPantallaGanaste();
        } else if (this.estado === JUEGO_PERDIDO) {
            this.mostrarPantallaPerdiste();
        } else if (this.estado === MENU_PRINCIPAL) {
            this.mostrarMenuPrincipal();
        } else if (this.estado === INSTRUCCIONES) {
            this.mostrarInstrucciones();
        } else if (this.estado === CREDITOS) {
            this.mostrarCreditos();
        }
        
        rectMode(CENTER);
     }
    
    actualizarJuegoActivo() {
        this.jugador.mover(); 
        this.jugador.dibujar();
        this.jugador.colisionar(this); 

        for( let i = 0 ; i<10 ; i++ ){
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
            this.estado = JUEGO_GANADO;
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
        text("JUEGO POO", width / 2, height / 4);
        
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

        this.opcionesMenu = { 
            instrucciones: {x: btnX, y: btnY, w: btnW, h: btnH},
            creditos: {x: btnX, y: btnY + spacing, w: btnW, h: btnH},
            jugar: {x: btnX, y: btnY + 2 * spacing, w: btnW, h: btnH}
        };
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
        
        this.opcionVolver = {x: btnX, y: btnY, w: btnW, h: btnH};
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
        
        this.opcionVolver = {x: btnX, y: btnY, w: btnW, h: btnH};
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

        this.opcionVolverFinal = {x: btnX, y: btnY, w: btnW, h: btnH};
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

        this.opcionVolverFinal = {x: btnX, y: btnY, w: btnW, h: btnH};
    }

    teclear(){
        if (this.estado === INSTRUCCIONES || this.estado === CREDITOS) {
            if (keyCode === ESCAPE) this.estado = MENU_PRINCIPAL;
        } else if (this.estado === JUEGO_GANADO || this.estado === JUEGO_PERDIDO) {
            if (keyCode === ENTER) this.estado = MENU_PRINCIPAL;
        } else if (this.estado === JUEGO_ACTIVO) {
            if (keyCode === 32) this.jugador.disparar();
        }
    }
    
    manejarClicks() {
        if (this.estado === MENU_PRINCIPAL && this.opcionesMenu) {
            let ops = this.opcionesMenu;
            if (this.estaEnArea(ops.instrucciones.x, ops.instrucciones.y, ops.instrucciones.w, ops.instrucciones.h)) {
                this.estado = INSTRUCCIONES;
            } else if (this.estaEnArea(ops.creditos.x, ops.creditos.y, ops.creditos.w, ops.creditos.h)) {
                this.estado = CREDITOS;
            } else if (this.estaEnArea(ops.jugar.x, ops.jugar.y, ops.jugar.w, ops.jugar.h)) {
                videojuego = new Juego(); 
                videojuego.estado = JUEGO_ACTIVO; 
            }
        } else if ((this.estado === INSTRUCCIONES || this.estado === CREDITOS) && this.opcionVolver) {
             if (this.estaEnArea(this.opcionVolver.x, this.opcionVolver.y, this.opcionVolver.w, this.opcionVolver.h)) {
                this.estado = MENU_PRINCIPAL;
            }
        } else if ((this.estado === JUEGO_GANADO || this.estado === JUEGO_PERDIDO) && this.opcionVolverFinal) {
             if (this.estaEnArea(this.opcionVolverFinal.x, this.opcionVolverFinal.y, this.opcionVolverFinal.w, this.opcionVolverFinal.h)) {
                this.estado = MENU_PRINCIPAL;
            }
        }
    }
}
