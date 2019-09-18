import { Surface } from "./surface"

test(" has constructor and prop ", () => {
  const surface = new Surface(2, 5)
  expect(surface.w).toBe(2)
  expect(surface.h).toBe(5)
})
