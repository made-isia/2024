function setup() {
	createCanvas(500, 500)
}

function draw() {

	const A = new Vec2(50, 70)
	const B = new Vec2(mouseX, mouseY)
	const C = B.sottrai(A)
	const lunghezza = 15
	const num = Math.floor(C.modulo() / lunghezza)

	background(255)

	noFill()
	stroke(0)
	circle(A.x, A.y, 22, 22)
	circle(B.x, B.y, 22, 22)

	noStroke()
	fill(0)
	for (let i=0; i<num+1; i++) {
		const p = C.molt(i / num).somma(A)
		circle(p.x, p.y, i % 2 * 7 + 10)
	}
}
