import { Runner, Input } from "./runner"
import { Surface } from "./surface"
import { Command } from "./mower"

test(" runner ", () => {
  const input: Input = {
    surface: new Surface(5, 5),
    programs: [
      {
        // 1 2 N ,GAGAGAGAA
        init: { x: 1, y: 2, direction: "N" },
        commands: [
          Command.G,
          Command.A,
          Command.G,
          Command.A,
          Command.G,
          Command.A,
          Command.G,
          Command.A,
          Command.A
        ]
      },
      {
        // 3 3 E , AADAADADDA
        init: { x: 3, y: 3, direction: "E" },
        commands: [
          Command.A,
          Command.A,
          Command.D,
          Command.A,
          Command.A,
          Command.D,
          Command.A,
          Command.D,
          Command.D,
          Command.A
        ]
      }
    ]
  }
  // 1 3 N
  // 5 1 E
  const expected = [
    { x: 1, y: 3, direction: "N" },
    { x: 5, y: 1, direction: "E" }
  ]
  const runner = new Runner(input)
  runner.run()
  expect(runner.result).toEqual(expected)
})
