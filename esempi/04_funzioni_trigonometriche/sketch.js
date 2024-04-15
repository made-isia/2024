function setup() {
	createCanvas(500, 500)
}

function draw() {

	const raggio = 180
	const angolo = mouseX / width * TAU
	const x = cos(angolo) * raggio
	const y = sin(angolo) * raggio

	background(255)
	translate(width/2, height/2)

	noFill()
	stroke(0)

	// Assi
	strokeWeight(1)
	line(-width/2, 0, width/2, 0)
	line(0, -height/2, 0, height/2)

	// Cerchio
	ellipse(0, 0, raggio * 2, raggio * 2)

	// Raggio
	line(0, 0, x, y)

	// Coseno
	stroke(255,0,0)
	strokeWeight(3)
	line(x, 0, x, y)

	// Seno
	stroke(0,255,0)
	strokeWeight(3)
	line(0, y, x, y)

	// Tangente
	// ?

}

function keyPressed() {

}