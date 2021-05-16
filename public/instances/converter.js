/////////// =============================== CONVERTER ==================================//////////////
let converter = sketch => {
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 80))
		sketch.background(247)
		const hardwareConverter = new Hardware(sketch)
		hardwareConverter.converter()
		const cables = new Cables(sketch)
		cables.connectingCablesConverter()
		cables.cablesMediaboxToPC_throughConverter()
		cables.cablesConverterToPC()
	}

	// DRAW
	sketch.draw = () => {}
}

let myConverter = new p5(converter, 'converter')
