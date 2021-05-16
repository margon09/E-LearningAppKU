class AvPanel {
	constructor(sketch) {
		this.p = sketch

		this.posX = 10
		this.posY = 30
		this.shapeWidth = 275
		this.shapeHeight = 200
		this.stroke = 3

		// this.screenPosX = 12
		// this.screenPosY = 65
		// this.screenWidth = 235
		// this.screenHeight = 125
		// //this.screenFrameStroke = 57

		this.mainFrameStroke = 37
		this.mainFrameFill = 57
		//this.screenFill = 207 //187
	}

	display() {
		this.mainFrame()
		//this.screen()
	}

	mainFrame() {
		this.p.fill(127)
		this.p.strokeWeight(0)
		this.p.textSize(12)
		this.p.text('A/V SYSTEM CONTROL PANEL', 60, 20)

		this.p.stroke(this.mainFrameStroke)
		this.p.strokeWeight(this.stroke)
		this.p.fill(this.mainFrameFill)
		this.p.rect(this.posX, this.posY, this.shapeWidth, this.shapeHeight)
		this.p.noFill()
	}

	// screen() {
	// 	this.p.fill(this.screenFill)
	// 	this.p.noStroke()

	// 	this.p.rect(
	// 		this.screenPosX,
	// 		this.screenPosY,
	// 		this.screenWidth,
	// 		this.screenHeight
	// 	)
	// }
}
