"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../handler/users");
const middleware_1 = require("../helpers/middleware");
const user = (app) => {
    app.get("/users", middleware_1.authenticateToken, users_1.getUsers);
    app.get("/users/:id", middleware_1.authenticateToken, users_1.showUser);
    app.post("/user", users_1.createUser);
    app.post("/login", users_1.authenticateUser);
    app.post("/refreshToken", users_1.refreshToken);
    app.patch("/user/:id", middleware_1.authenticateToken, users_1.updateUser);
    app.delete("/user/:id", middleware_1.authenticateToken, users_1.deleteUser);
};
exports.default = user;
