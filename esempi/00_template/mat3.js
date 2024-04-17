/*
 * Classe per rappresentare una matrice 3x2
 * [m00 m01 m02]
 * [m10 m11 m12]
 * [ 0   0   1 ]
 * (con ultima riga 0 0 1, per emulare matrice 3x3)
 *
 * Esempio di moltiplica per un vettore:
 * [m00 m01 m02][x]   [m00*x + m01*y + m02*1]   [x']
 * [m10 m11 m12][y] = [m10*x + m11*y + m12*1] = [y']
 * [ 0   0   1 ][1]   [  0*x +   0*y +   1*1]   [ 1]
 */

class Mat3 {

	constructor(m00=1, m01=0, m02=0, m10=0, m11=1, m12=0) {
		this.set(m00, m01, m02, m10, m11, m12)
	}

	set(m00, m01, m02, m10, m11, m12) {
		this.m00 = m00
		this.m01 = m01
		this.m02 = m02
		this.m10 = m10
		this.m11 = m11
		this.m12 = m12
	}

	trasla(tx, ty) {
		const target = this.copia()
		target.m02 = tx*this.m00 + ty*this.m01 + this.m02
		target.m12 = tx*this.m10 + ty*this.m11 + this.m12
		return target
	}

	ruota(theta) {
		const s = Math.sin(theta)
		const c = Math.cos(theta)
		const target = this.copia()
		target.m00 =  c * this.m00 + s * this.m01
		target.m01 = -s * this.m00 + c * this.m01
		target.m10 =  c * this.m10 + s * this.m11
		target.m11 = -s * this.m10 + c * this.m11
		return target
	}

	scala(sx, sy) {
		const target = this.copia()
		target.m00 *= sx
		target.m01 *= sy
		target.m10 *= sx
		target.m11 *= sy
		return target
	}

	moltiplica(mat) {
		const target = new Mat3()
		target.m00 = mat.m00 * this.m00 + mat.m10 * this.m01
		target.m01 = mat.m01 * this.m00 + mat.m11 * this.m01
		target.m02 = mat.m02 * this.m00 + mat.m12 * this.m01 + this.m02
		target.m10 = mat.m00 * this.m10 + mat.m10 * this.m11
		target.m11 = mat.m01 * this.m10 + mat.m11 * this.m11
		target.m12 = mat.m02 * this.m10 + mat.m12 * this.m11 + this.m12
		return target
	}

	moltiplicaVettore(v) {
		const target = new Vec2()
		target.x = this.m00*v.x + this.m01*v.y + this.m02
		target.y = this.m10*v.x + this.m11*v.y + this.m12
		return target
	}

	determinante() {
		return this.m00 * this.m11 - this.m01 * this.m10
	}

	inverti() {
		const d = this.determinante()
		if (Math.abs(d) <= 5e-16) return null

		const target = this.copia()

		target.m00 =  this.m11 / d
		target.m10 = -this.m10 / d
		target.m01 = -this.m01 / d
		target.m11 =  this.m00 / d
		target.m02 = (this.m01 * this.m12 - this.m11 * this.m02) / d
		target.m12 = (this.m10 * this.m02 - this.m00 * this.m12) / d

		return target
	}

	copia() {
		return new Mat3(this.m00, this.m01, this.m02, this.m10, this.m11, this.m12)
	}

	toString() {
		let str = ""
		str += "|" + this.m00.toFixed(2) + " " + this.m01.toFixed(2) + " " + this.m02.toFixed(2) + "|\n"
		str += "|" + this.m10.toFixed(2) + " " + this.m11.toFixed(2) + " " + this.m12.toFixed(2) + "|\n"
		str += "|" +      0.0.toFixed(2) + " " +      0.0.toFixed(2) + " " +      1.0.toFixed(2) + "|\n"
		return str
	}
}