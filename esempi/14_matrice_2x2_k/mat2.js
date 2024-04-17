/*
 * Classe per rappresentare una matrice 2x2
 * |m00 m01|
 * |m10 m11|
 *
 * Esempio di moltiplica per un vettore:
 * |m00 m01||x|   |m00*x + m01*y|   |x'|
 * |m10 m11||y| = |m10*x + m11*y| = |y'|
 *
 */

class Mat2 {

  constructor(m00=1, m01=0, m10=0, m11=1) {
    this.set(m00, m01, m10, m11)
  }

  set(m00, m01, m10, m11) {
    this.m00 = m00
    this.m01 = m01
    this.m10 = m10
    this.m11 = m11
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
    const target = new Mat2()
    target.m00 = mat.m00 * this.m00 + mat.m10 * this.m01
    target.m01 = mat.m01 * this.m00 + mat.m11 * this.m01
    target.m10 = mat.m00 * this.m10 + mat.m10 * this.m11
    target.m11 = mat.m01 * this.m10 + mat.m11 * this.m11
    return target
  }

  moltiplicaVettore(v) {
    const target = new Vec2()
    target.x = this.m00*v.x + this.m01*v.y
    target.y = this.m10*v.x + this.m11*v.y
    return target
  }

  determinante() {
    return this.m00 * this.m11 - this.m01 * this.m10
  }

  inverti() {
    const d = determinante()
    if (Math.abs(d) <= 5e-16) return null

    const target = this.copia()

    target.m00 =  this.m11 / d
    target.m10 = -this.m10 / d
    target.m01 = -this.m01 / d
    target.m11 =  this.m00 / d

    return target
  }

  copia(){
    return new Mat2(this.m00, this.m01, this.m10, this.m11)
  }

  toString() {
    let str = ""
    str += "|" + this.m00.toFixed(2) + " " + this.m01.toFixed(2) + "|\n"
    str += "|" + this.m10.toFixed(2) + " " + this.m11.toFixed(2) + "|\n"
    return str
  }

}