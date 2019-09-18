import { Surface } from "./surface"
import { Command, Mower } from "./mower"

export interface MowerInit {
  x: number
  y: number
  direction: string
}

export interface MowerProgram {
  init: MowerInit
  commands: Command[]
}

export interface Input {
  surface: Surface
  programs: MowerProgram[]
}

class MowerProgramRunner {
  private _mower: Mower = null

  constructor(private _surface: Surface, private _program: MowerProgram) {}
  get result() {
    return {
      x: this._mower.x,
      y: this._mower.y,
      direction: this._mower.direction
    }
  }
  run() {
    this._mower = new Mower(
      this._surface,
      this._program.init.x,
      this._program.init.y,
      this._program.init.direction
    )
    this._program.commands.forEach(command => this._mower.exec(command))
  }
}

export class Runner {
  private _programsRunners: MowerProgramRunner[]
  constructor({ surface, programs }: Input) {
    this._programsRunners = programs.map(
      program => new MowerProgramRunner(surface, program)
    )
  }
  run() {
    this._programsRunners.forEach(runner => runner.run())
  }
  get result() {
    return this._programsRunners.map(runner => runner.result)
  }
}
