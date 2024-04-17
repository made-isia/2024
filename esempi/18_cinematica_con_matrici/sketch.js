

function setup() {
	createCanvas(500, 500)

	background(255)


	const b = 80
	const a = 30

	const r1 = rettangolo(0, 0, b, a)
	const r2 = rettangolo( b*0.3,  a*0.5, 16, 8)
	const r3 = rettangolo(-b*0.3,  a*0.5, 16, 8)
	const r4 = rettangolo(-b*0.3, -a*0.5, 16, 8)
	const r5 = rettangolo( b*0.3, -a*0.5, 16, 8)

	translate (width/2, height/2)

	disegna(r2)
	disegna(r3)
	disegna(r4)
	disegna(r5)

	disegna(r1)

}

function draw() {

}

function disegna(punti) {
	beginShape()
	for(const p of punti) {
		vertex(p.x, p.y)
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