import { BaseDataBase } from './BaseDataBase';

class Migrations extends BaseDataBase {
    async createTable(){
        await this.getConnection().raw(`
        create table usuario_cubo123456(
            id varchar (255) primary key,
            firstName varchar (255) not null,
            lasrName varchar (255) not null,
            participation float
        )
        `)
        console.log("Tabela Usuario cubo foi criada com sucesso!");
    }
}

const createTableMigrations = new Migrations();
createTableMigrations.createTable();