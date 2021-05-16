/////////// =============================== PROJECTOR ==================================//////////////
let projector = sketch => {
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 80))
		sketch.background(247)
		const hardwareProjector = new Hardware(sketch)
		hardwareProjector.projector()
		const cables = new Cables(sketch)
		cables.connectingCablesProjector()
		// const shape = new Shapes(sketch)
		// shape.pc()
	}

	// DRAW
	sketch.draw = () => {}
}

let myProjector = new p5(projector, 'projector')
