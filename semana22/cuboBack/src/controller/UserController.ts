import { Request, Response } from "express";
import { UserBusinees } from "../business/UserBusiness";
import { UserInputDTO } from "../model/User";

export class UserController {

    async createUser(req: Request, res: Response) {
        try {
            const { firstName, lastName, participation } = req.body;

            const input: UserInputDTO = {
                firstName,
                lastName,
                participation
            }

            const userBusiness = new UserBusinees()
            const message = await userBusiness.user(input)

            res.status(200).send({ message })

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message })
            } else {
                res.status(400).send({ message: "Unexpected Error !" })
            }
        }
    }


    async getAlluser(req: Request, res: Response) {
        try {

            const userBusiness = new UserBusinees();
            const allUsers = await userBusiness.alluser();

            res.status(200).send(allUsers)

        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message })
            } else {
                res.status(400).send({ message: "Unexpected Error !" })
            }
        }
    }
}