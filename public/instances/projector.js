/////////// =============================== PROJECTOR ==================================//////////////
let projector = sketch => {
	let hardwareProjector
	let avScreens

	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 80))
		sketch.background(247)

		hardwareProjector = new Hardware(sketch)
		hardwareProjector.projector()

		const cables = new Cables(sketch)
		cables.connectingCablesProjector()
	}

	// DRAW
	sketch.draw = () => {
		// changing the color of the main hardware projector
		if (projectorActive) {
			hardwareProjector.projectorActive()
		}
	}
}

let myProjector = new p5(projector, 'projector')
