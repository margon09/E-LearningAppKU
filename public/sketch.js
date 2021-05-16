//========================================MAIN=============================================
let resetAllWithBtn = mainSketch => {
	let fps = 60 // number of frames to be displayed every sec
	// SETUP
	mainSketch.setup = () => {
		mainSketch.createCanvas((windowWidth = 10), (windowHeight = 10))

		const btn = document.getElementById('resetBtn')

		btn.addEventListener('click', e => {
			resetSketch()
			e.preventDefault()
		})

		// btn.addEventListener('click', () => {
		// 	resetSketch()
		// })
	}

	//All start logic goes here
	function resetSketch(e) {
		myCam.setup()
		myProjector.setup()
		myMediabox.setup()
		myConverter.setup()
		myPC.setup()
		myMonitor.setup()
		myRecPanel.setup()
		myAvPanel.setup()
		myMic.setup()
		studentView.setup()
		//console.log('Sketch is reset!')
		mainSketch.frameRate(fps)
	}
	mainSketch.draw = () => {
		//console.log(mainSketch.frameRate())
	}
}

let mySketch = new p5(resetAllWithBtn, 'resetBtn')

// https://necromuralist.github.io/p5_explorations/posts/p5-instance-mode-revisited/
// https://forum.processing.org/two/discussion/17332/using-instance-mode-to-create-multiple-sketches-on-the-same-page
