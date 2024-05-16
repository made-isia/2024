
class Punto{
	constructor(x, y, r){
		this.pos = new Vec2(x, y)
		this.pre = new Vec2(x, y)
		this.raggio = r
		this.fisso = false
	}
}

class Molla{
	constructor(a, b, k, l){
		this.a = a
		this.b = b
		this.length = l
		this.k = k
	}
}

class Sim {

	punti
	molle

	constructor() {
		this.clear()
		this.frizione = 0.95
		this.g = new Vec2(0, 0)
	}

	clear(){
		this.punti = []
		this.molle = []
	}

	aggiorna(passi=1){
		// punti
		for (const p of this.punti) {
			if (p.fisso) continue
			let v = p.pos.sottrai(p.pre)
			v = v.somma(this.g)
			v = v.moltiplica(this.frizione)
			p.pre = p.pos.copia()
			p.pos = p.pos.somma(v)
		}

		// molle
		const sub_step = 1.0 / passi
		for (let i=0; i<passi; i++){
			for (const l of this.molle){
				let v = l.a.pos.sottrai(l.b.pos)
				const m = v.modulo()
				v = v.moltiplica((l.length - m) / m * l.k * sub_step)
				if (!l.a.fisso) l.a.pos = l.a.pos.somma(v)
				if (!l.b.fisso) l.b.pos = l.b.pos.sottrai(v)
			}
		}

		// reset fisso
		for (const p of this.punti){
			if (p.fisso) {
				p.pos.x = p.pre.x
				p.pos.y = p.pre.y
			}
		}
	}

	aggiungiPunto(x, y, r=1){
		const p = new Punto(x, y, r)
		this.punti.push(p)
		return p
	}

	rimouviPunto(p) {
		const idx = this.punti.indexOf(p)
		if (idx >= 0) {
			this.punti.splice(idx, 1)
		} else {
			console.warn("Non ci sono più punti da rimuovere.")
		}
	}

	aggiungiMolla(a, b, k = 0.1, length = null){
		if(length === null){
			length = a.pos.sottrai(b.pos).modulo()
		}

		const l = new Molla(a, b, k, length)
		this.molle.push(l)
		return l
	}


	bordi(x, y, w, h){
		const x1 = x + w
		const y1 = y + h
		const smorzamento = 0.5
		for (const p of this.punti){
			const r = p.raggio
			if (p.pos.x + r >= x1){
				const d = (p.pos.x - p.pre.x) * smorzamento
				p.pre.x = x1 - r + d
				p.pos.x = x1 - r
			} else if (p.pos.x - r < x){
				const d = (p.pos.x - p.pre.x) * smorzamento
				p.pre.x = x + r + d
				p.pos.x = x + r
			}

			if (p.pos.y + r >= y1){
				const d = (p.pos.y - p.pre.y) * smorzamento
				p.pre.y = y1 - r + d
				p.pos.y = y1 - r
			} else if (p.pos.y - r < y){
				const d = (p.pos.y - p.pre.y) * smorzamento
				p.pre.y = y + r + d
				p.pos.y = y + r
			}
		}
	}
}
