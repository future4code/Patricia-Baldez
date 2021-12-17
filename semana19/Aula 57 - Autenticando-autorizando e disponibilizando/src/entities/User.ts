// aqui ja tenho meu usuario
export enum USER_ROLES{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}
export class User {
    constructor (private id: string,
         private name: string, 
         private email: string, 
         private password: string, 
         private role: string
         ) {}
         static toUserModel(data: any): User { //6
             return new User (data.id, data.nome, data.email, data.password, data.role)
         }
    }

// 3. agora crio os endpoints na pasta src, e crio minha signup