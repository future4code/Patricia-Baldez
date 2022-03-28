import { User, UserInsertDTO } from "../model/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {

    private static TABLE_NAME = "usuario_cubo"

    async insertUser(user: UserInsertDTO): Promise<string> {
        try {

            await this.getConnection().insert(user).into(UserData.TABLE_NAME)

            return "Usuario criado com sucesso";
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }


 
    async getAllUser() {
        try {
            const result: User[] = await this.getConnection()
            .select("*")
            .from(UserData.TABLE_NAME);
            
            const users = result.map((user)=>{
                return User.userModel(user)
            })

            return users;

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }



}