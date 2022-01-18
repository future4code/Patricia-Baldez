import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import knex from "knex";
import Knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
   },
})

const app = express();

app.use(express.json());

export type User = {
   id: string
   name: string
   email: string
   password: string
};

app.post("user/signup", async (req: Request, res: Response) => {
   try {

      const input = {
         email: req.body.email,
         name: req.body.name,
         password: req.body.password
      }

      const id = Date.now().toString()

      await connection.insert({
         id,
         ...input
      }).into("user");

      res.status(200).send("Usuário criado!");

   } catch (error) {
      res
         .status(error.statusCode || 400)
         .send({ error: error.message });
   }
});

const server = app.listen(3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
   } else {
      console.error(`Falha ao rodar o servidor.`);
   }
});  