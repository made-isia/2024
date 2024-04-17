function setup() {
	createCanvas(500, 500)
	background(255)
	const dim = 10
	const numX = floor(width / dim)
	const numY = floor(height / dim)
	for (let j=0; j<numY; j++){
		for (let i=0; i<numX; i++) {
			if (ran() < 0.5) {
				fill(255)
			} else {
				fill(0)
			}
			rect(i * dim, j * dim, dim, dim)
		}
	}
}

let seme = 4
function ran() {
	const x = (5 * seme + 1) % 16
	seme = x
	return x / 16
}
