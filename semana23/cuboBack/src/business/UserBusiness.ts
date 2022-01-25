import { UserData } from "../data/UserData";
import { MissingFieldsToComplet } from "../error/MissingFieldsToComplet";
import { UserInputDTO, UserInsertDTO } from "../model/User";
import IdGenerator from "../services/IdGenerator";

export class UserBusinees {

    async user(input: UserInputDTO) {

        if (input.participation === 0) {
            throw new Error("participation can't be zeor")
        }

        if (!input.firstName || !input.lastName || !input.participation) {
            throw new MissingFieldsToComplet()
        }


        const user: UserInsertDTO = {
            id: IdGenerator.generete(),
            ...input
        }

        const userData = new UserData();
        const result = await userData.insertUser(user)

        return result
    }

    async alluser(){
      
        const userData = new UserData();
        const result = await userData.getAllUser()

        return result
    }
   
}