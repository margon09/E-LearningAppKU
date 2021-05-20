class BtnLabels_av {
	constructor(sketch) {
		this.p = sketch
	}

	display() {
		// // non active side panel for av-center
		this.nonActiveSidePanel_AVcenter()
		// // active panel
		this.help()
		this.projector()
		this.microfon()
		this.turnOff_mainBtn()
		this.speakers()
	}

	//================== side panel (non-active) of the A/V panel ===================//

	nonActiveSidePanel_AVcenter() {
		// // sluk knap
		this.p.noFill()
		this.p.stroke(127)
		this.p.strokeWeight(1)
		this.p.arc(267, 78, 12, 12, this.p.radians(-40.0), this.p.radians(220.0)) // arc
		this.p.rect(266.5, 71, 1, 7, 5, 5, 5, 5)
		// // home
		this.p.fill(127)
		this.p.triangle(267, 97, 274, 103, 260, 103) // husRoof
		this.p.rect(262.5, 104, 10, 6) // husBody
		this.p.fill(57)
		this.p.noStroke()
		this.p.strokeWeight(0)
		this.p.rect(265, 105, 5, 6) // husEnterance

		// // light
		this.p.noStroke()
		this.p.fill(127)
		this.p.ellipse(267.5, 130, 10, 10) // lightHead
		this.p.rect(265, 132, 5, 5) // light1
		this.p.rect(265, 137, 5, 1) // light2
		this.p.rect(265.5, 139, 4, 1) // light3

		// // arrows up/down
		this.p.triangle(268, 152, 273, 160, 263, 160) // arrowUp
		this.p.triangle(268, 182, 273, 174, 263, 174) // arrowDown
	}

	//================== active panel ===================//
	help() {
		this.p.fill(217)
		this.p.stroke(187)
		this.p.textFont('Helvetica', 8)
		this.p.text('AV-CENTER', 15, 57)
		this.p.textSize(10)
		this.p.text('00:00', 15, 45)

		this.p.textFont('Helvetica-bold', 12)
		this.p.text('?', 77, 53.5)

		this.p.noFill()
		this.p.strokeWeight(1)

		this.p.ellipse(81, 49, 20, 20) // bigger circle
		this.p.ellipse(81, 49, 15, 15) // smaller circle

		//==== active ====//
		// fill(187);
		// stroke(187); //******
		// font = createFont("Helvetica", 8);
		// textFont(font);
		// text("AV-CENTER", 480, 80);
		// textSize(10);
		// text("00:00", 480, 68);

		// fill(0, 205, 0);
		// boldFont = createFont("Helvetica-bold", 12);
		// textFont(boldFont);
		// text("?", 541.5, 76.5);

		// noFill();
		// stroke(0, 205, 0);
		// biggerCircle = createShape(ELLIPSE, 546, 72, 20, 20); // bigger circle
		// smallerCircle = createShape(ELLIPSE, 546, 72, 15, 15); // cmaller circle
	}
	projector() {
		this.p.fill(187)
		this.p.strokeWeight(1)
		this.p.rect(115, 43, 35, 14, 7, 7, 7, 7) // mainBody
		this.p.stroke(0)
		this.p.strokeWeight(0.5)
		this.p.ellipse(133, 47, 15, 15) // main cam circle
		this.p.fill(57)
		this.p.ellipse(133, 47, 10, 10) // stroke cam circle
		this.p.strokeWeight(0)
		this.p.rect(119, 47, 2, 7) // side bars 1 left
		this.p.rect(122, 47, 2, 7) // side bars 2 left
		this.p.rect(142, 47, 2, 7) // side bars 1 right
		this.p.rect(145, 47, 2, 7) // side bars 2 right
		this.p.fill(187)
		this.p.ellipse(133, 47, 5, 5) // linse Circle
		this.p.rect(122, 57, 3, 2.3) // leg 1
		this.p.rect(141.5, 57, 3, 2.3) // leg 2
	}
	projectorActive() {
		this.p.fill(0, 205, 0)
		this.p.strokeWeight(1)
		this.p.rect(115, 43, 35, 14, 7, 7, 7, 7) // mainBody
		this.p.stroke(0, 50, 0)
		this.p.strokeWeight(0.5)
		this.p.ellipse(133, 47, 15, 15) // main cam circle
		this.p.fill(57)
		this.p.ellipse(133, 47, 10, 10) // stroke cam circle
		this.p.strokeWeight(0)
		this.p.rect(119, 47, 2, 7) // side bars 1 left
		this.p.rect(122, 47, 2, 7) // side bars 2 left
		this.p.rect(142, 47, 2, 7) // side bars 1 right
		this.p.rect(145, 47, 2, 7) // side bars 2 right
		this.p.fill(0, 205, 0)
		this.p.ellipse(133, 47, 5, 5) // linse Circle
		this.p.rect(122, 57, 3, 2.3) // leg 1
		this.p.rect(141.5, 57, 3, 2.3) // leg 2
	}

	microfon() {
		this.p.stroke(0)
		this.p.strokeWeight(0.5)
		this.p.fill(187) // NB! corrected
		this.p.rect(177, 39, 13, 16, 12, 12, 12, 12) // micHead
		this.p.rect(181.5, 55, 4, 5) // micBen
		this.p.rect(176.5, 59, 14, 2) // micStand

		this.p.fill(57)
		this.p.stroke(0)
		// right rectanlges
		this.p.rect(178, 45, 4, 1, 12, 12, 12, 12)
		this.p.rect(178, 48, 4, 1, 12, 12, 12, 12)
		// left rectanlges
		this.p.rect(185, 45, 4, 1, 12, 12, 12, 12)
		this.p.rect(185, 48, 4, 1, 12, 12, 12, 12)

		// bow
		this.p.noFill()
		this.p.stroke(187)
		this.p.strokeWeight(1.5)
		this.p.arc(184, 50, 17, 15, this.p.radians(1.0), this.p.radians(180.0)) // arc

		//==== active ====//
		// stroke(0);
		// strokeWeight(0.5);
		// fill(0, 205, 0);
		// micHead = createShape(RECT, 642, 62, 13, 16, 12, 12, 12, 12); // head
		// micBen = createShape(RECT, 646.5, 78, 4, 5); // ben
		// micStand = createShape(RECT, 641.5, 82, 14, 2); // stand

		// fill(57);
		// stroke(0);
		// // right rectanlges
		// rightRect1 = createShape(RECT, 643, 68, 4, 1, 12, 12, 12, 12);
		// rightRect2 = createShape(RECT, 643, 71, 4, 1, 12, 12, 12, 12);
		// // left rectanlges
		// leftRect1 = createShape(RECT, 650, 68, 4, 1, 12, 12, 12, 12);
		// leftRect2 = createShape(RECT, 650, 71, 4, 1, 12, 12, 12, 12);

		// // bow
		// noFill();
		// stroke(0, 205, 0);
		// strokeWeight(1.5);
		// arc(649, 73, 17, 15, radians(1.0), radians(180.0)); // arc
	}

	turnOff_mainBtn() {
		this.p.stroke(37)
		this.p.strokeWeight(1.3)
		this.p.arc(229, 50, 18, 18, this.p.radians(-40.0), this.p.radians(220.0)) // big outside arc (for the cant)
		this.p.arc(229, 50, 12, 12, this.p.radians(-40.0), this.p.radians(220.0)) // small inside arc (for the cant)
		this.p.stroke(165, 26, 30) //stroke(205, 0, 0);
		this.p.strokeWeight(3)
		this.p.arc(229, 50, 15, 15, this.p.radians(-40.0), this.p.radians(220.0)) // Main arc

		this.p.fill(165, 26, 30) //fill(205, 0, 0);
		this.p.stroke(37)
		this.p.strokeWeight(0.5)
		this.p.rect(227, 39, 4, 12, 12, 12, 12, 12) // firkant

		// ==== active ==== //
		// stroke(37)
		// strokeWeight(1.3)
		// bigArc = createShape(ARC, 694, 73, 18, 18, radians(-40.0), radians(220.0))
		// smallArc = createShape(ARC, 694, 73, 12, 12, radians(-40.0), radians(220.0))
		// stroke(235, 26, 30) //stroke(205, 0, 0);
		// strokeWeight(3)
		// mainArc = createShape(ARC, 694, 73, 15, 15, radians(-40.0), radians(220.0))

		// fill(235, 26, 30) //fill(205, 0, 0);
		// stroke(37)
		// strokeWeight(0.5)
		// firkant = createShape(RECT, 692, 62, 4, 12, 12, 12, 12, 12)
	}

	speakers() {
		// "højtaler -"
		this.p.stroke(37)
		this.p.strokeWeight(0.5) // 0.1
		this.p.fill(187)
		this.p.triangle(19, 209, 28, 198, 28, 221) // speakersMinusHead
		this.p.rect(17, 204, 5, 10) // speakersMinusBody

		// arc for "højtaler -", immitating sound coming out
		this.p.noFill()
		this.p.stroke(187)
		this.p.strokeWeight(1)
		this.p.arc(28, 209, 9, 12, this.p.radians(-70.0), this.p.radians(70.0)) // arc

		//// højtaler +
		this.p.stroke(37)
		this.p.strokeWeight(0.5) // 0.1
		this.p.fill(187)
		this.p.triangle(236, 209, 246, 198, 246, 221) // speakersPlusHead
		this.p.rect(234, 204, 5, 10) // speakersPlusBody
		// // arrows from the speaker
		this.p.noFill()
		this.p.stroke(187)
		this.p.strokeWeight(1)
		this.p.arc(246, 209, 9, 12, this.p.radians(-70.0), this.p.radians(70.0)) // arc
		this.p.arc(250, 209, 9, 16, this.p.radians(-70.0), this.p.radians(70.0)) // arc
	}
}

// this.p.push()
// this.p.translate(-465, -23, 0)
//this.p.pop()

// this.p.push()
// this.p.translate(-465, -10, 0)
//// højtaler +
// this.p.translate(13, 0, 0)
//this.p.pop()
