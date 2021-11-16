import { Sequelize } from "sequelize";

const db = new Sequelize('nodecrudtest', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;
