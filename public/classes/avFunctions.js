class AVfunctions {
	constructor(sketch) {
		this.p = sketch

		this.screenPosX = 12
		this.screenPosY = 65
		this.screenWidth = 235
		this.screenHeight = 125
		this.screenFill = '#b7c0c6' //209, 207
		this.strokeDefaultBar = 87

		this.barPosY = 83
		this.barRectWidth = 10
		this.barDist = 13

		this.help = false
		this.projector = false
		this.mic = false
		this.offBtn = true

		this.hdmi = false
		this.vga = false
		this.projectorOn = false

		this.n = 1
		this.posX = 32
		this.nextPos = 0
		this.nextPosLine = 0
	}

	//================== Collision with active panel (BTNs - active panel) ===================//
	activePanelCollision() {
		let coll_Help = new Collision(65, 33, 33, 30)
		if (coll_Help.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.help = true
			this.offBtn = false
			this.mic = false
			this.projector = false
		}

		let coll_Projector = new Collision(110, 33, 45, 30)
		if (coll_Projector.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.projector = true
			this.help = false
			this.offBtn = false
			this.mic = false
		}

		let coll_Mic = new Collision(168, 33, 33, 30)
		if (coll_Mic.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.mic = true
			this.projector = false
			this.help = false
			this.offBtn = false
		}

		let coll_offBtn = new Collision(212, 33, 35, 30)
		if (coll_offBtn.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.offBtn = true
			this.mic = false
			this.projector = false
			this.help = false
		}
	}

	display() {
		let avLabels = new BtnLabels_av(this.p)

		if (this.help) {
			this.helpInfo()
		}
		if (this.projector && !this.help) {
			this.projectorInfo()
			avLabels.projectorActive()
		}
		if (this.mic && !this.projector) {
			this.micInfo()
		}
		if (this.offBtn && !this.projector && !this.mic) {
			this.kuLogo()
		}
	}

	kuLogo() {
		this.clearBG()
		this.p.loadImage('../img/kuLogo.png', img => {
			this.p.image(img, 65, 80)
		})

		this.p.noStroke()
		this.p.fill(145, 26, 30)
		this.p.ellipse(60, 124, 15, 15) // bigger biggerCircleLogo;
		this.p.ellipse(78, 137, 8, 8) // small smallerCircleLogo;
		this.p.strokeWeight(0.5)
		this.p.stroke(145, 26, 30)
		this.p.line(50, 137, 222, 137) // lineBetween circles
		this.p.noStroke()

		this.p.fill(57)
		this.p.noStroke()
		this.p.textFont('Helvetica-bold', 10)
		this.p.text('KØBENHAVNS UNIVERSITET', 87, 148)
	}

	helpInfo() {
		this.p.loadImage('../img/help.png', img => {
			this.p.image(img, 65, 80)
		})
	}
	// ========
	projectorInfo() {
		this.defaultProgressBar_Projector()
		// default VGA/HDMI rect colors and img
		this.p.stroke(this.strokeDefaultBar)
		this.p.strokeWeight(0.5)
		this.p.noFill()
		this.p.rect(45, 120, 65, 47)
		this.p.rect(150, 120, 65, 47)

		this.p.loadImage('../img/hdmi.png', hdmi => {
			this.p.image(hdmi, 45, 120)
		})
		this.p.loadImage('../img/vga.png', vga => {
			this.p.image(vga, 150, 120)
		})
	}
	defaultProgressBar_Projector() {
		// DEFAULT PROGRESSION BAR
		for (let i = 45; i <= 205; i += this.barDist) {
			this.p.noFill()
			this.p.stroke(this.strokeDefaultBar)
			this.p.strokeWeight(0.5)
			this.p.rect(i, this.barPosY, this.barRectWidth, this.barRectWidth) // default rect-bar
		}
	}

	micInfo() {
		//this.clearBG()
	}

	//======================== Collision with vga / hdmi btns ==========================//
	vga_hdmi_Collision() {
		this.clearBG()
		let coll_hdmiBtn = new Collision(45, 120, 65, 47)
		let coll_vgaBtn = new Collision(150, 120, 65, 47)
		if (coll_hdmiBtn.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.hdmi = true
			this.vga = false
		}
		if (coll_vgaBtn.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.hdmi = false
			this.vga = true
		}
	}

	displayProjectorButtons() {
		if (this.hdmi && this.projector) {
			this.p.stroke(0, 150, 0)
			this.p.fill(0, 205, 0, 150)
			this.p.rect(45, 120, 65, 47)
		}
		if (this.vga && this.projector) {
			this.p.stroke(104, 121, 121)
			this.p.fill(164, 181, 181, 250)
			this.p.rect(150, 120, 65, 47)
		}
	}

	loadBar() {
		if (this.p.frameCount % 22 === 0 && this.n < 14 && this.hdmi) {
			this.n++
			this.p.fill(0, 205, 0, 150)
			this.p.stroke(0, 105, 0)
			this.nextPos += this.barDist
			this.p.rect(
				this.posX + this.nextPos,
				this.barPosY,
				this.barRectWidth,
				this.barRectWidth
			)
		}
		if (this.p.frameCount % 1 === 0 && this.n < 14 && this.hdmi) {
			let posX = 44
			let posYLine = 98
			this.nextPosLine += 0.6

			this.p.stroke(127)
			this.p.strokeWeight(0.8)

			let nextX = posX + this.nextPosLine

			if (nextX >= 210) {
				nextX = 210
			}

			this.p.line(posX, posYLine, nextX, posYLine)
		}

		// to change the color of the main hardware projector
		if (this.n >= 14) {
			this.projectorOn = true
		}
	}

	clearBG() {
		this.p.fill(this.screenFill)
		this.p.stroke(187, 208, 208)
		this.p.strokeWeight(0.5)
		this.p.rect(
			this.screenPosX,
			this.screenPosY,
			this.screenWidth,
			this.screenHeight
		)
	}
}
