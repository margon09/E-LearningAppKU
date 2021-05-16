class Cables {
	constructor(sketch) {
		this.p = sketch
		this.hdmiBtnPosX = 312
		this.hdmiBtnPosY = 80
		this.hdmiWidth = 17
		this.hdmiHeight = 35

		this.usbBtnPosX = 312
		this.usbBtnPosY = 130
		this.usbWidth = 17
		this.usbHeight = 35

		this.width = document.getElementById('hardware_pc').offsetWidth
	}

	//================================= CABLES ===============================//
	connectingCablesCam() {
		// this.p.fill(57)
		this.p.strokeWeight(1)
		this.p.stroke(37)
		this.p.line(73, 70, 73, 35)
		this.p.line(73, 70, 0, 70)
	}

	connectingCablesProjector() {
		this.p.strokeWeight(1)
		this.p.stroke(37)
		this.p.line(0, 70, this.width, 70)

		this.p.line(40, 63, 40, 50)
		this.p.line(0, 63, 40, 63)
	}

	connectingCablesMediabox() {
		this.p.strokeWeight(1)
		this.p.stroke(37)

		this.p.line(15, 70, this.width, 70)
		this.p.line(15, 70, 15, 56) // Long height

		this.p.line(23, 63, this.width, 63)
		this.p.line(23, 63, 23, 56) // short height

		this.p.fill(57)
		this.p.rect(14, 56, 2, 2)
		this.p.rect(22, 56, 2, 2)
	}

	cablesMediaboxToConverter() {
		this.p.line(53, 26, 53, 10) // Long height
		this.p.line(46, 26, 46, 17) // short height

		this.p.line(53, 10, 0, 10)
		this.p.line(46, 17, 0, 17)
	}

	connectingCablesConverter() {
		this.p.strokeWeight(1)
		this.p.stroke(37)
		this.p.line(30, 10, 1000, 10) // Long height
		this.p.line(30, 10, 30, 24)
		this.p.line(38, 17, 1000, 17) // short height
		this.p.line(38, 17, 38, 24)

		this.p.fill(57)
		this.p.rect(29, 22, 2, 2)
		this.p.rect(37, 22, 2, 2)
	}

	cablesMediaboxToPC() {
		this.p.line(62, 3, 62, 27)
		this.p.line(62, 3, 0, 3)
	}
	cablesMediaboxToPC_throughConverter() {
		this.p.line(4, 3, 1000, 3)
		this.p.line(4, 3, 4, 80)
	}
	cablesConverterToPC() {
		this.p.line(67, 43, 72, 43)
		this.p.line(72, 43, 72, 80)
	}

	//========================== USB-HDMI CABLES ========================//

	cablesConverterToPC_PC() {
		this.p.strokeWeight(1)
		this.p.stroke(0)
		this.p.line(68, 1, this.width - 2, 1)
		this.p.line(68, 0, 68, 1)
	}
}
