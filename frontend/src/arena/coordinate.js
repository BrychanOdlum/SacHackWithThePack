export default class Coordinate {
	constructor(x, y ) {
		this.x = x;
		this.y = y;
	}

	set(x, y) {
		this.x = x;
		this.y = y;
	}

	getRelative(offsetX, offsetY) {
		return new Coordinate(
			this.x + offsetX,
			this.y + offsetY
		)
	}
}
