
const punti = []

function setup() {

	createCanvas(500, 500)

	punti[ 0] = new Vec2(0.00, 0.00)
	punti[ 1] = new Vec2(2.14, 0.00)
	punti[ 2] = new Vec2(2.14, 5.14)
	punti[ 3] = new Vec2(4.53, 2.61)
	punti[ 4] = new Vec2(7.15, 2.61)
	punti[ 5] = new Vec2(4.60, 5.24)
	punti[ 6] = new Vec2(7.48, 10.0)
	punti[ 7] = new Vec2(4.96, 10.0)
	punti[ 8] = new Vec2(3.06, 6.81)
	punti[ 9] = new Vec2(2.12, 7.96)
	punti[10] = new Vec2(2.12, 10.0)
	punti[11] = new Vec2(0.00, 10.0)
}

function draw() {

	let m = new Mat3()
	// NOTA: l'ordine delle trasformazioni è importante!
	//       Non è commutativo!

	m = m.trasla(100, 0)
	m = m.ruota(mouseX * 0.01)
	m = m.scala(10, 10)

	background(255)

	// Testo
	fill(0)
	noStroke()
	text(m.toString(), 20, 40)

	// Origine
	translate(width/2, height/2)
	stroke(0, 30)
	line(0, -height/2, 0, height/2)
	line(-width/2, 0, width/2, 0)

	// K
	stroke(0)
	noFill()
	beginShape()
	for (let i=0; i<punti.length; i++) {
		const pt = m.moltiplicaVettore(punti[i])
		vertex(pt.x, pt.y)
	}
	endShape(CLOSE)


}
