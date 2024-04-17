
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

	background(255)
	translate(width/2, height/2)

	// K
	for (let i=0; i<100; i++) {

		const rot = Math.sin(frameCount * 0.002 + i * 0.003) * TAU
		const s = Math.sin(frameCount * 0.02 + i * 0.05) * 10 + 15
		const tx = Math.sin(frameCount * 0.006 + i * 0.05) * 50
		const ty = Math.sin(frameCount * 0.007 + i * 0.05) * 50
		let m = new Mat3()
		m = m.ruota(rot)
		m = m.trasla(tx, ty)
		m = m.scala(s, s)


		stroke(0)
		fill(255)
		beginShape()
		for (let i=0; i<punti.length; i++) {
			const pt = m.moltiplicaVettore(punti[i]/*.somma(new Vec2(10, -5))*/)
			vertex(pt.x, pt.y)
		}
		endShape(CLOSE)
	}
}
