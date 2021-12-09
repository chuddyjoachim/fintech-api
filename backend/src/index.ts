import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import app from "./app";
import http from "http";
import { ormConfig } from "./ormconfig";
import * as dotenv from "dotenv";

dotenv.config();

const http_ = new http.Server(app);
const App_Port = process.env.PORT;

(async () => {
  const connection: Connection = await createConnection(ormConfig);
  connection
    .synchronize()
    .then(async () => {
      http_.listen(App_Port, () => {
        try {
          return console.log(`Server started. on http://localhost:${App_Port}`);
        } catch (err) {
          console.log(err);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
})();


// createConnection().then(async connection => {

//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));