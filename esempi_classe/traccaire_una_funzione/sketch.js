
function setup() {
	createCanvas(800, 600)
}

function G(x) {
	return sin(x * 5 + mouseY * 0.01)
}

function H(x) {
	return sin(x * 3 + mouseX * 0.01)
}

function NOISE(x) {
	return noise(x) * 2 - 1
}

function draw() {
	background(255)

	// Disegno assi
	stroke(200)
	strokeWeight(1)
	line(0, height / 2, width, height / 2)
	line(width / 2, 0, width / 2, height)


	// Definizione della scala
	const mx = 5
	const my = 5
	const res = 300

	noFill()
	strokeWeight(2)

	// Traccia funzione G
	stroke(255, 0, 0)
	tracciaFN(G, mx, my, res)

	// Traccia funzione H
	stroke(0, 0, 255)
	tracciaFN(H, mx, my, res)

	// stroke(0, 255, 0)
	// tracciaFN(NOISE, mx, my, res)

	// Traccia funzione parametrica (G, H)
	stroke(255, 128, 0)
	tracciaFP(G, H, mx, my, res)

}



function tracciaFP(fnX, fnY, mx, my, res) {
	beginShape()
	for (let i = 0; i < res + 1; i++) {
		const t = map(i, 0, res, -mx, mx)
		const x = fnX(t)
		const y = fnY(t)
		const x_plot = map(x, -mx, mx, 0, width)
		const y_plot = map(y, -my, my, 0, height)
		vertex(x_plot, y_plot)
	}
	endShape()
}

function tracciaFN(fn, mx, my, res) {
	beginShape()
	for (let i = 0; i < res + 1; i++) {
		const x = map(i, 0, res, -mx, mx)
		const y = fn(x)
		const x_plot = map(x, -mx, mx, 0, width)
		const y_plot = map(y, -my, my, 0, height)
		vertex(x_plot, y_plot)
	}
	endShape()
}
