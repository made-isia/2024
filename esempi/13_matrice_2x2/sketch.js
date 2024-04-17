function setup() {
	createCanvas(500, 500)
}

function draw() {

	const p1 = new Vec2(0, 100)
	const p2 = new Vec2(0, 0)
	const p3 = new Vec2(50, 0)

	let m = new Mat2()
	m = m.ruota(mouseX * 0.01)
	m = m.scala(-1, 1)


	const t1 = m.moltiplicaVettore(p1)
	const t2 = m.moltiplicaVettore(p2)
	const t3 = m.moltiplicaVettore(p3)

	background(255)

	// Testo
	fill(0)
	noStroke()
	text(m.toString(), 20, 40)

	// Origine
	strokeWeight(1)
	translate(width/2, height/2)
	stroke(0, 30)
	line(0, -height/2, 0, height/2)
	line(-width/2, 0, width/2, 0)


	noFill()
	strokeWeight(2)

	stroke(200)
	beginShape()
	vertex(p1.x, p1.y)
	vertex(p2.x, p2.y)
	vertex(p3.x, p3.y)
	endShape()

	stroke(0)
	beginShape()
	vertex(t1.x, t1.y)
	vertex(t2.x, t2.y)
	vertex(t3.x, t3.y)
	endShape()


}
