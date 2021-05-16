class CablesUsbHdmi {
	// DELETE CLASS AFTER !!!
	constructor(sketch) {
		this.p = sketch
		this.widthDoc = document.getElementById('hardware_pc').offsetWidth
		//var height = document.getElementById('hardware_pc').offsetHeight

		// HDMI
		// vertical line
		this.verticalToHDMI_X = 1
		this.verticalToHDMI_Y1 = 0
		this.verticalToHDMI_Y2 = 30
		// line to hdmi
		this.toHDMI_X1 = 1
		this.toHDMI_Y1 = 31
		this.toHDMI_X2 = 30
		this.toHDMI_Y2 = 31
		// small pimp to hdmi
		this.hdmi_X = 30
		this.hdmi_Y = 30
		this.size = 2
		this.correctPimpX = 2
		this.correctPimpY = 1
		// hdmi (headder)
		this.hdmiPosX = 32
		this.hdmiPosY = 16
		this.HDMIwidth = 17
		this.HDMIheight = 30

		// USB
		// vertical line
		this.verticalToUSB_X = this.widthDoc - 2
		this.verticalToUSB_Y1 = 1
		this.verticalToUSB_Y2 = 31
		// line to hdmi
		this.toUSB_X2 = this.widthDoc - 32
		this.toUSB_Y = 30
		// usb headder
		this.usbPosX = this.widthDoc - 49
		this.usbPosY = 17
		this.USBwidth = 17
		this.USBheight = 30

		// pcHDMI button
		this.pcHDMI_X = 32
		this.pcHDMI_Y = 150 // 179
		// pcUSB button
		this.pcUSB_X = 246
		this.pcUSB_Y = 150 // 179

		// for dragging the wires
		this.isPressed_USB = false
		this.isPressed_HDMI = false
		// for COLLISION wires' heads with PC heads (usb, hdmi)
		this.pcUSBcollision = false
		this.pcHDMIcollision = false

		// NOT VISIBLE rect for COLLISION DETECTION
		this.colUSBrectX = 230 //247
		this.colUSBrectY = 135
		this.colHDMIrectX = 18
		this.colHDMIrectY = 135
		this.width = 50 //30
		this.height = 60
	}

	// FROM MEDIABOX (cablesMediaboxToPC_PC)
	hdmi() {
		this.p.strokeWeight(1)
		this.p.stroke(0)

		// // vertical line for hdmi
		this.p.line(
			this.verticalToHDMI_X,
			this.verticalToHDMI_Y1,
			this.verticalToHDMI_X,
			this.verticalToHDMI_Y2
		)
		// // horiz line to hdmi
		this.p.line(this.toHDMI_X1, this.toHDMI_Y1, this.toHDMI_X2, this.toHDMI_Y2)
		// // small pimp
		this.p.fill(0)
		this.p.rect(this.hdmi_X, this.hdmi_Y, this.size, this.size)

		// // hdmi head
		this.p.noFill()
		this.p.rect(this.hdmiPosX, this.hdmiPosY, this.HDMIwidth, this.HDMIheight)

		this.p.fill(0)
		this.p.strokeWeight(0)
		this.p.textSize(10)
		this.p.text('HDMI', 2, 27)
	}

	pcHDMI() {
		this.p.noFill()
		this.p.strokeWeight(1)
		this.p.stroke(0)
		this.p.rect(this.pcHDMI_X, this.pcHDMI_Y, this.HDMIwidth, this.HDMIheight)

		// NON_VISIBLE rect for COLLISION with PC - HDMI end
		this.p.noFill()
		this.p.noStroke()
		this.p.rect(this.colHDMIrectX, this.colHDMIrectY, this.width, this.height)
	}

	// // USB
	usb() {
		this.p.strokeWeight(1)
		this.p.stroke(0)
		this.p.fill(0)

		// vertical line
		this.p.line(
			this.verticalToUSB_X - this.correctPimpY,
			this.verticalToUSB_Y1,
			this.verticalToUSB_X - this.correctPimpY,
			this.verticalToUSB_Y2
		)
		// horiz line to usb
		this.p.line(
			this.verticalToUSB_X,
			this.verticalToUSB_Y2,
			this.toUSB_X2,
			this.verticalToUSB_Y2
		)
		// small pimp
		this.p.rect(this.toUSB_X2, this.toUSB_Y, this.size, this.size)
		// usb head
		this.p.noFill()
		this.p.rect(this.usbPosX, this.usbPosY, this.USBwidth, this.USBheight)

		this.p.fill(0)
		this.p.strokeWeight(0)
		this.p.textSize(10)
		this.p.text('USB', this.widthDoc - 29, 27)
	}

	pcUSB() {
		this.p.noFill()
		this.p.strokeWeight(1)
		this.p.stroke(0)
		this.p.rect(this.pcUSB_X, this.pcUSB_Y, this.HDMIwidth, this.HDMIheight)

		// NON_VISIBLE rect for COLLISION with PC - USB end
		this.p.noFill()
		this.p.noStroke()
		this.p.rect(this.colUSBrectX, this.colUSBrectY, this.width, this.height)
	}

	// =============== COLLISION DETECTION ============== //
	// COLLISION WITH USB/HDMI HEAD AND MOUSE
	collision() {
		// collision usb
		let usbCollision = new Collision(
			this.usbPosX,
			this.usbPosY,
			this.USBwidth,
			this.USBheight
		)
		if (usbCollision.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.isPressed_USB = true
		}
		// collision hdmi
		let hdmiCollision = new Collision(
			this.hdmiPosX,
			this.hdmiPosY,
			this.HDMIwidth,
			this.HDMIheight
		)
		if (hdmiCollision.collisionRect(this.p.mouseX, this.p.mouseY)) {
			this.isPressed_HDMI = true
		}
	}
	stopCollision() {
		// collision usb
		this.isPressed_USB = false
		// collision hdmi
		this.isPressed_HDMI = false
	}

	// COLLISION WITH PC HEAD AND HDMI/USB HEAD (functions as rollover and snippet)
	usbCollisionWithPC() {
		// USB COLLISION
		let pcUsbCollision = new Collision(
			this.colUSBrectX,
			this.colUSBrectY,
			this.width,
			this.height
		)
		if (pcUsbCollision.collisionRect(this.usbPosX, this.usbPosY)) {
			this.pcUSBcollision = true
			return true
		} else {
			this.pcUSBcollision = false
			return false
		}
	}
	hdmiCollisionWithPC() {
		// // HDMI COLLISION
		let pcHdmiCollision = new Collision(
			this.colHDMIrectX,
			this.colHDMIrectY,
			this.width,
			this.height
		)
		if (pcHdmiCollision.collisionRect(this.hdmiPosX, this.hdmiPosY)) {
			this.pcHDMIcollision = true
			return true
		} else {
			this.pcHDMIcollision = false
			return false
		}
	}

	// ================== Updating USB Cables ================= //
	drawUSBcables() {
		this.p.stroke(0)

		if (this.isPressed_USB) {
			// // usb head
			this.usbPosX = this.p.mouseX - this.USBwidth
			this.usbPosY = this.p.mouseY - this.USBheight / 2

			// // horiz line to USB
			this.toUSB_X2 = this.p.mouseX

			// // vertical line to USB
			this.verticalToUSB_Y2 = this.p.mouseY

			// // small pimp
			this.toUSB_X2 = this.p.mouseX
			this.toUSB_Y = this.p.mouseY - this.correctPimpY

			// // TEXT
			this.p.fill(0)
			this.p.strokeWeight(0)
			this.p.textSize(10)
			this.p.text(
				'USB',
				(this.p.mouseX + this.toUSB_X2) / 2 + 30,
				this.p.mouseY
			)
		}

		if (this.pcUSBcollision && !this.isPressed_USB) {
			this.usbPosX = this.pcUSB_X
			this.usbPosY = this.pcUSB_Y

			// // horiz line to USB
			this.toUSB_X2 = this.pcUSB_X + this.USBwidth
			// // vertical line to USB
			this.verticalToUSB_Y2 = this.pcUSB_Y + this.USBheight / 2
			// // small pimp
			this.toUSB_X2 = this.pcUSB_X + this.USBwidth
			this.toUSB_Y = this.pcUSB_Y + this.USBheight / 2 - this.correctPimpY
		}

		// changing the color of USB, works as snippet
		if ((this.usbPosX === this.pcUSB_X, this.usbPosY === this.pcUSB_Y)) {
			this.p.fill(0, 0, 255, 50)
			this.p.rect(this.pcUSB_X, this.pcUSB_Y, this.USBwidth, this.USBheight)
		}
	}

	// ================== Updating HDM Cables ================= //
	drawHDMIcables() {
		this.p.stroke(0)
		if (this.isPressed_HDMI) {
			// // HDMI head
			this.hdmiPosX = this.p.mouseX - this.HDMIwidth
			this.hdmiPosY = this.p.mouseY - this.HDMIheight / 2

			// //horiz line to USB
			this.toHDMI_X2 = this.p.mouseX - this.HDMIwidth
			this.toHDMI_Y1 = this.p.mouseY
			this.toHDMI_Y2 = this.p.mouseY

			// //vertical line to USB
			this.verticalToHDMI_Y2 = this.p.mouseY

			// // small pimp
			this.hdmi_X = this.p.mouseX - this.HDMIwidth - this.correctPimpX
			this.hdmi_Y = this.p.mouseY - this.correctPimpY

			// // TEXT
			this.p.fill(0)
			this.p.strokeWeight(0)
			this.p.textSize(10)
			this.p.text(
				'HDMI',
				(this.p.mouseX - this.toHDMI_X2 - this.HDMIwidth) / 2,
				this.p.mouseY
			)
		}

		if (this.pcHDMIcollision && !this.isPressed_HDMI) {
			this.hdmiPosX = this.pcHDMI_X
			this.hdmiPosY = this.pcHDMI_Y

			// // vertical line to USB
			this.verticalToHDMI_Y2 = this.pcHDMI_Y + this.HDMIheight / 2

			// //horiz line to USB
			this.toHDMI_X2 = this.hdmiPosX
			this.toHDMI_Y1 = this.pcHDMI_Y + this.HDMIheight / 2
			this.toHDMI_Y2 = this.pcHDMI_Y + this.HDMIheight / 2

			// // // small pimp
			this.hdmi_X = this.hdmiPosX - this.correctPimpX
			this.hdmi_Y = this.pcHDMI_Y + this.HDMIheight / 2 - this.correctPimpY
		}

		// changing the color of USB, works as snippet
		if ((this.hdmiPosX === this.pcHDMI_X, this.hdmiPosY === this.pcHDMI_Y)) {
			this.p.fill(0, 0, 255, 50)
			this.p.rect(this.pcHDMI_X, this.pcHDMI_Y, this.HDMIwidth, this.HDMIheight)
		}
	}
}
