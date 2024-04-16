let px, py
let vx, vy
let vel

function setup() {
	createCanvas(500, 500)
	px = width/2
	py = height/2

	vel = 3
	vx  = 4
	vy  = -3

	// Calcoliamo il modulo del nostro vettore velocità:
	const modulo = sqrt(vx * vx + vy * vy)
	console.log("modulo = " + modulo)
	console.log("vx, vy = " + vx + ", " + vy)

	// Normalizziamo il vettore velocità:
	vx = vx / modulo
	vy = vy / modulo
	console.log("modulo = " + sqrt(vx * vx + vy * vy))
	console.log("vx, vy = " + vx + ", " + vy)


	vx = vx * vel
	vy = vy * vel
	console.log("modulo = " + sqrt(vx * vx + vy * vy))
	console.log("vx, vy = " + vx + ", " + vy)

	background(255)
}

function draw() {

	px = px + vx
	py = py + vy

	if (px < 0 || px > width) {
		vx = -vx
		fill(random(255),random(255),random(255))
	}

	if (py < 0 || py > height) {
		vy = -vy
		fill(random(255),random(255),random(255))
	}

	circle(px, py, 30)

}
