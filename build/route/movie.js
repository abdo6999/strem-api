"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const movies_1 = require("../handler/movies");
const middleware_1 = require("../helpers/middleware");
const movie = (app) => {
    app.get("/movies", movies_1.getMovies);
    app.get("/movies/:id", movies_1.showMovies);
    app.post("/movie", middleware_1.authenticateToken, movies_1.createMovies);
    app.patch("/movie/:id", middleware_1.authenticateToken, movies_1.updateMovies);
    app.delete("/movie/:id", middleware_1.authenticateToken, movies_1.deleteMovies);
};
exports.default = movie;
