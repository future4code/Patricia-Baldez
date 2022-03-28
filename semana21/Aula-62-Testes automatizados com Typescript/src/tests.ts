//  console.assert(true, "mensagem")
//  console.assert(false, "mensagem 2")

import {isEven} from ".";

let result = isEven(2)
console.assert (result === true, `isEven(2): esperava true, mas retornou ${result}`)
console.assert (isEven(3) === false, `isEven(3): esperava false, mas retornou ${isEven(3)}`)
console.assert (isEven(3.5) === false, `isEven(3.5): esperava false, mas retornou ${isEven(3.5)}`)

console.log ("Testes foram concluìdos")

const obj1 = {}
const obj2 = {}

console.log(obj1 ===obj2)