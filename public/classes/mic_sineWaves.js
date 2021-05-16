class SineWave {
	constructor(sketch) {
		this.p = sketch

		this.x = 80
		this.y = 0 // 1st dot
		this.y2 = 0 // 2nd dot

		this.omega = 10 // frequency
		this.smooth = 1 // to make sure that line draws fully, as it consists of dots

		// covering rectBG
		this.posX = 80
		this.posY = 60
		this.widthX = 125
		this.heightY = 40
	}

	displayLine() {
		this.rectBG()
		this.sineWave(0)
	}
	displaySin() {
		this.rectBG()
		this.sineWave(this.heightY / 2) // T=20 (period)
	}

	sineWave(radius) {
		// sine
		this.y2 = -this.y // remove "-" if an otdinary sin wave
		this.y = this.p.sin(this.p.radians(this.omega * this.x)) * radius

		if (this.x === this.posX + this.widthX) this.x = this.posX
		else this.x++
		// line connecting the dots
		this.p.strokeWeight(1)
		this.p.stroke(0, 255, 0)
		this.p.line(this.x, this.y + 79, this.x - this.smooth, this.y2 + 79)
	}

	rectBG() {
		this.p.fill(0, 10)
		this.p.stroke(37)
		this.p.strokeWeight(1.5)
		this.p.rect(this.posX, this.posY, this.widthX, this.heightY)
	}
}
