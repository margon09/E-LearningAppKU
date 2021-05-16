class Hardware {
	constructor(sketch) {
		this.p = sketch

		// CAM
		this.bodyPosX = 17
		this.bodyPosY = 15
		this.bodyWidth = 40
		this.bodyHeight = 20
		this.bodyCorner = 7

		this.whiteStripePosX = 20
		this.whiteStripePosY = 18
		this.whiteStripeWidth = 35
		this.whiteStripeHeight = 6
		this.whiteStripeCorner = 12

		this.leg1PosX = 40
		this.leg1PosY = 57
		this.leg1Width = 70
		this.leg1Height = 3

		this.leg2PosX = 40
		this.leg2PosY = 58
		this.leg2Width = 3
		this.leg2Height = -15

		//
		this.neckPosX = 11
		this.neckPosY = 20.5
		this.neckWidth = 3
		this.neckHeight = 9

		this.neckPoint1PosX = 8
		this.neckPoint1PosY = 19
		this.neckPoint2PosX = 6
		this.neckPoint2PosY = 17
		this.neckPoint3PosX = 6
		this.neckPoint3PosY = 32
		this.neckPoint4PosX = 8
		this.neckPoint4PosY = 30

		this.camFill = 57
		this.whiteStripe = 247
		this.stroke = 37
		this.strokeWeight = 2

		// PROJECTOR
	}

	cam() {
		this.p.fill(this.camFill)
		this.p.stroke(this.stroke)
		this.p.strokeWeight(this.strokeWeight)

		// cam body
		this.p.push()
		this.p.rotate(-0.7)
		this.p.translate(-20, 15)
		// main body
		this.p.rect(
			this.bodyPosX,
			this.bodyPosY,
			this.bodyWidth,
			this.bodyHeight,
			this.bodyCorner
		)
		// leg 1 - short
		this.p.rect(
			this.leg1PosX,
			this.leg1PosY,
			this.leg1Width,
			this.leg1Height,
			this.bodyCorner
		)
		// leg 2 - main/long
		this.p.rect(
			this.leg2PosX,
			this.leg2PosY,
			this.leg2Width,
			this.leg2Height,
			this.bodyCorner
		)
		// White stripe on Cam
		this.p.fill(this.whiteStripe)
		this.p.rect(
			this.whiteStripePosX,
			this.whiteStripePosY,
			this.whiteStripeWidth,
			this.whiteStripeHeight,
			this.whiteStripeCorner
		)
		// cam neck 1 - small
		this.p.fill(this.camFill)
		this.p.rect(this.neckPosX, this.neckPosY, this.neckWidth, this.neckHeight)
		// cam neck 2 - quad
		this.p.quad(
			this.neckPoint1PosX,
			this.neckPoint1PosY,
			this.neckPoint2PosX,
			this.neckPoint2PosY,
			this.neckPoint3PosX,
			this.neckPoint3PosY,
			this.neckPoint4PosX,
			this.neckPoint4PosY
		)
		// cam head
		this.p.rect(-2.8, 15, 6, 19, 5, 0, 0, 5)

		this.p.pop()
		this.p.noStroke()

		// neck arc
		this.p.arc(50, 26.5, 12, 12, 150.0, -179.7, 90)
	}

	projector() {
		this.p.fill(this.camFill)
		this.p.stroke(this.stroke)
		this.p.strokeWeight(this.strokeWeight)
		// main body
		this.p.rect(3, 30, 65, 20, 7)
		// legs
		this.p.rect(13, 52.5, 7, 3, 5) // leg 1
		this.p.rect(52, 52.5, 7, 3, 5) // leg 2

		this.p.fill(247) // 247
		this.p.noStroke()
		this.p.ellipse(25, 40, 24.5, 24.5) // stroke cam circle

		this.p.rect(4, 34, 62, 2, 5) // side bars UP
		this.p.rect(4, 44, 62, 2, 5) // side bars DOWN
		this.p.rect(43, 38, 17, 1, 12) // stripes
		this.p.rect(43, 41, 17, 1, 12) // stripes

		this.p.fill(57)
		this.p.strokeWeight(1.5)
		this.p.ellipse(25, 40, 24, 24) // main cam circle

		this.p.stroke(247)
		this.p.fill(247)
		this.p.noStroke()
		this.p.ellipse(25, 40, 18, 18) // stroke cam circle

		this.p.fill(57)
		this.p.strokeWeight(1.5)
		this.p.ellipse(25, 40, 14, 14) // linse Circle

		this.p.stroke(247)
		this.p.strokeWeight(1.5)
		this.p.arc(25, 40, 7, 7, 3, 80) // arc
	}

	mediabox() {
		this.p.fill(57)
		this.p.strokeWeight(1)
		this.p.stroke(37)
		this.p.strokeWeight(2)
		this.p.rect(3, 27, 65, 28, 7, 7, 5, 5) // body // 3, 30, 60, 20, 8

		this.p.stroke(247)
		this.p.strokeWeight(2.1)
		this.p.rect(3.5, 36.5, 64, 18) // side bars around
		this.p.rect(3.5, 36.5, 64, 1.5, 7, 7, 7, 7) // side bars DOWN

		this.p.fill(247)
		this.p.strokeWeight(0)
		//this.p.textFont('HelveticaNeue', 12)
		this.p.textSize(10.5)
		this.p.text('MEDIABOX', 8, 50)
	}

	converter() {
		this.p.fill(57)
		this.p.strokeWeight(1)
		this.p.stroke(37)
		this.p.strokeWeight(2)
		// this.p.rect(12, 5, 40, 53, 7, 7, 5, 5) // body
		this.p.rect(6, 25, 60, 30, 7, 7, 5, 5) // body

		this.p.stroke(247)
		this.p.strokeWeight(1.5)
		//this.p.rect(12, 5, 40, 53, 7, 7, 5, 5) // frame
		this.p.rect(5, 25, 60, 30, 7, 7, 5, 5) // frame

		this.p.fill(247)
		this.p.strokeWeight(0)
		this.p.textSize(8)
		this.p.text('HDMI', 25, 35)
		this.p.text('VIDEO', 22, 43)
		this.p.text('CAPTURE', 15, 52)
	}
}
