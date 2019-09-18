import { Surface } from "./surface"; 
import { Position } from "./position";
import { Direction } from "./direction";

export enum Command {
  A = "A",
  G = "G",
  D = "D"
}

export class Mower {
  private _position : Position
  private _direction : Direction

  constructor( surface: Surface , x:number , y: number , direction: string){
    this._position = new Position(surface,x,y)
    this._direction = new Direction(direction)
  }

  get x(){
    return this._position.x
  }
  get y() {
    return this._position.y
  }
  get direction(){
    return this._direction.valueOf()
  }

  exec( command : Command){
    switch( command ){
      case Command.A :
        this._position.advance( this._direction )
        break
      case Command.G:
        this._direction.turnLeft()
        break
      case Command.D:
        this._direction.turnRight()
        break
    }
  }

}
