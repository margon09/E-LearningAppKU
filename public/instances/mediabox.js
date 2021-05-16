/////////// =============================== MEDIABOX ==================================//////////////
let mediabox = sketch => {
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 80))
		sketch.background(247)
		const hardwareMediabox = new Hardware(sketch)
		hardwareMediabox.mediabox()
		const cables = new Cables(sketch)
		cables.connectingCablesMediabox()
		cables.cablesMediaboxToConverter()
		cables.cablesMediaboxToPC()
	}

	// DRAW
	sketch.draw = () => {}
}

let myMediabox = new p5(mediabox, 'mediabox')
