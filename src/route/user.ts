import * as express from "express";
import {
  getUsers,
  createUser,
  showUser,
  updateUser,
  deleteUser,
  authenticateUser,
  refreshToken,
} from "../handler/users";
import { authenticateToken } from "../helpers/middleware";
const user = (app: express.Application) => {
  app.get("/users",authenticateToken, getUsers);
  app.get("/users/:id",authenticateToken, showUser);
  app.post("/user", createUser);
  app.post("/login", authenticateUser);
  app.post("/refreshToken", refreshToken);
  app.patch("/user/:id",authenticateToken, updateUser);
  app.delete("/user/:id",authenticateToken, deleteUser);
};
export default user