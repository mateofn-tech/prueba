let emojis = ["🐦", "🌈", "💫", "✨", "🍀", "🌸"];
let bocas = ["👄", "👅"];
let bocaActual = 0;

let pardales = []; // array de conjuntos

function setup() {
  createCanvas(400, 400);
  textSize(16);

  // Creamos 4 conjuntos, separados horizontalmente
  for (let i = 0; i < 4; i++) {
    pardales.push(new Pardal(i * 100)); // separación 100px
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
    this.escala = 0.5; // escala un poco mayor
    this.vel = 1.5;
  }

  mover() {
    this.x += this.vel;
    if (this.x > width - 100 || this.x < 0) {
      this.vel *= -1;
    }
  }

  show() {
    push();
    translate(this.x + 40, this.y + 40); // posición inicial ajustada
    scale(this.escala);

    stroke(0);

    // Triángulo rosa (base abajo)
    fill(255, 105, 180);
    triangle(0, 60, 60, 60, 30, 20);

    // Naranja con degradado
    noStroke();
    for (let r = 25; r > 0; r--) {
      let inter = map(r, 25, 0, 0, 1);
      let c = lerpColor(color(255, 140, 0), color(255, 200, 0), inter);
      fill(c);
      ellipse(80, 50, r*2, r*2);
    }

    // Tallo y hoja
    stroke(34, 139, 34);
    strokeWeight(3);
    line(80, 25, 80, 10); // tallo
    fill(34, 139, 34);
    noStroke();
    ellipse(90, 10, 15, 8); // hoja

    strokeWeight(1);

    // Ojos
    fill(0);
    noStroke();
    ellipse(70, 50, 5, 5); // ojo izquierdo
    ellipse(90, 50, 5, 5); // ojo derecho

    // Boca
    textAlign(CENTER, CENTER);
    textSize(12);
    text(bocas[bocaActual], 80, 65);

    pop();
  }
}
