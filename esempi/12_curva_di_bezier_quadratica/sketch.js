function setup() {
	createCanvas(500, 500)
}

function draw() {

	const A = new Vec2(100, 400)
	const C = new Vec2(mouseX, mouseY)
	const B = new Vec2(400, 360)


	background(255)
	noFill()

	// Curva
	const num = 40 // numero di punti da disegnare
	stroke(255,0,0)
	noFill()
	beginShape()
	strokeWeight(3)
	for (let i=0; i<num+1; i++) {
		const t = i / num
		const AC = C.sottrai(A).moltiplica(t).somma(A)
		const CB = B.sottrai(C).moltiplica(t).somma(C)
		const punto = CB.sottrai(AC).moltiplica(t).somma(AC)
		vertex(punto.x, punto.y)
	}
	endShape()

	// Animazione
	const t = sin(frameCount * 0.02) * 0.5 + 0.5
	const AC = C.sottrai(A).moltiplica(t).somma(A)
	const CB = B.sottrai(C).moltiplica(t).somma(C)
	const punto = CB.sottrai(AC).moltiplica(t).somma(AC)
	noStroke()
	fill(0)
	circle(AC.x, AC.y, 8)
	circle(CB.x, CB.y, 8)
	circle(punto.x, punto.y, 8)

	// Telaio
	stroke(0, 60)
	strokeWeight(1)
	line(A.x, A.y, C.x, C.y)
	line(C.x, C.y, B.x, B.y)
	line(AC.x, AC.y, CB.x, CB.y)


	// Punti di controllo
	stroke(0)
	noFill()
	strokeWeight(1)
	circle(A.x, A.y, 30)
	circle(C.x, C.y, 30)
	circle(B.x, B.y, 30)


}
