let emojis = [];
let cantidad = 100; // cantidad de emojis
let miEmoji = '🌟'; // el emoji que se repetirá

function setup() {
  createCanvas(400, 400);
  textSize(30);
  textAlign(CENTER, CENTER);

  // Crear instancias de Emoji
  for (let i = 0; i < cantidad; i++) {
    emojis.push(new Emoji(random(width), random(-height, 0), random(1, 4)));
  }
}

function draw() {
  background(50);

  // Mostrar y mover todos los emojis
  for (let e of emojis) {
    e.show();
    e.move();
  }
}

// --- Clase Emoji ---
class Emoji {
  constructor(x, y, velocidad) {
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
  }

  show() {
    text(miEmoji, this.x, this.y);
  }

  move() {
    this.y += this.velocidad;

    // Si sale del lienzo, reaparece arriba
    if (this.y > height + 20) {
      this.y = -20;
      this.x = random(width); // nueva posición horizontal
      this.velocidad = random(1, 4); // nueva velocidad
    }
  }
}


