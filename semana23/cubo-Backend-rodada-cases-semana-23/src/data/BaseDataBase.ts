import knex, { Knex } from 'knex'
import { config } from 'dotenv'

config()

export class BaseDataBase {

    protected static connection: Knex | null = null

    protected getConnection(): Knex {
        if (!BaseDataBase.connection) {
            BaseDataBase.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    port: 3306,
                }
            })
        }

        return BaseDataBase.connection
    }
}

