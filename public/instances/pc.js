//======================================== PC =============================================
let pc = sketch => {
	let pc
	let cables
	let usbCables

	// SETUP
	sketch.setup = () => {
		sketch.createCanvas((windowWidth = window.innerWidth), (windowHeight = 250))
		sketch.background(247)

		cables = new Cables(sketch) // static cables
		pc = new Screens(sketch)
		usbCables = new CablesUsbHdmi(sketch)
	}

	// DRAW
	sketch.draw = () => {
		sketch.background(247)

		cables.cablesConverterToPC_PC()

		pc.displayPC()
		usbCables.hdmi()
		usbCables.usb()
		usbCables.pcHDMI()
		usbCables.pcUSB()

		// collision with usb head and pcUSB (for auto snap)
		usbCables.usbCollisionWithPC()
		usbCables.hdmiCollisionWithPC()

		// updating cables position
		usbCables.drawUSBcables()
		usbCables.drawHDMIcables()
	}

	// dragging the wires
	sketch.mousePressed = () => {
		usbCables.collision()
	}
	sketch.mouseReleased = () => {
		usbCables.stopCollision()
	}
}
let myPC = new p5(pc, 'hardware_pc')
