import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "luispost",
  password: "12345",
  database: "restcrud",
  synchronize: true,
  // logging: true,
  entities: [User],
});
