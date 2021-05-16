class Collision {
	// CONSTRUCTOR 1 - RECT BTN
	constructor(x, y, w, h) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}
	// CONSTRUCTOR 2 - ROUND BTN - NO CONSTRUCTOR OVERLOAD in JS !!!!!
	// constructor2(x, y, r) {
	//     this.x = x;
	//     this.y = y;
	//     this.r = r;
	// }

	collisionRect(x, y) {
		let rectWidth = this.x + this.w
		let rectHeight = this.y + this.h
		if (x > this.x && x < rectWidth && y > this.y && y < rectHeight) {
			//console.log("Collision RECT");
			return true
		}
	}

	// collisionCircle(x, y, r) {

	// 	// let dx = circleB.posX - circleA.posX
	// 	// let dy = circleB.posY - circleA.posY
	// 	// let distance = Math.hypot(dx, dy)

	// 	let distance = dist(x, y, this.x, this.y)
	// 	console.log(distance + ' ' + this.r)
	// 	if (distance < this.r) {
	// 		console.log('Collision CIRCLE')
	// 		return true
	// 	}
	// }
}
