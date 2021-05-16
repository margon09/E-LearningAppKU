class SoundBar {
	constructor(sketch) {
		this.p = sketch
		this.posX = 35
		this.heightY = 14
		this.posY = 204
		this.widthX = 10
		this.press = 0
		this.corner = 7

		this.audio = true

		this.spaceBetweenBars = 23
		this.nextHeightY = 2
		this.nextPosY = 1
		this.startingPoint = 12
		this.barsSpace = 180
	}

	display() {
		this.audioBar()
	}

	// Filling in the audio panel with sound-bar rectangles grey color
	audioBar() {
		// we need these 2 temps to avoid changing the main value later
		let tempHeightY = this.heightY
		let tempnextPosY = this.posY

		for (
			let i = this.startingPoint;
			i < this.barsSpace;
			i += this.spaceBetweenBars
		) {
			this.p.fill(127)
			this.p.stroke(37)
			this.p.strokeWeight(1)

			this.p.rect(
				this.posX + i,
				(tempnextPosY -= this.nextPosY),
				this.widthX,
				(tempHeightY += this.nextHeightY),
				this.corner
			)
		}
	}

	pressed() {
		this.p.fill(127)
		this.p.stroke(37)
		this.p.strokeWeight(1)

		let onCollisionPlus = new Collision(225, 196, 35, 30) // audioBar +
		let onCollisionMinus = new Collision(10, 196, 35, 30) // audioBar -

		if (onCollisionPlus.collisionRect(this.p.mouseX, this.p.mouseY)) {
			// to avoid drawing bars further
			if (this.posX >= 196) this.posX = 196
			if (this.heightY > 28) this.heightY = 28
			if (this.posY <= 197) this.posY = 197

			// // audioBar +
			this.posX += this.spaceBetweenBars // should be here, else takes double click
			this.heightY += this.nextHeightY
			this.posY -= this.nextPosY
			this.p.fill(0, 205, 0)

			this.p.rect(
				this.posX - this.startingPoint,
				this.posY,
				this.widthX,
				this.heightY,
				this.corner
			)
		}
		if (onCollisionMinus.collisionRect(this.p.mouseX, this.p.mouseY)) {
			// to avoid drawing bars further
			if (this.posX <= 58) this.posX = 58
			if (this.heightY <= 16) this.heightY = 16
			if (this.posY >= 203) this.posY = 203

			this.p.fill(127)

			this.p.rect(
				this.posX - this.startingPoint,
				this.posY,
				this.widthX,
				this.heightY,
				this.corner
			)
			this.posX -= this.spaceBetweenBars // should be here, else it takes double click
			this.heightY -= this.nextHeightY
			this.posY += this.nextPosY
		}
	}

	noAudioCheck() {
		if (this.posX === 35) {
			this.audio = false
			this.p.stroke(127)
			this.p.line(15, 220, 35, 200)
		} else if (this.posX >= 58) {
			this.audio = true
			// removing line visibility by re-drawing it and højtaler on top
			this.p.stroke(57)
			this.p.line(15, 220, 35, 200)

			// new højtaler (copy from soundBar_av)
			this.p.stroke(37)
			this.p.strokeWeight(0.5)
			this.p.fill(187)
			this.p.triangle(19, 209, 28, 198, 28, 221) // head
			this.p.rect(17, 204, 5, 10) // neck
		}
	}
}
