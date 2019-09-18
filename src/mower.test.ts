import { Surface } from "./surface"
import { Command, Mower } from "./mower"

const surface = new Surface(4, 5)

const show = ({ x, y, d }) => `( ${x}, ${y}, ${d} )`


;[
  { s: { x: 3, y: 3, d: "N" }, c: Command.A, e: { x: 3, y: 4, d: "N" } },
  { s: { x: 3, y: 3, d: "S" }, c: Command.A, e: { x: 3, y: 2, d: "S" } },
  { s: { x: 3, y: 3, d: "E" }, c: Command.A, e: { x: 4, y: 3, d: "E" } },
  { s: { x: 3, y: 3, d: "W" }, c: Command.A, e: { x: 2, y: 3, d: "W" } },

  { s: { x: 3, y: 3, d: "N" }, c: Command.D, e: { x: 3, y: 3, d: "E" } },
  { s: { x: 3, y: 3, d: "S" }, c: Command.D, e: { x: 3, y: 3, d: "W" } },
  { s: { x: 3, y: 3, d: "E" }, c: Command.D, e: { x: 3, y: 3, d: "S" } },
  { s: { x: 3, y: 3, d: "W" }, c: Command.D, e: { x: 3, y: 3, d: "N" } },

  { s: { x: 3, y: 3, d: "N" }, c: Command.G, e: { x: 3, y: 3, d: "W" } },
  { s: { x: 3, y: 3, d: "S" }, c: Command.G, e: { x: 3, y: 3, d: "E" } },
  { s: { x: 3, y: 3, d: "E" }, c: Command.G, e: { x: 3, y: 3, d: "N" } },
  { s: { x: 3, y: 3, d: "W" }, c: Command.G, e: { x: 3, y: 3, d: "S" } },

  { s: { x: 3, y: 5, d: "N" }, c: Command.A, e: { x: 3, y: 5, d: "N" } },
  { s: { x: 3, y: 0, d: "S" }, c: Command.A, e: { x: 3, y: 0, d: "S" } },
  { s: { x: 4, y: 3, d: "E" }, c: Command.A, e: { x: 4, y: 3, d: "E" } },
  { s: { x: 0, y: 3, d: "W" }, c: Command.A, e: { x: 0, y: 3, d: "W" } }

].forEach(({ s, c, e }) => {
  test(`${show(s)} exec ${c} ==> ${show(e)}`, () => {
    const mower = new Mower(surface, s.x, s.y, s.d)
    mower.exec(c)
    expect(mower.x).toBe(e.x)
    expect(mower.y).toBe(e.y)
    expect(mower.direction).toBe(e.d)
  })
})
