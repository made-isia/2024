
let achille = new Vec2(0, 0)


function setup() {
	createCanvas(500, 500)
	background(255)
}

function mousePressed() {
	background(255)
}

function draw() {
	background(255)

	const tartaruga = new Vec2(mouseX, mouseY)

	const spostamento = tartaruga.sottrai(achille)

	achille = achille.somma(spostamento.moltiplica(0.03))

	spostamento.moltiplica(0.5).disegna(color(255,0,0), achille)

	noFill()
	// stroke(255,0,0)
	// circle(tartaruga.x, tartaruga.y, 10, 10)
	stroke(0,0,255)
	circle(achille.x, achille.y, 30, 30)


}
