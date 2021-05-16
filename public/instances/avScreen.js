//======================================== AV PANEL =============================================
let avP = sketch => {
	let avLabels
	let soundBar
	let avFunctions

	// // PRELOAD img
	// sketch.preload = () => {}
	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 250))

		sketch.background(247)
		const avPanel = new AvPanel(sketch)
		avPanel.display()

		avLabels = new BtnLabels_av(sketch)
		avLabels.display()

		soundBar = new SoundBar(sketch)
		soundBar.display()

		avFunctions = new AVfunctions(sketch)
		avFunctions.kuLogo()
	}

	// DRAW
	sketch.draw = () => {
		soundBar.noAudioCheck()
	}

	sketch.mousePressed = () => {
		soundBar.pressed()
	}
	sketch.mouseClicked = () => {
		avFunctions.activePanelCollision()
		avFunctions.vga_hdmi_Collision()
		avFunctions.display()
		avFunctions.displayProjectorButtons()
	}
}
let myAvPanel = new p5(avP, 'avPanel')
