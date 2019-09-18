import { readFileSync } from "fs"
import { Runner } from "./runner"
import parseInput from "./inputParse"
const input = readFileSync(process.argv[2]).toString()

const runner = new Runner(parseInput(input))
runner.run()
runner.result.forEach(({ x, y, direction }) =>
  console.log(`${x} ${y} ${direction}`)
)
