// //========================================STUDENT VIEW PC=============================================

let stdView = sketch => {
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 250))
		sketch.background(247)
		const studentPc = new Screens(sketch)
		studentPc.displayPC()
	}

	// DRAW
	sketch.draw = () => {}
}
let studentView = new p5(stdView, 'view')
