function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {

	rotateX(-0.5)
	rotateY(mouseX * 0.01)

	background(0)
	noFill()
	stroke(255)

	const steps = 60;
	const dist = 10;

	const livello_del_mare = mouseY / height

	for (let j=0; j<steps; j++) {
		beginShape()
		for (let i=0; i<steps; i++) {
			let n = noise(i * 0.05, j * 0.05 + frameCount * 0.01)
			if (n > livello_del_mare) n = livello_del_mare
			const x = (steps/2 - i) * dist
			const y = (n * 200) - 100
			const z = (j - steps/2) * dist

			vertex(x, y, z)
		}
		endShape()
	}

}
