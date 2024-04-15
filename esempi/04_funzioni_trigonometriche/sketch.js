function setup() {
	createCanvas(500, 500)
}

function draw() {

	const raggio = 120
	const angolo = mouseX / width * TAU * 2
	const c = cos(angolo)
	const s = sin(angolo)
	const t = tan(angolo)
	const x = c * raggio
	const y = s * raggio

	background(255)

	// Valori numerici
	noStroke()
	fill(0)
	text("ang: " + angolo.toFixed(2), 10, 30 + 16 * 0)

	fill(200,0,0)
	text("cos: " +      c.toFixed(2), 10, 30 + 16 * 1)

	fill(0,200,0)
	text("sin: " +      s.toFixed(2), 10, 30 + 16 * 2)

	fill(0,0,200)
	text("tan: " +      t.toFixed(2), 10, 30 + 16 * 3)

	translate(width/2, height/2)

	noFill()

	// Assi
	strokeWeight(1)
	stroke(0, 80)
	line(-width/2, 0, width/2, 0)
	line(0, -height/2, 0, height/2)

	// Cerchio
	ellipse(0, 0, raggio * 2, raggio * 2)

	// Raggio
	line(0, 0, x, y)

	// Arco
	stroke(0)
	strokeWeight(3)
	arc(0, 0, 50, 50, 0, angolo)


	// Coseno
	stroke(200,0,0)
	line(x, 0, x, y)

	// Seno
	stroke(0,200,0)
	strokeWeight(3)
	line(0, y, x, y)

	// Tangente
	stroke(0,0,200)
	line(x, y, x + y * t, y - x * t)

}

function keyPressed() {

}