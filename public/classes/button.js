class Button {
	constructor(sketch, posX, posY, width, height) {
		this.p = sketch
		this.posX = posX
		this.posY = posY
		this.width = width
		this.height = height
		this.myColor = 127 //this.col = this.p.color(187)

		this.dark = true
	}

	showRectBtn() {
		this.p.fill(this.myColor)
		this.p.stroke(57) // 127
		this.p.strokeWeight(1)
		this.p.rect(this.posX, this.posY, this.width, this.height)
	}

	invertColor() {
		this.dark = !this.dark

		if (!this.dark) {
			this.myColor = 187 // 227
		} else {
			this.myColor = 127
		}
		this.showRectBtn()
	}

	onRectClicked(x, y) {
		let rectWidth = this.posX + this.width
		let rectHeight = this.posY + this.height
		if (x > this.posX && x < rectWidth && y > this.posY && y < rectHeight) {
			this.invertColor()
		}
	}
}

/* class Button {
	constructor(sketch, posX, posY, width, height) {
		this.p = sketch
		this.posX = posX
		this.posY = posY
		this.width = width
		this.height = height
		this.col = this.p.color(187)

		this.dark = true
	}

	showBtns() {
		this.p.fill(this.col)
		this.p.stroke(127)
		this.p.strokeWeight(1)
		this.p.rect(this.posX, this.posY, this.width, this.height)
	}
	onRectClicked(x, y) {
		this.dark = !this.dark
		let rectWidth = this.posX + this.width
		let rectHeight = this.posY + this.height
		if (x > this.posX && x < rectWidth && y > this.posY && y < rectHeight) {
			console.log(this.dark)
			this.changeColor()
		}
	}

	changeColor() {
		if (!this.dark) {
			console.log('color is 37')
			this.col = this.p.color(37)
		} else {
			this.col = this.p.color(187)
			console.log('color is 187')
		}
	}
} */

//=======================================================================

// https://editor.p5js.org/cs4all/sketches/BDGfjGm5s
// https://forum.processing.org/two/discussion/18165/how-to-use-button-moussepressed-in-an-object
// https://stackoverflow.com/questions/53975899/how-to-create-a-menu-for-a-game-in-p5-js-using-buttons
// https://stackoverflow.com/questions/60434313/creating-buttons-in-a-for-loop-each-with-a-different-mousepressed-function-in-p

// constructor(sketch) {
// 	this.p = sketch
// 	this.something = 'bind() does work!'

// 	this.button = sketch
// 		.createButton('Hello')
// 		.mousePressed(this.test.bind(this))  // .mousePressed(() => this.test())
// 		.size(100, 50)
// }

// test() {
// 	alert(this.something)
// }

// class Button {
// 	constructor(sketch, posX, posY, width, height) {
// 		this.p = sketch
// 		this.posX = posX
// 		this.posY = posY
// 		this.width = width
// 		this.height = height

// 		this.dark = true

// 		this.button = sketch
// 			.createButton('')
// 			.mousePressed(this.changeBtnColor.bind(this))
// 			.position(this.posX, this.posY)
// 			.size(this.width, this.height)
// 			.style('background-color', '#eee')
// 			.style('z-index', '0')
// 			.style('opacity', '0.5')
// 	}

// 	changeBtnColor() {
// 		this.dark = !this.dark
// 		if (!this.dark) {
// 			this.button.style('background-color', '#bbb')
// 		} else {
// 			this.button.style('background-color', '#eee')
// 		}
// 	}
// }
