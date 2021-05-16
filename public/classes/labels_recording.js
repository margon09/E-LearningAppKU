class BtnLabels_recording {
	constructor(sketch) {
		this.p = sketch
	}

	display() {
		this.recStart()
		this.recPause()
		this.recStop()
		// //
		this.micOn()
		this.micOff()
		// //
		this.boardAndPresenter()
		this.pcAndPresenter()
		this.pc()
		this.board1()
		this.board2()
		this.borad3()
		// //
		this.camCircle()
		// //
		this.zoomBtns()
	}

	// 1st row - recording
	recStart() {
		this.p.stroke(0)
		this.p.strokeWeight(1)
		this.p.fill('#d40303')
		this.p.ellipse(42, 72.5, 18)
	}
	recPause() {
		this.p.fill(247)
		this.p.rect(83, 64, 7, 18)
		this.p.rect(93, 64, 7, 18)
	}
	recStop() {
		this.p.fill(37)
		this.p.rect(132, 66.5, 17, 12)
		this.p.noFill()
		this.p.stroke('#d40303')
		this.p.rect(128, 63.5, 25, 18)
	}

	// 1st row - audio
	micOn() {
		this.p.stroke(0)
		this.p.fill('#00cd00')
		this.p.rect(198.5, 62.5, 9, 14, 7, 7, 7, 7) // head
		this.p.rect(201.5, 79, 3, 5) // leg vertical
		this.p.rect(198, 82, 10, 2) // leg horizontal
		// mic arc
		this.p.noFill()
		this.p.strokeWeight(1.2)
		this.p.arc(203.2, 71, 15, 15, 0, 110, 90)
		// stripes left
		this.p.rect(198.8, 67.5, 3, 0.3)
		this.p.rect(198.8, 70.5, 3, 0.3)
		// stripes right
		this.p.rect(204, 67.5, 3, 0.3)
		this.p.rect(204, 70.5, 3, 0.3)
	}
	micOff() {
		this.p.fill('#d40303')
		this.p.strokeWeight(1)
		this.p.rect(247, 62.5, 9, 14, 7, 7, 7, 7) // head
		this.p.rect(250, 79, 3, 5) // leg vertical
		this.p.rect(247, 82, 10, 2) // leg horizontal
		// // mic arc
		this.p.noFill()
		this.p.strokeWeight(1.2)
		this.p.arc(251.7, 71, 15, 15, 0, 110, 90)
		// // stripes left
		this.p.rect(247, 67.5, 3, 0.3)
		this.p.rect(247, 70.5, 3, 0.3)
		// // stripes right
		this.p.rect(253, 67.5, 3, 0.3)
		this.p.rect(253, 70.5, 3, 0.3)
	}

	// // 2nd row - templates
	// boardAndPresenter, pcAndPresenter, pcOnly, board1, 2, 3
	// // Board + Presenter / Overview
	boardAndPresenter() {
		// // pc lines
		this.p.strokeWeight(1)
		this.p.line(65, 142, 51, 142) // line 1
		this.p.line(65, 145, 58, 145) // line 2
		this.p.line(65, 148, 56, 148) // line 3

		// pc board
		this.p.strokeWeight(1.2)
		this.p.noFill()
		this.p.rect(42, 137, 23, 15) // board
		this.p.line(50, 152, 48, 155) // left line
		this.p.line(53.5, 152, 53.5, 155) // middle line
		this.p.line(57, 152, 59, 155) // right line
		this.p.line(54, 137, 54, 133) // top line

		// // person
		this.p.fill(57)
		this.p.ellipse(33.5, 140, 5.5, 5.5) // face
		this.p.rect(30, 145, 6, 12, 3, 3, 3, 3) // body
		this.p.rect(28, 145, 10, 2, 4, 4, 4, 4) // shoulders

		// this.p.strokeWeight(3)
		this.p.line(28, 146, 25, 150) // left arm
		this.p.line(38, 146, 41, 148) // right arm 1
		this.p.line(41, 148, 44, 147) // right arm 2

		this.p.line(31, 157, 31, 161) // left leg
		this.p.line(35, 157, 35, 161) // right leg

		this.p.stroke(187)
		this.p.strokeWeight(2)
		this.p.line(33, 145, 33, 150) // slips

		this.p.stroke(37)
		this.p.strokeWeight(1.2)
		this.p.line(44, 147, 52, 144) // pointer
	}

	// PC + Presenter / Overview
	pcAndPresenter() {
		this.p.strokeWeight(1.2)
		this.p.noFill()
		this.p.rect(86, 137, 28, 17) // pc
		this.p.fill(57)
		this.p.ellipse(100, 159, 20, 3) // supportingLeg
		this.p.rect(98, 154, 4, 5, 7, 7, 7, 7) // supportingNeck

		// person
		this.p.ellipse(93, 142, 4, 4) // face
		this.p.rect(90, 146, 6, 6, 2, 2, 2, 2) // body
		this.p.rect(89, 146, 8, 2, 4, 4, 4, 4) // shoulders

		this.p.strokeWeight(2)
		this.p.line(89, 147, 88, 151) // leftArm
		this.p.line(97, 147, 98, 148) // rightArmOne
		this.p.line(99, 148, 101, 147) // rightArmTwo

		this.p.stroke(187)
		this.p.line(93, 146, 93, 148) // slips
		this.p.stroke(37)
		this.p.strokeWeight(1.2)
		this.p.line(101, 147, 104, 144) // pointer

		// // pc lines
		this.p.strokeWeight(1)
		this.p.line(114, 142, 100, 142) // line1
		this.p.line(114, 145, 107, 145) // line2
		this.p.line(114, 148, 105, 148) // line3
	}
	// pc only
	pc() {
		this.p.strokeWeight(1.2)
		this.p.noFill()
		this.p.rect(143, 137, 20, 14) // screen
		this.p.fill(57)
		this.p.quad(143, 151, 163, 151, 167, 159, 139, 159) // keyboard
		this.p.fill(127)
		this.p.quad(148, 154, 158, 154, 161, 158, 146, 158) // trackpad
	}
	// boards 1, 2, 3
	board1() {
		this.p.noFill()
		this.p.rect(30, 177, 32, 20) // boardRect1
		this.p.fill(57)
		this.p.rect(30, 177, 5, 20) // panel1
		this.p.text('1', 44, 193)
	}
	board2() {
		this.p.noFill()
		this.p.rect(85, 177, 32, 20) // boardRect2
		this.p.fill(57)
		this.p.rect(85, 177, 32, 5) // panel2
		this.p.text('2', 98, 193)
	}
	borad3() {
		this.p.noFill()
		this.p.rect(139, 177, 32, 20) // boardRect3
		this.p.fill(57)
		this.p.rect(166, 177, 5, 20) //panel3
		// this.p.noStroke()
		this.p.text('3', 150, 193)
	}

	// 2nd row - cam wheel
	camCircle() {
		this.p.fill(127)
		this.p.ellipse(220, 170, 70, 70) // main circle

		// // ARROW 1 - UP
		this.p.line(220, 170, 207.5, 158) // l1
		this.p.line(220, 170, 232.5, 158) // l2
		this.p.line(207.5, 158, 207.5, 141) // l3
		this.p.line(232.5, 158, 232.5, 141) // l4
		this.p.line(207.5, 141, 232.5, 141) // l5
		this.p.fill(0, 255, 0)
		this.p.triangle(219, 143, 210, 153, 228, 153) // triangleUp GREEN - up

		// // ARROW 2 - RIGHT
		this.p.line(232.5, 158, 250.5, 158) // l6
		this.p.line(232.5, 182, 250.5, 182) // l7
		this.p.line(250.5, 158, 250.5, 182) // l8
		this.p.line(220, 170, 232.5, 182) // l9
		this.p.fill(0, 255, 0)
		this.p.triangle(249, 170, 237, 161, 237, 179) // triangleRight GREEN - right

		// // ARROW 3 - DOWN
		this.p.line(220, 170, 207.5, 182) // l10
		this.p.line(232.5, 182, 232.5, 200) // l11
		this.p.line(207.5, 182, 207.5, 200) // l12
		this.p.line(232.5, 200, 207.5, 200) // l13
		this.p.fill(0, 255, 0)
		this.p.triangle(219, 200, 210, 188, 228, 188) // triangleDown GREEN - down

		// // ARROW 4 - LEFT
		this.p.line(207.5, 158, 190.5, 158) // l14
		this.p.line(207.5, 182, 190.5, 182) // l15
		this.p.line(190.5, 158, 190.5, 182) // the last side is in the arrow - up (l5), l16
		this.p.fill(0, 255, 0)
		this.p.triangle(190, 170, 203, 162, 203, 178) // triangleLeft GREEN - left
	}

	// 2nd row - zoom btns
	zoomBtns() {
		this.p.noStroke()
		// this.p.stroke(1)
		this.p.fill(37) // 107
		this.p.text('+', 262.2, 142.5)
		this.p.text('\u2014', 260, 202.7)
	}
}

// this.p.push()
// this.p.translate(-150, -10, 0) // 155, 7
// this.p.pop()
