import knex from "knex"
import {config} from "dotenv"

config()

export const isEven = (integer: number): any => {return true}

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    multipleStatements:true
  },
});

