import { Direction } from "./direction"
;["N", "S", "W", "E"].forEach(d => {
  test(`${d} is ${d}`, () => {
    const direction = new Direction(d)
    expect(direction.valueOf()).toBe(d)
  })
})
;["p", "s", "c", "1"].forEach(d => {
  test(`${d} is not a direction `, () => {
    expect(() => new Direction(d)).toThrowError("incorrect direction")
  })
})
;[
  { s: "N", x: 0, y: 1 },
  { s: "S", x: 0, y: -1 },
  { s: "E", x: 1, y: 0 },
  { s: "W", x: -1, y: 0 }
].forEach(({s,x,y})=> {
  test(`${s}.x == ${x} && ${s}.y == ${y}`, () => {
    const direction = new Direction(s)
    expect(direction.x).toBe(x)
    expect(direction.y).toBe(y)
  })
})
;[["N", "E"], ["S", "W"], ["W", "N"], ["E", "S"]].forEach(([d1, d2]) => {
  test(`${d1}.turnRight() is ${d2}`, () => {
    const direction = new Direction(d1)
    direction.turnRight()
    expect(direction.valueOf()).toBe(d2)
  })

  test(`${d2}.turnLeft() is ${d1}`, () => {
    const direction = new Direction(d2)
    direction.turnLeft()
    expect(direction.valueOf()).toBe(d1)
  })
})
