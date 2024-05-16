
const sim = new Sim()

let puntoSelezionato = null

function setup() {
	createCanvas(800, 600)

	sim.frizione = 0.97    // default : 0.95
	sim.g = new Vec2(0, 1) // default : Vec2(0, 0)

	// --- costruiamo una catena ---

	const num = 12;
	for (let i = 0; i < num; i++) {
		sim.aggiungiPunto(200 + i * 10, 100, 3);
	}
	for (let i = 0; i < num - 1; i++) {
		const a = sim.punti[i];
		const b = sim.punti[i + 1]
		sim.aggiungiMolla(a, b, 0.4)
	}
	// il primo punto è ancorato
	sim.punti[0].fisso = true


	// --- costruiamo una scatola ---

	const k = 0.5
	const sx = 500 // centro della scatola (x)
	const sy = 300 // centro della scatola (y)
	const sw = 100 // larghezza della scatola
	const sh = 100 // altezza
	const a = sim.aggiungiPunto(sx - sw / 2, sy - sh / 2, 3)
	const b = sim.aggiungiPunto(sx + sw / 2, sy - sh / 2, 3)
	const c = sim.aggiungiPunto(sx + sw / 2, sy + sh / 2, 3)
	const d = sim.aggiungiPunto(sx - sw / 2, sy + sh / 2, 3)
	sim.aggiungiMolla(a, b, k) // lati
	sim.aggiungiMolla(b, c, k)
	sim.aggiungiMolla(c, d, k)
	sim.aggiungiMolla(d, a, k)
	sim.aggiungiMolla(a, c, k) // diagonali
	sim.aggiungiMolla(b, d, k)

	// agganciamo la scatola all'ulimto punto della catena
	sim.aggiungiMolla(sim.punti[num - 1], d, 0.4, 10)

}

function draw() {
	background(255)

	sim.aggiorna()

	if (puntoSelezionato != null) {
		puntoSelezionato.pos.x = mouseX
		puntoSelezionato.pos.y = mouseY
	}

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

function mousePressed() {
	puntoSelezionato = sim.puntoVicinoA(mouseX, mouseY, 20)
}

function mouseReleased() {
	puntoSelezionato = null
}