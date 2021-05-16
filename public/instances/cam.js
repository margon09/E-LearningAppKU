/////////// =============================== CAM ==================================//////////////
let cam = sketch => {
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 80))

		//start logic
		sketch.background(247)
		const hardwareCam = new Hardware(sketch)
		hardwareCam.cam()
		const cables = new Cables(sketch)
		cables.connectingCablesCam()

		// const shape = new Shapes(sketch)
		// shape.pc()
	}

	// DRAW
	sketch.draw = () => {}
}

let myCam = new p5(cam, 'cam')
