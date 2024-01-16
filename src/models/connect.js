import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "node38_appfood_nguyenthithienkieu",
  "root",
  "1234",
  {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
  }
);

export default sequelize;


