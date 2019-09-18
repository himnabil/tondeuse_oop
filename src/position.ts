import { Surface } from "./surface"
import { Direction } from "./direction"

export class Position {
  private surface: Surface
  private _x: number
  private _y: number
  get x() {
    return this._x
  }
  get y() {
    return this._y
  }
  constructor(surface: Surface, x: number, y: number) {
    this.surface = surface
    this._x = x
    this._y = y
  }

  advance(direction: Direction) {
    this._x += direction.x
    if (this._x > this.surface.w) {
      this._x = this.surface.w
    }
    if (this._x < 0) {
      this._x = 0
    }

    this._y += direction.y
    if (this._y > this.surface.h) {
      this._y = this.surface.h
    }
    if (this._y < 0) {
      this._y = 0
    }
  }
}
