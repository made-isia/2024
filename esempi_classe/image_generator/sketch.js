const W = 60
const H = 60

let img

function setup() {
	createCanvas(300, 300)

	img = createGraphics(W, H)
	img.background(0)

	for (let j=0; j<H; j++) {
		for (let i=0; i<W; i++) {
			const c = color(random(1) < 0.5 ? 0 : 255)
			// const c = color(random(255))
			// const c = color(random(255),random(255),random(255))
			img.set(i, j, c)
		}
	}

	img.updatePixels()
	background(255)
	image(img, 10, 10)
}

function draw() {

}

function keyPressed() {
	if (key == 's') img.save("pat_" + W + "_" + H + ".png")
}