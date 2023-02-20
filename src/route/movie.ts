import * as express from "express";
import {getMovies,showMovies, createMovies, updateMovies, deleteMovies } from "../handler/movies";
import { authenticateToken } from "../helpers/middleware";
const movie = (app: express.Application)=>{
  app.get("/movies", getMovies);
  app.get("/movies/:id",showMovies );
  app.post("/movie",authenticateToken,createMovies  );
  app.patch("/movie/:id",authenticateToken, updateMovies);
  app.delete("/movie/:id",authenticateToken, deleteMovies );
}
export default movie