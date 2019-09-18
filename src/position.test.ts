import { Surface } from "./surface"
import { Direction } from "./direction"
import { Position } from "./position"

const surface = new Surface(4, 5)

test(" has constructor and prop ", () => {
  const position = new Position(surface, 1, 3)
  expect(position.x).toBe(1)
  expect(position.y).toBe(3)
})
const show = ({ x, y }) => `(${x},${y})`
;[
  { current: { x: 3, y: 3 }, direction: "N", advanced: { x: 3, y: 4 } },
  { current: { x: 3, y: 3 }, direction: "S", advanced: { x: 3, y: 2 } },
  { current: { x: 3, y: 3 }, direction: "E", advanced: { x: 4, y: 3 } },
  { current: { x: 3, y: 3 }, direction: "W", advanced: { x: 2, y: 3 } },
  { current: { x: 3, y: 5 }, direction: "N", advanced: { x: 3, y: 5 } },
  { current: { x: 3, y: 0 }, direction: "S", advanced: { x: 3, y: 0 } },
  { current: { x: 3, y: 4 }, direction: "E", advanced: { x: 4, y: 4 } },
  { current: { x: 3, y: 0 }, direction: "W", advanced: { x: 2, y: 0 } }
].forEach(({ current, direction, advanced }) => {
  test(`${show(current)} = ${direction} => ${show(advanced)}`, () => {
    const position = new Position(surface, current.x, current.y)
    position.advance(new Direction(direction))
    expect(position.x).toBe(advanced.x)
    expect(position.y).toBe(advanced.y)
  })
})
