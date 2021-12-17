import {BaseDatabase} from "./BaseDatabase";
import {User} from "../entities/User";


export class UserDatabase extends BaseDatabase { //5
    public async findUserByemail(email: string): User {
        try {
            const user = wait BaseDatabase.connection('lbn_user')
            .select('*')
            .were({email});

            return User.toUserModel(User[0]);
        } catch (error) {
            throw new Error (error.sqlMessage || error.message);
        }
        }

    }


