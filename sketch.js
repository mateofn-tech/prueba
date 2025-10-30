let emojis = ["🐦", "🌈", "💫", "✨", "🍀", "🌸"];
let bocas = ["👄", "👅"];
let bocaActual = 0;

let pardales = []; // array de conjuntos

function setup() {
  createCanvas(1900, 1800); 
  textSize(16); // emojis más pequeños para que quepan

  // Creamos 4 conjuntos, separados horizontalmente
  for (let i = 0; i < 4; i++) {
    pardales.push(new Pardal(i * 100)); // 100 px de separación
  }
}

function draw() {
  background(0, 150, 255); // fondo azul

  // Dibujar todos los conjuntos
  for (let p of pardales) {
    p.mover();
    p.show();
  }

  // Mostrar emojis arriba
  fill(0);
  noStroke();
  textAlign(LEFT, TOP);
  text(emojis.join(" "), 10, 10);
}

// Cambiar boca al hacer clic
function mousePressed() {
  bocaActual = (bocaActual + 1) % bocas.length;
}

class Pardal {
  constructor(offsetX) {
    this.x = offsetX;
    this.y = 50;
    this.escala = 0.4; // escala más pequeña para caber en el lienzo
    this.vel = 1.5;    // velocidad más lenta
  }

  mover() {
    this.x += this.vel;
    if (this.x > width - 100 || this.x < 0) { // límite adaptado a la escala
      this.vel *= -1;
    }
  }

  show() {
    push();
    translate(this.x + 50, this.y + 50);
    scale(this.escala);

    stroke(0);

    // Triángulo rosa
    fill(255, 105, 180);
    triangle(50, 300, 150, 300, 100, 200);

    // Naranja con degradado
    noStroke();
    for (let r = 50; r > 0; r--) {
      let inter = map(r, 50, 0, 0, 1);
      let c = lerpColor(color(255, 140, 0), color(255, 200, 0), inter);
      fill(c);
      ellipse(200, 250, r*2, r*2);
    }

    // Tallo y hoja
    stroke(34, 139, 34);
    strokeWeight(4);
    line(200, 200, 200, 220);

    fill(34, 139, 34);
    noStroke();
    ellipse(210, 200, 20, 10);

    strokeWeight(1);

    // Ojos
    fill(0);
    noStroke();
    ellipse(185, 240, 10, 10);
    ellipse(215, 240, 10, 10);

    // Boca
    textAlign(CENTER, CENTER);
    textSize(16);
    text(bocas[bocaActual], 200, 260);

    pop();
  }
}
