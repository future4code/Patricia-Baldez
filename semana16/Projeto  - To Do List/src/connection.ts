import knex from "knex";
import dotenv from "dotenv"


dotenv.config();

const connection = knex({
   client: "mysql",
   connection: {
      host: "35.226.146.116",
      port: 3306,
      user: "patricia-dias",
      password: "PU3cpAXQP6!7#0$jT2QE",
      database: "maryam-patricia-dias",
      multipleStatements: true
   },
});

export default connection