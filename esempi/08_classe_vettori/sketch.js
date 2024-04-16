function setup() {
	createCanvas(500, 500)
}

function draw() {
	background(255)

	const centro = new Vec2(width/2, height/2)
	centro.disegna(color(255,0,0))

	const mouse = new Vec2(mouseX, mouseY)
	//mouse.disegna(color(0, 0, 200))

	const mc = mouse.sottrai(centro)
	mc.disegna(color(0, 0, 200), centro)

	const mc2 = new Vec2(-mc.x, -mc.y)
	mc2.disegna(color(0, 0, 200, 100), centro)

	const mc3 = new Vec2(-mc.y, mc.x)
	mc3.disegna(color(0, 0, 200, 100), centro)

	const mc4 = new Vec2(mc.y, -mc.x)
	mc4.disegna(color(0, 0, 200, 100), centro)

	const v = new Vec2(200, -60)
	v.disegna(color(0,200,0), mouse)


}
