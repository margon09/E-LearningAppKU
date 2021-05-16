//======================================== REC PANEL =============================================

let recP = sketch => {
	let recPanel
	let btnLabels
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 250))

		sketch.background(247)

		recPanel = new RecPanel(sketch)
		recPanel.display()
		btnLabels = new BtnLabels_recording(sketch)
		btnLabels.display()
	}

	// DRAW
	sketch.draw = () => {}

	sketch.mouseClicked = () => {
		recPanel.clicked()
		btnLabels.display()
	}
}
let myRecPanel = new p5(recP, 'recPanel')
// https://www.youtube.com/watch?v=fBqaA7zRO58
