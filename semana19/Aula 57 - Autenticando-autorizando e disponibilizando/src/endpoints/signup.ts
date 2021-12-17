import {Request, Response} from "express"
import {IdGenerator} from "../services/IdGenerator"

export async function signup (req: Request, res: Response) {
    try {
          const {name, email, password, role} = req.body

          if (!name || !email || !password || !role){
              res
              .status(422)
              .send(
                "insira corretamente a informações de 'name','email','password' e 'role'"
              );
          }
          const userDatabase = new UserDatabase();
          const user = userDatabase.findUserByEmail (email);

          if (user) {
            res.status(409).send('Este email ja esta cadastrado!');
          }

          const IdGenerator = new IdGenerator();
          const id = IdGenerator.generate()
        } catch(error){
          res.status(400).send(error.message);
    }
}