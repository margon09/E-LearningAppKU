let buttons = []
let btn

class RecPanel {
	constructor(sketch) {
		this.p = sketch
		this.posX = 10
		this.posY = 30
		this.shapewidth = 275
		this.shapeHeight = 200
		this.stroke = 3
	}

	display() {
		this.mainFrame()
		this.buttons()
		this.changeCamPosCircle()
		this.framesAroundBtns()
		this.panelText()
	}

	mainFrame() {
		this.p.fill(127)
		this.p.strokeWeight(0)
		this.p.textSize(12)
		this.p.text('RECORDING CONTROL PANEL', 60, 20)

		this.p.stroke(107) // stroke(57);
		this.p.strokeWeight(this.stroke)
		this.p.fill(255)
		this.p.rect(this.posX, this.posY, this.shapewidth, this.shapeHeight)
		this.p.noFill()
	}

	buttons() {
		// big btns
		let widthTopBtns = 45
		let heightTopBtns = 25
		let horizSpaceBetweenTopBtns = 49
		let horizSpaceBetweenBottomBtns = 54
		let verticalSpaceBetweenBottomBtns = 40
		let posXtop_1 = 20
		let posXtop_2 = 180
		let topPosY = 60
		let bottomPosY = 130
		// small btns
		let widthSmall = 20
		let xSmall = 255
		let ySmall = 130
		let verticalSpaceBetweenSmalls = 60

		// top row (big btns)
		for (let i = 0; i < 3; i++) {
			let x = posXtop_1 + i * horizSpaceBetweenTopBtns
			let y = topPosY
			btn = new Button(this.p, x, y, widthTopBtns, heightTopBtns) // this.p,
			buttons.push(btn)
		}
		for (let i = 0; i < 2; i++) {
			let x = posXtop_2 + i * horizSpaceBetweenTopBtns
			let y = topPosY
			btn = new Button(this.p, x, y, widthTopBtns, heightTopBtns) // this.p,
			buttons.push(btn)
		}
		// bottom row (big btns)
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 2; j++) {
				let x = posXtop_1 + i * horizSpaceBetweenBottomBtns
				let y = bottomPosY + j * verticalSpaceBetweenBottomBtns
				let widthBottomBtns = 50
				let heightBottomBtns = 35
				btn = new Button(this.p, x, y, widthBottomBtns, heightBottomBtns) // this.p,
				buttons.push(btn)
			}
		}

		// small btns
		for (let i = 0; i < 1; i++) {
			for (let j = 0; j < 2; j++) {
				let x = xSmall
				let y = ySmall + j * verticalSpaceBetweenSmalls
				btn = new Button(this.p, x, y, widthSmall, widthSmall) // this.p,
				buttons.push(btn)
			}
		}

		// drawing btns
		for (btn of buttons) {
			btn.showRectBtn()
		}
	}

	// make invisible rects for pressing btns on the circle
	changeCamPosCircle() {
		// let posX = 220
		// let posY = 170
		// let radius = 35
		// this.p.strokeWeight(1)
		// this.p.stroke(57)
		// this.p.fill(127) //187
		// this.p.ellipse(posX, posY, radius * 2)
	}

	panelText() {
		this.p.textSize(11)
		this.p.noStroke()
		this.p.fill(37)
		this.p.text('Streaming Control', 50, 50)
		this.p.text('Audio', 212, 50)
		this.p.text('Streaming Template', 50, 120)
	}

	framesAroundBtns() {
		this.p.stroke(37)
		this.p.noFill()
		this.p.rect(15, 40, 155, 55, 5) // left Panel 1
		this.p.rect(175, 40, 105, 55, 5) // right Panel 1

		this.p.rect(15, 110, 265, 110, 5) // down Panel
	}

	clicked() {
		for (btn of buttons) {
			btn.onRectClicked(this.p.mouseX, this.p.mouseY)
		}
	}
}

//============================================
/* let buttons = []

class RecPanel {
	constructor(sketch) {
		this.p = sketch

		this.posX = 10
		this.posY = 30
		this.shapewidth = 275
		this.shapeHeight = 200
		this.stroke = 3
	}

	display() {
		this.mainFrame()
		this.buttons()
		this.changeCamPosCircle()
		this.zoomIn()
		this.zoomOut()
		this.txt()
		this.framesAroundBtns()
		buttons = new Button(this.p, 100, 150, 45, 25)
		buttons.showBtns()
	}

	mainFrame() {
		this.p.fill(127)
		this.p.strokeWeight(0)
		this.p.textSize(12)
		this.p.text('RECORDING CONTROL PANEL', 60, 20)

		this.p.stroke(107) // stroke(57);
		this.p.strokeWeight(this.stroke)
		this.p.fill(255)
		this.p.rect(this.posX, this.posY, this.shapewidth, this.shapeHeight)
		this.p.noFill()
	}
	// 45, 25, 50, 35
	buttons() {
		//let buttons = []
		let widthTopBtns = 45
		let heightTopBtns = 25
		let horizSpaceBetweenTopBtns = 49
		let horizSpaceBetweenBottomBtns = 54
		let verticalSpaceBetweenBottomBtns = 40
		let posXtop_1 = 20
		let posXtop_2 = 180
		let topPosY = 60
		let bottomPosY = 130

		// top row
		for (let i = 0; i < 3; i++) {
			let x = posXtop_1 + i * horizSpaceBetweenTopBtns
			let y = topPosY

			//buttons[i] = new Button(this.p, x, y, widthTopBtns, heightTopBtns)
		}
		for (let i = 0; i < 2; i++) {
			let x = posXtop_2 + i * horizSpaceBetweenTopBtns
			let y = topPosY
			//buttons[i] = new Button(this.p, x, y, widthTopBtns, heightTopBtns)
		}

		// bottom row
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 2; j++) {
				let x = posXtop_1 + i * horizSpaceBetweenBottomBtns
				let y = bottomPosY + j * verticalSpaceBetweenBottomBtns
				let widthBottomBtns = 50
				let heightBottomBtns = 35
				//buttons[i] = new Button(this.p, x, y, widthBottomBtns, heightBottomBtns)
			}
		}
	}

	changeCamPosCircle() {
		let posX = 220
		let posY = 170
		let radius = 35

		this.p.strokeWeight(1)
		this.p.stroke(137)
		this.p.fill(127) //187
		this.p.ellipse(posX, posY, radius * 2)
	}

	zoomIn() {
		let zoomIn = new Button(this.p, 255, 130, 20, 20)
	}
	zoomOut() {
		new Button(this.p, 255, 190, 20, 20)
		this.p.textSize(10.5)
	}

	txt() {
		this.p.noStroke()
		this.p.fill(0) // 107
		this.p.text('+', 262.2, 142.5)
		this.p.text('\u2014', 260, 202.7)

		this.p.fill(37)
		this.p.text('Streaming Control', 50, 50)
		this.p.text('Audio', 212, 50)
		this.p.text('Streaming Template', 50, 120)
	}

	framesAroundBtns() {
		this.p.stroke(37)
		this.p.noFill()
		this.p.rect(15, 40, 155, 55, 5) // left Panel 1
		this.p.rect(175, 40, 105, 55, 5) // right Panel 1

		this.p.rect(15, 110, 265, 110, 5) // down Panel
	}

	clicked() {
		buttons.onRectClicked(this.p.mouseX, this.p.mouseY)
	}
}
 */
