export class Direction {
  private _x: number
  private _y: number
  get x() {
    return this._x
  }
  get y() {
    return this._y
  }

  constructor(d: string) {
    switch (d) {
      case "N":
        this._x = 0
        this._y = 1
        break
      case "S":
        this._x = 0
        this._y = -1
        break
      case "E":
        this._x = 1
        this._y = 0
        break
      case "W":
        this._x = -1
        this._y = 0
        break
      default:
        throw new Error("incorrect direction")
    }
  }

  valueOf() {
    if (this._y > 0) return "N"
    if (this._x > 0) return "E"
    if (this._x < 0) return "W"
    if (this._y < 0) return "S"
  }

  public turnRight() {
    const x = this._x
    const y = this._y

    this._x = y
    this._y = -x
  }

  public turnLeft() {
    const x = this._x
    const y = this._y

    this._x = -y
    this._y = x
  }
}
