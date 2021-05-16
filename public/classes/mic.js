class Mic {
	constructor(sketch) {
		this.p = sketch

		this.linePosX1 = 165
		this.linePosY1 = 30
		this.linePosX2 = 165
		this.linePosY2 = 10

		this.bodyPosX = 80
		this.bodyPosY = 30
		this.bodyWidth = 125
		this.bodyHeight = 140

		this.coverLength = 15

		this.rTopBody = 5
		this.rBottomBody = 12
		this.rBottomCover = 0

		this.coverPosY = this.bodyHeight + this.bodyPosY
		this.coverHeight = 90

		this.stroke = 127 //57

		this.muteBtnPosX = 90
		this.muteBtnPosY = 14
		this.muteWidth = 42
		this.muteHeight = 13
		this.muteCorner = 3
		this.muteCorner2 = 0

		this.labelPosX = 94
		this.labelPosY = 25

		this.roundBtnPosX = 87
		this.roundBtnPosY = 140

		this.muted = true // when true, it´s black
		this.offBtn = true
	}

	displayMic() {
		this.micBody()
		this.roundBtn()
		this.micCover()
	}

	reDrawBG() {
		// re-draw BG around the muteBtn
		this.p.fill(247)
		this.p.noStroke()
		this.p.rect(88, 9, 55, 20)
	}
	mutedBtn() {
		this.reDrawBG()

		this.p.fill(0)
		// panel
		this.p.rect(89.5, this.muteBtnPosY + 13, 51, 3)

		this.p.stroke(0)
		this.p.strokeWeight(1)
		// button
		this.p.rect(
			this.muteBtnPosX,
			this.muteBtnPosY,
			this.muteWidth,
			this.muteHeight,
			this.muteCorner,
			this.muteCorner,
			this.muteCorner2,
			this.muteCorner2
		)
		// txt label
		this.p.fill(247)
		this.p.noStroke()
		this.p.strokeWeight(0)
		this.p.textSize(10)

		if (this.muted) {
			this.p.text('unmute', this.labelPosX, this.labelPosY)
		} else {
			this.p.text('mute', this.labelPosX + 6, this.labelPosY)
		}

		if (!this.muted && this.muteBtnPosX <= 97) {
			this.muteBtnPosX = this.muteBtnPosX + 1
			this.labelPosX = this.labelPosX + 1
		} else if (this.muted && this.muteBtnPosX >= 91) {
			this.muteBtnPosX = this.muteBtnPosX - 1
			this.labelPosX = this.labelPosX - 1
		}
	}

	btnCollision() {
		// COLLISION on muteBtn
		const onColMute = new Collision(this.muteBtnPosX, this.muteBtnPosY, 42, 13)
		if (onColMute.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.toggleMuteBtn()
			console.log(this.muted)
		}
	}

	toggleMuteBtn() {
		this.muted = !this.muted
	}

	roundBtn() {
		const roundBtn = this.p.createButton('on')
		roundBtn.style('padding', '0')
		roundBtn.position(this.roundBtnPosX, this.roundBtnPosY)
		roundBtn.size(22, 22)
		roundBtn.style('border-radius', '50%')

		roundBtn.style('color', '#f7f7f7')
		roundBtn.style('background-color', '#393939') // 434343 // black-ish

		roundBtn.mousePressed(() => {
			this.toggleRountBtn()
			if (!this.offBtn) {
				roundBtn.style('color', '#393939') //
				roundBtn.style('background-color', '#f7f7f7') // white
				roundBtn.html('off')
			} else {
				roundBtn.style('color', '#f7f7f7')
				roundBtn.style('background-color', '#393939') // 434343 // black-ish
				roundBtn.html('on')
			}
		})
	}

	toggleRountBtn() {
		this.offBtn = !this.offBtn
	}

	micBody() {
		//this.p.noFill()
		this.p.fill('white')
		this.p.stroke(this.stroke)
		this.p.line(this.linePosX1, this.linePosY1, this.linePosX2, this.linePosY2)

		this.p.rect(
			this.bodyPosX,
			this.bodyPosY,
			this.bodyWidth,
			this.bodyHeight,
			this.rTopBody,
			this.rTopBody,
			this.rBottomBody,
			this.rBottomBody
		)
	}

	micCover() {
		this.p.fill(237)
		this.p.rect(
			this.bodyPosX,
			this.coverPosY,
			this.bodyWidth,
			this.coverHeight - this.coverLength,
			this.rBottomBody,
			this.rBottomBody,
			this.rBottomCover,
			this.rBottomCover
		)
	}
}

// https://editor.p5js.org/mj1999/sketches/BkJcDVS6b
// https://stackoverflow.com/questions/35680778/p5js-button-mousepressed-calls-function-arguments
