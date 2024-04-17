
let mat
let rot = 0
let vel = 0
let ultimo = new Vec2(0, 0)

const macchina = []
const scia = []

function setup() {
	createCanvas(800, 600)

	const b = 40
	const a = 20
	macchina.push(rettangolo(-b*0.3,  a*0.5, 8, 6))
	macchina.push(rettangolo(-b*0.3, -a*0.5, 8, 6))
	macchina.push(rettangolo( b*0.3,  a*0.5, 8, 6))
	macchina.push(rettangolo( b*0.3, -a*0.5, 8, 6))
	macchina.push(rettangolo(0, 0, b, a))

	mat = new Mat3()
	mat = mat.trasla(width/2, height/2)

}


const tasti = []

function keyPressed() {
	tasti[key] = true
}

function keyReleased() {
	tasti[key] = false
}

function draw() {
	background(255)

	if      (tasti["ArrowRight"]) rot = min( 0.06, rot + 0.01)
	else if (tasti["ArrowLeft"])  rot = max(-0.06, rot - 0.01)
	rot *= 0.9

	if (tasti["ArrowUp"]) vel = min(3, vel + 0.04)
	else vel = max(0, vel - 0.04)


	mat = mat.ruota(rot)
	mat = mat.trasla(vel, 0)

	const nuovo = mat.moltiplicaVettore(new Vec2(0, 0))
	const d = dist (nuovo.x, nuovo.y, ultimo.x, ultimo.y)

	if (d > 8) {
		ultimo = nuovo
		scia.push(mat.moltiplicaVettore(new Vec2(0, -10)))
		scia.push(mat.moltiplicaVettore(new Vec2(0,  10)))
		if (scia.length > 900) {
			scia.shift()
			scia.shift()
		}
	}

	noFill()
	stroke(200)
	beginShape(QUAD_STRIP)
	for (const p of scia) {
		vertex(p.x, p.y)
	}
	endShape()

	fill(255, 200, 100)
	stroke(0)
	for (const forma of macchina) {
		disegna(forma, mat)
	}

}

function disegna(punti, mat) {
	beginShape()
	for(const p of punti) {
		const tp = mat.moltiplicaVettore(p)
		vertex(tp.x, tp.y)
	}
	endShape(CLOSE)
}


function rettangolo(cx, cy, base, altezza) {
	const v1 = new Vec2(cx - base/2, cy - altezza/2)
	const v2 = new Vec2(cx + base/2, cy - altezza/2)
	const v3 = new Vec2(cx + base/2, cy + altezza/2)
	const v4 = new Vec2(cx - base/2, cy + altezza/2)
	return [v1, v2, v3, v4]
}