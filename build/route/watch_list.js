"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movies_1 = require("../handler/movies");
const middleware_1 = require("../helpers/middleware");
const watch_list = (app) => {
    app.get("/watch-list", movies_1.getMovies);
    app.get("/watch-list/:id", movies_1.showMovies);
    app.post("/watch-list", middleware_1.authenticateToken, movies_1.createMovies);
    app.patch("/watch-list/:id", middleware_1.authenticateToken, movies_1.updateMovies);
    app.delete("/watch-list/:id", middleware_1.authenticateToken, movies_1.deleteMovies);
};
exports.default = watch_list;
