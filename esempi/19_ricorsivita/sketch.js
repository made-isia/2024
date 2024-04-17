let seed = 0

function setup() {
	createCanvas(500, 500)
}

function mousePressed() {
	seed = Math.floor(millis())
}

function draw() {
	background(255)
	randomSeed(seed)
	ramo(width * 0.6, height, -PI/2, 80, 7)

	ramo(width * 0.3, height, -PI/2, 100, 10)

	fill(0)
	text("Seed: " + seed, 10, 30)
}


function ramo(cx, cy, angolo, lunghezza, iterazione) {

	const px = cx + cos(angolo) * lunghezza
	const py = cy + sin(angolo) * lunghezza

	strokeWeight(lunghezza * 0.1)
	stroke(0)
	line(cx, cy, px, py)

	if (iterazione > 0) {
		ramo(px, py, angolo + random(0.1, 0.5), lunghezza * random(0.6, 0.9), iterazione-1)
		ramo(px, py, angolo - random(0.1, 0.5), lunghezza * random(0.6, 0.9), iterazione-1)
	} else {
		noStroke()
		fill(255,0,0)
		ellipse(px, py, 5, )
	}

	// if (iterazione > 0) {
	// 	ramo(px, py, angolo + mouseX * 0.01, lunghezza * 0.8, iterazione-1)
	// 	ramo(px, py, angolo - mouseX * 0.01, lunghezza * 0.8, iterazione-1)
	// }
}
