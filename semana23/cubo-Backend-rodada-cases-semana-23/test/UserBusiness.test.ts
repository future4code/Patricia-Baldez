describe("TESTE", ()=>{
    test ("jest funcionando",()=>{
        expect(true).toEqual(true)

    })
})

// import { UserBusiness } from '../src/business/UserBusiness';
// import { IdGeneratorMock } from './mocks/IdGeneratorMocks';
// import { UserDataMock } from './mocks/UserDataMock';


//  const userBusinessMock = new UserBusiness(
//     new IdGeneratorMock(),
//     new UserDataMock() as any
// );

// describe("Teste de quando criar o usuario",()=>{
  
//     test("Teste quando o firstName vier vazio", async () =>{
//         expect.assertions(1)
//         try {
//             await userBusinessMock.user({
//                 firstName:"",
//                 lastName:"da silva",
//                 participation: 5
//             })
//         } catch (error:any) {
//             expect(error.message).toEqual("Missing fields to complet")
//         }   
//         })
    // test ("Quando o Last Name do usuario vier vazio",async()=>{
    //         expect.assertions(1)
    //         try {
    //             await userBusinessMock.user({
    //                 firstName:"Ciclano",
    //                 lastName:"",
    //                 participation: 5
    //             })
    //         } catch (error:any) {
    //             expect(error.message).toEqual("Missing fields to complet")
    //         }   
    //         })
    //         test ("Erro quando o participation vier vazio ou zero",async()=>{
    //             expect.assertions(1)
    //             try {
    //                 const result = await userBusinessMock.user({
    //                     firstName:"Fulano",
    //                     lastName:"Da Silva",
    //                     participation: 10
    //                 })
    //                 expect(result).toEqual("Usuario criado com sucesso")
    //             } catch (error:any) {
    //                 console.log(error)
                    
    //             }   
    //             })
    // })

 
