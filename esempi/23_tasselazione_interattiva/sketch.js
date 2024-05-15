
let piastrella

function setup() {
	createCanvas(500, 500)

	piastrella = createGraphics(100, 100)
	piastrella.background(255)
}

function keyPressed() {
	piastrella.background(255)
}

function draw() {
	background(200)

	if(mouseIsPressed) {
		//piastrella.line(mouseX % piastrella.width, mouseY % piastrella.height, pmouseX % piastrella.width, pmouseY % piastrella.height)
		piastrella.noStroke()
		piastrella.fill(0)
		piastrella.ellipse(mouseX % piastrella.width, mouseY % piastrella.height, 5, 5)
	}


	const numX = Math.ceil(width/piastrella.width)
	const numY = Math.ceil(height/piastrella.height)

	for (let j=0; j<numY; j++) {
		for (let i=0; i<numX; i++) {
			image(piastrella, piastrella.width * i, piastrella.height * j)
		}
	}


}
