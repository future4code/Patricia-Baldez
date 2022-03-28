import { isEven} from "../src"

describe("index.ts", ()=>{

test("isEven", ()=>{

    const result = isEven(2)
    expect(result).toBe(true)

    expect(isEven(3)).toBe(false)
    expect(isEven(3.7)).toBe(false)
  }) 

  test("Demontrando sintaxes",()=>{
      expect(3+5).toEqual(8)
      expect("").toBe("")
    //   expect ({}).toBe({}) // falha
      expect ({}).toEqual({})
  })
})