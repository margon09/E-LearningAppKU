// //========================================MIC=============================================
// 'use strict'
let mic = sketch => {
	let sineWave
	let micClass

	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 250))

		sketch.background(247)
		micClass = new Mic(sketch)
		micClass.displayMic()
		sineWave = new SineWave(sketch)
	}

	// DRAW
	sketch.draw = () => {
		micClass.mutedBtn()

		if (micClass.muted && !micClass.offBtn) {
			sineWave.displayLine()
		} else if (!micClass.muted && !micClass.offBtn) {
			sineWave.displaySin()
		} else if (micClass.offBtn) {
			sineWave.rectBG()
		}
	}

	sketch.mouseClicked = () => {
		micClass.btnCollision()
	}
}
let myMic = new p5(mic, 'mic')
