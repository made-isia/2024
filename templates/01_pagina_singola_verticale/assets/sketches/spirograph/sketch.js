
let slider_r1
let slider_r2

let slider_m1
let slider_m2

let slider_raggio

function setup() {
	createCanvas(windowWidth, windowHeight)

	slider_r1 = createSlider(0, 300, 120)
	slider_r1.position(10, 10)
	slider_r1.size(200)

	slider_r2 = createSlider(0, 300, 90)
	slider_r2.position(10, 30)
	slider_r2.size(200)

	slider_m1 = createSlider(-10, 10, 1, 1)
	slider_m1.position(10, 50)
	slider_m1.size(200)

	slider_m2 = createSlider(-10, 10, -5, 1)
	slider_m2.position(10, 70)
	slider_m2.size(200)

	slider_raggio = createSlider(1, 200, 20)
	slider_raggio.position(10, 90)
	slider_raggio.size(200)

}

function draw() {
	background(220)

	const num = 1000

	noFill()
	for (let i=0; i<num; i++) {

		const rot = TAU / 1000 * i

		const cx = width/2
		const cy = height/2

		const a1 = rot * slider_m1.value()
		const r1 = slider_r1.value()
		const x1 = cx + cos(a1) * r1
		const y1 = cy + sin(a1) * r1

		const a2 = rot * slider_m2.value()
		const r2 = slider_r2.value()
		const x2 = x1 + cos(a2) * r2
		const y2 = y1 + sin(a2) * r2

		// circle(x1, y1, 10)
		circle(x2, y2, slider_raggio.value())
	}



}
