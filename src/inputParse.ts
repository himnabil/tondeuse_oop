import { Input, MowerProgram, MowerInit } from "./runner"
import { Surface } from "./surface"
import { Mower, Command } from "./mower"

const pairLines = (array: string[]): string[][] => {
  if (!array || array.length == 0) {
    return []
  }
  const [fst, snd, ...rest] = array
  return [[fst, snd], ...pairLines(rest)]
}

export default (input: string): Input => {
  const line = input.trim().split("\n")
  const surfaceIn = line.shift().split(" ")
  if (surfaceIn.length != 2) {
    throw new Error("1st line should contain 2 args")
  }
  const [w, h] = surfaceIn.map(s => parseInt(s))
  const surface = new Surface(w, h)
  const programsLines = pairLines(line)
  const programs: MowerProgram[] = programsLines.map(
    ([initLine, commandLine]) => {
      //todo check has 3 element
      const [x, y, direction] = initLine.split(" ")
      const init: MowerInit = { x: parseInt(x), y: parseInt(y), direction }
      //todo check command is valid
      const commands: Command[] = commandLine.split("").map(c => c as Command)
      return { init, commands }
    }
  )
  return { surface, programs }
}
