
const punti = []

function setup() {

	createCanvas(400, 400)

	punti[0] = new Vec2(10.0, 10.0)
	punti[1] = new Vec2(100, 10.0)
	punti[2] = new Vec2(100, 100)
	punti[3] = new Vec2(10.0, 100)
}

function draw() {

	let m1 = new Mat3()
	let m2 = new Mat3()

	m2 = m2.trasla(width/2, height/2)
	m2 = m2.ruota(frameCount * 0.01)
	m2 = m2.scala(1.7, 0.5)

	const mouse = new Vec2(mouseX, mouseY)
	const mouse1 = m1.moltiplicaVettore(mouse)
	const mouse2 = m2.moltiplicaVettore(mouse)
	const mouse3 = m2.inverti().moltiplicaVettore(mouse)

	background(255)
	noFill()
	disegna(punti, m1)
	disegna(punti, m2)
	circle(mouse1.x, mouse1.y, 10)
	circle(mouse2.x, mouse2.y, 10)
	circle(mouse3.x, mouse3.y, 10)

}

function disegna(punti, mat) {
	beginShape()
	for (const p of punti) {
		const pt = mat.moltiplicaVettore(p)
		vertex(pt.x, pt.y)
	}
	endShape(CLOSE)
}
