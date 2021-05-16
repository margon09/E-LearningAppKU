//======================================== MONITOR =============================================
let monitor = sketch => {
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 250))
		sketch.background(247)
		const monitor = new Screens(sketch)
		monitor.monitor()
	}

	// DRAW
	sketch.draw = () => {}
}
let myMonitor = new p5(monitor, 'monitor')
