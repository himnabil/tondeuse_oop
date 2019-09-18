import { Input } from "./runner";
import { Surface } from "./surface";
import { Command } from "./mower";
import inputParse from "./inputParse"

test("inputParse ", ()=> {
  const input = 
`5 5
1 2 N
GAGAGAGAA
3 3 E
AADAADADDA
`

  const expected: Input = {
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
  expect( inputParse(input) ).toStrictEqual(expected)

})

