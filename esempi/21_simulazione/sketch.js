
const sim = new Sim()


function setup() {
	createCanvas(500, 500)


	sim.frizione = 0.97          // default : 0.95
	sim.g = new Vec2(0, 1) // default : Vec2(0, 0)

	const p1 = sim.aggiungiPunto(width/2, height/2, 4)
	p1.fisso = true

	const p2 = sim.aggiungiPunto(width/2+50, height/2, 4)
	sim.aggiungiMolla(p1, p2)

}

function draw() {
	background(255)

	sim.aggiorna()
	sim.bordi(0, 0, width, height)


	stroke(0, 200, 255)
	for (const m of sim.molle) {
		line(m.a.pos.x, m.a.pos.y, m.b.pos.x, m.b.pos.y)
	}

	noStroke()
	fill(0)
	strokeWeight(2)
	for (const p of sim.punti) {
		rect(p.pos.x-p.raggio, p.pos.y-p.raggio, p.raggio*2, p.raggio*2)
	}
}
