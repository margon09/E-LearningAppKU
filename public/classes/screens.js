class Screens {
	constructor(sketch) {
		this.p = sketch
		// PC SCREEN - RECT
		this.pcPosX = 50
		this.pcPosY = 50
		this.pcWidth = 195
		this.pcHeight = 160 // 150
		this.pcRadius1 = 5
		this.pcRadius2 = 0
		// this.pcRadius2 = 5
		// this.pcRadius3 = 0
		// this.pcRadius4 = 0

		this.pcStroke = 57
		this.pcStrokeWeight = 5
		this.pcFill = 37

		this.pcOffSet = 40

		// PC KEYBOARD - QUAD
		this.marginOffset = 2
		this.quadStroke = 127
		this.quadFill = 237
		this.quadStrokeWeight = 1

		// MONITOR
		this.monitorPosX = 10
		this.monitorPosY = 20 //50
		this.monitorWidth = 275
		this.monitorHeight = 160 // 150

		this.monitorMargin = 4

		// MONITOR FAKE BAR
		this.fakeBarPosX = 8
		this.fakeBarPosY = 183
		this.fakeBarHeight = 20
		this.fakeBarStrokeWeightLines = 1

		this.colored = this.p.color(83, 104, 120, 100)
		this.noColored = 187

		this.fakeBarLegColor = 237

		// Monitor ellipse Bottom Leg
		this.fakeBarEllipseX = 150
		this.fakeBarEllipseY = 230
		this.fakeBarEllipseWidth = 150
		this.fakeBarEllipseHeight = 26

		this.monitorLegX = 135
		this.monitorLegY = 204
		this.monitorLegWidth = 30
		this.monitorLegHeight = 17

		this.monitorLegX2 = 165
		this.monitorHeight2 = 217
	}

	displayPC() {
		this.pc()
		this.displayPCkeyboard()
	}

	pc() {
		this.p.fill(this.pcFill)
		this.p.stroke(this.pcStroke)
		this.p.strokeWeight(this.pcStrokeWeight)

		const pc = this.p.rect(
			this.pcPosX,
			this.pcPosY,
			this.pcWidth,
			this.pcHeight,
			this.pcRadius1,
			this.pcRadius1,
			this.pcRadius2,
			this.pcRadius2,
			this.pcStroke,
			this.pcStrokeWeight
		)
	}

	displayPCkeyboard() {
		this.p.fill(this.quadFill)
		this.p.stroke(this.quadStroke)
		this.p.strokeWeight(this.quadStrokeWeight)

		const quad = this.p.quad(
			this.pcPosX - this.marginOffset,
			this.pcPosY + this.pcHeight,
			this.pcPosX - this.pcOffSet,
			this.pcPosY + this.pcHeight + this.pcOffSet,
			this.pcPosX + this.pcWidth + this.pcOffSet,
			this.pcPosY + this.pcHeight + this.pcOffSet,
			this.pcPosX + this.pcWidth + this.marginOffset,
			this.pcPosY + this.pcHeight
		)
	}

	monitorScreen() {
		this.p.fill(this.pcFill)
		this.p.stroke(this.pcStroke)
		this.p.strokeWeight(this.pcStrokeWeight)

		const monitorScreen = this.p.rect(
			this.monitorPosX,
			this.monitorPosY,
			this.monitorWidth,
			this.monitorHeight,
			this.pcRadius1,
			this.pcRadius1,
			this.pcRadius2,
			this.pcRadius2,
			this.pcStroke,
			this.pcStrokeWeight
		)
	}

	monitor() {
		this.monitorScreen()

		this.p.fill(this.quadFill)
		this.p.stroke(this.quadStroke)
		this.p.strokeWeight(this.quadStrokeWeight)

		// // FAKE SHAPES-HOLDER PANEL
		this.p.fill(this.colored) // fill(this.noColored); if GREY BG
		this.p.rect(
			this.fakeBarPosX,
			this.fakeBarPosY,
			this.monitorWidth + this.monitorMargin,
			this.fakeBarHeight,
			this.pcRadius2,
			this.pcRadius2,
			this.pcRadius1,
			this.pcRadius1
		)
		this.p.fill(this.fakeBarLegColor)
		this.p.stroke(this.quadStroke)
		this.p.ellipse(
			this.fakeBarEllipseX,
			this.fakeBarEllipseY,
			this.fakeBarEllipseWidth,
			this.fakeBarEllipseHeight
		)

		this.p.noStroke()
		this.p.rect(
			this.monitorLegX,
			this.monitorLegY,
			this.monitorLegWidth,
			this.monitorLegHeight
		)

		this.p.stroke(this.quadStroke)
		this.p.strokeWeight(this.fakeBarStrokeWeightLines)
		this.p.line(
			this.monitorLegX,
			this.monitorLegY,
			this.monitorLegX,
			this.monitorHeight2
		)
		this.p.line(
			this.monitorLegX2,
			this.monitorLegY,
			this.monitorLegX2,
			this.monitorHeight2
		)
	}
}
